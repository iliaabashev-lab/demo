// Настоящая модель «Washing Machine (new)» (nikita.bulgakov, CC BY), сжата meshopt без склейки деталей.
// Один прогресс p (0…1) задаёт положение каждой детали, «рентген» корпуса, камеру и подписи.
// Пружина сглаживает только сам прогресс (метод impulse-site), поэтому детали не расходятся между собой.
// Ориентацию не угадываем: после загрузки меряем габариты деталей и разворачиваем машину дверцей к камере.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const ease = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const back = (p) => 1 - ease(0.86, 0.97, p); // в конце машина собирается обратно

// детали по именам узлов модели; всё, что не перечислено, — корпус («рентген»)
const GROUPS = {
  door: ['polySurface118', 'polySurface138', 'polySurface127', 'polySurface115', 'polySurface117',
    'pCylinder1022', 'pCylinder1023', 'pCylinder1024', 'pCylinder1026', 'pCylinder1028', 'pCylinder1029', 'pCylinder1030',
    'pSphere17', 'pSphere18', 'pCube49', 'pCube50', 'polySurface125', 'polySurface126', 'polySurface128', 'polySurface144'],
  top: ['polySurface119'],
  panel: ['polySurface116', 'polySurface121', 'polySurface131', 'polySurface120', 'polySurface130', 'polySurface139', 'polySurface141',
    'polySurface143', 'pSphere14', 'pSphere15', 'pSphere16', 'pSphere21', 'pSphere22', 'pSphere19', 'pSphere20', 'pCube52', 'pCube55',
    'pSphere23', 'pSphere24', 'pSphere25', 'pSphere26', 'pSphere27', 'pSphere28', 'pSphere29'],
  drum: ['pCylinder1037', 'polySurface133', 'polySurface134', 'polySurface136', 'polySurface137', 'pCube51', 'pCube53', 'pCube54', 'pCylinder1038'],
  hoses: ['pCylinder1025', 'pHelix9', 'polySurface146', 'pCylinder1014', 'pCylinder1027'],
  filter: ['polySurface122'],
  feet: ['pCube45', 'pCube46', 'pCube47', 'pCube48', 'pCylinder1015', 'pCylinder1016', 'pCylinder1020', 'pCylinder1036',
    'pCylinder1017', 'pCylinder1018', 'pCylinder1019', 'pCylinder1021', 'pHelix5', 'pHelix6', 'pHelix7', 'pHelix8'],
};
const groupOf = new Map(Object.entries(GROUPS).flatMap(([g, ns]) => ns.map((n) => [n, g])));

// камера (машина: высота 2,8, центр в нуле, дверца смотрит на +Z)
const KEYS = [
  { p: 0.0, pos: [1.4, 0.55, 8.4], tgt: [-0.7, 0.05, 0] },
  { p: 0.1, pos: [2.8, 0.9, 7.4], tgt: [-0.2, 0.1, 0.2] },
  { p: 0.26, pos: [5.4, 2.6, 6.6], tgt: [0, 0.45, 0.4] },
  { p: 0.46, pos: [6.4, 1.7, 9.8], tgt: [0, 0.0, 0.8] },
  { p: 0.64, pos: [0.6, -0.2, 9.0], tgt: [0, -0.55, 0.4] },
  { p: 0.78, pos: [-4.4, 0.6, 8.6], tgt: [-0.1, -0.45, 0] },
  { p: 0.9, pos: [-2.0, 1.0, 8.6], tgt: [0, 0, 0] },
  { p: 1.0, pos: [1.4, 0.55, 8.4], tgt: [-0.7, 0.05, 0] },
];
function cameraAt(p, out, tgt) {
  let i = 0;
  while (i < KEYS.length - 2 && p > KEYS[i + 1].p) i++;
  const a = KEYS[i], b = KEYS[i + 1], t = ease(a.p, b.p, p);
  out.set(lerp(a.pos[0], b.pos[0], t), lerp(a.pos[1], b.pos[1], t), lerp(a.pos[2], b.pos[2], t));
  tgt.set(lerp(a.tgt[0], b.tgt[0], t), lerp(a.tgt[1], b.tgt[1], t), lerp(a.tgt[2], b.tgt[2], t));
}

// подписи: деталь, окно прогресса, сторона, точка на детали в долях габарита (−1…1 по x, y, z)
const TAGS = [
  { part: 'door', from: 0.12, to: 0.3, side: 'right', at: [0.6, 0.7, 0.4] },
  { part: 'panel', from: 0.24, to: 0.4, side: 'left', at: [-0.6, 0.3, 0.6] },
  { part: 'drum', from: 0.46, to: 0.62, side: 'right', at: [0.4, 0.75, 0.2] },
  { part: 'filter', from: 0.62, to: 0.8, side: 'left', at: [0, 0, 1] },
  { part: 'hoses', from: 0.66, to: 0.82, side: 'left', at: [-0.95, -0.2, 0] },
  { part: 'feet', from: 0.68, to: 0.82, side: 'left', at: [-0.8, -1, 0.8] },
];
const TEXT = {
  door: ['Дверца и манжета', 'Течёт из-под люка, не закрывается', 'от 1 500 ₽'],
  panel: ['Модуль управления', 'Не включается, мигают индикаторы', 'от 3 500 ₽'],
  drum: ['Барабан и подшипники', 'Гул и стук на отжиме', 'от 4 500 ₽'],
  filter: ['Сливной фильтр и насос', 'Не сливает воду', 'от 2 000 ₽'],
  hoses: ['Шланги и патрубки', 'Лужа под машиной', 'от 1 200 ₽'],
  feet: ['Ножки и амортизаторы', 'Прыгает по полу при отжиме', 'от 1 800 ₽'],
};

export async function start({ canvas, labels, faults, reduced, fine, narrow, ST, onReady, onFail, modelUrl }) {
  const coarse = matchMedia('(pointer: coarse)').matches;
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { onFail(e); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarse ? 1.5 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(3.5, 7, 5); key.castShadow = true;
  key.shadow.mapSize.set(coarse ? 1024 : 2048, coarse ? 1024 : 2048);
  Object.assign(key.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: 1, far: 20 });
  key.shadow.bias = -0.0004; key.shadow.radius = 5;
  const rim = new THREE.DirectionalLight(0xe2eaff, 1.2); rim.position.set(-6, 4, -5);
  scene.add(key, rim, new THREE.HemisphereLight(0xffffff, 0xc4cad0, 0.3));

  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  let gltf;
  try { gltf = await loader.loadAsync(modelUrl); } catch (e) { onFail(e); return; }
  const model = gltf.scene;
  scene.add(model);
  model.updateMatrixWorld(true);

  // 1) раскладываем меши по группам, материалы корпуса — свои (их делаем прозрачными)
  const lists = {};
  const shellMats = new Map();
  const groupMats = new Map();
  model.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true; o.receiveShadow = true;
    // в исходнике один шланг проходит перед дверцей (ошибка расстановки в модели) — прячем
    if (o.name.startsWith('pCylinder1039') || o.parent?.name === 'pCylinder1039') { o.visible = false; return; }
    let g = groupOf.get(o.name.replace(/_[A-Za-z0-9]+_0$/, '').replace(/_[a-z_]+\d*_0$/i, '')) || groupOf.get(o.parent?.name) || 'shell';
    (lists[g] ||= []).push(o);
    const m = o.material;
    if (m.name === 'glass') { m.transparent = true; m.opacity = 0.3; m.roughness = 0.03; m.metalness = 0; o.castShadow = false; }
    else if (m.name === 'steel') { m.metalness = 0.95; m.roughness = 0.26; }
    else { m.metalness = 0; m.roughness = Math.min(m.roughness ?? 0.5, 0.38); }
    if (g === 'shell') {
      if (!shellMats.has(m.uuid)) { const c = m.clone(); c.transparent = true; shellMats.set(m.uuid, c); }
      o.material = shellMats.get(m.uuid);
    } else {
      // у каждой группы свои копии материалов — чтобы подсвечивать только ту деталь, о которой подпись
      const k = g + m.uuid;
      if (!groupMats.has(k)) { const c = m.clone(); c.emissive = new THREE.Color(0x2457d6); c.emissiveIntensity = 0; groupMats.set(k, { g, m: c }); }
      o.material = groupMats.get(k).m;
    }
  });

  // 2) масштаб и центр по габаритам всей машины
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const S = 2.8 / size.y;
  model.scale.multiplyScalar(S);
  model.updateMatrixWorld(true);
  box.setFromObject(model);
  const c = box.getCenter(new THREE.Vector3());
  model.position.sub(c);
  model.updateMatrixWorld(true);

  // 3) разворот дверцей к камере: направление от центра машины к центру дверцы
  const doorBox = new THREE.Box3();
  for (const o of lists.door) doorBox.expandByObject(o);
  const f = doorBox.getCenter(new THREE.Vector3()); f.y = 0; f.normalize();
  const turn = new THREE.Group(); scene.add(turn); turn.attach(model);
  turn.rotation.y = -Math.atan2(f.x, f.z);
  turn.updateMatrixWorld(true);

  // 4) каждая группа — свой узел с опорной точкой в центре габарита (в мировых осях: вперёд +Z, вверх +Y)
  const nodes = {}, home = {}, half = {};
  const rig = new THREE.Group(); scene.add(rig);
  for (const [g, list] of Object.entries(lists)) {
    const b = new THREE.Box3(); for (const o of list) b.expandByObject(o);
    const node = new THREE.Group(); node.name = g;
    node.position.copy(b.getCenter(new THREE.Vector3()));
    rig.add(node); node.updateMatrixWorld(true);
    for (const o of list) node.attach(o);
    nodes[g] = node; home[g] = node.position.clone(); half[g] = b.getSize(new THREE.Vector3()).multiplyScalar(0.5);
  }
  turn.removeFromParent();
  // дверца крутится на петле: переносим опору на левый край дверцы
  {
    const n = nodes.door, shift = new THREE.Vector3(-half.door.x, 0, 0);
    for (const ch of n.children) ch.position.sub(shift);
    n.position.add(shift); home.door.copy(n.position);
  }
  const bottomY = -1.4;

  // «рентген»: тонкие линии по граням корпуса
  const xray = new THREE.LineBasicMaterial({ color: 0x2457d6, transparent: true, opacity: 0, depthWrite: false });
  for (const o of lists.shell || []) {
    if (o.geometry.attributes.position.count > 8000) continue;
    o.add(new THREE.LineSegments(new THREE.EdgesGeometry(o.geometry, 30), xray));
  }
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.15 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = bottomY - 0.005; floor.receiveShadow = true; scene.add(floor);

  // подписи
  const tagEls = TAGS.map((t) => {
    const el = document.createElement('div');
    el.className = `tag${t.side === 'left' ? ' tag--left' : ''}`;
    const [h, sub, pr] = TEXT[t.part];
    el.innerHTML = `<span class="tag__dot"></span><span class="tag__box"><b>${h}</b><span>${sub}</span><em>${pr}</em></span>`;
    labels.append(el);
    return el;
  });
  const faultIndex = Object.fromEntries(faults.map((f2, i) => [f2.dataset.part, i]));

  const H = 2.8;
  function pose(p) {
    const b = back(p);
    nodes.door.rotation.y = -1.7 * ease(0.06, 0.18, p) * b;
    const lift = ease(0.18, 0.3, p) * b;
    nodes.top.position.y = home.top.y + lift * 0.75 * H * 0.45;
    nodes.panel.position.set(home.panel.x, home.panel.y + lift * 0.42, home.panel.z + lift * 0.7);
    const xr = ease(0.3, 0.42, p) * b;
    for (const m of shellMats.values()) { m.opacity = 1 - xr * 0.88; m.depthWrite = xr < 0.5; }
    xray.opacity = xr * 0.6;
    const d = ease(0.42, 0.56, p) * (1 - ease(0.6, 0.66, p)) * b;
    nodes.drum.position.set(home.drum.x, home.drum.y + d * 0.18, home.drum.z + d * 1.7);
    const run = reduced ? 0 : (1 - ease(0.03, 0.1, p)) * 0.6 + d * 0.5 + ease(0.92, 0.99, p) * 0.6;
    nodes.drum.rotation.z += run * 0.025;
    const low = ease(0.58, 0.7, p) * b;
    nodes.filter.position.set(home.filter.x, home.filter.y + low * 0.15, home.filter.z + low * 1.6);
    nodes.filter.scale.setScalar(1 + low * 0.6);
    nodes.hoses.position.set(home.hoses.x - low * 0.9, home.hoses.y - low * 0.1, home.hoses.z - low * 0.5);
    nodes.feet.position.y = home.feet.y - low * 0.45;
  }

  const s = { target: 0, x: 0, v: 0 };
  ST.create({ trigger: '.razbor', start: 'top top', end: 'bottom bottom', onUpdate: (st) => { s.target = st.progress; }, onRefresh: (st) => { s.target = st.progress; } });
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  if (fine && !reduced) addEventListener('pointermove', (e) => { pointer.x = e.clientX / innerWidth - 0.5; pointer.y = e.clientY / innerHeight - 0.5; }, { passive: true });

  let w = 1, h = 1;
  const resize = () => {
    const r = canvas.getBoundingClientRect(); w = Math.max(1, r.width); h = Math.max(1, r.height);
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  resize(); addEventListener('resize', resize);
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); onFail(new Error('WebGL context lost')); });

  const fades = [...document.querySelectorAll('[data-fade]')];
  const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(), tmp = new THREE.Vector3();
  const clock = new THREE.Clock();
  let first = true, active = -2;
  const glow = {};

  function frame(force) {
    const dt = Math.min(0.05, clock.getDelta());
    if (!visible && !first && !force) return;
    if (reduced) { s.x = s.target; s.v = 0; } else { const k = 34; s.v += ((s.target - s.x) * k - 2 * Math.sqrt(k) * s.v) * dt; s.x += s.v * dt; }
    const p = clamp01(s.x);
    pose(p);
    for (const el of fades) el.style.opacity = (1 - ease(0.02, 0.08, p)).toFixed(3);
    document.documentElement.style.setProperty('--legend', (ease(0.06, 0.12, p) * (1 - ease(0.9, 0.96, p))).toFixed(3));

    cameraAt(p, camPos, camTgt);
    const ar = w / h;
    if (ar < 0.9) { camTgt.x = 0; camTgt.y -= 0.5; camTgt.y += 0.95 * (1 - ease(0.02, 0.09, p)); } // на телефоне в начале машина ниже заголовка
    const far = ar < 0.6 ? 2.0 : ar < 0.9 ? 1.6 : ar < 1.25 ? 1.22 : 1;
    camPos.sub(camTgt).multiplyScalar(far).add(camTgt);
    pointer.sx += (pointer.x - pointer.sx) * 0.05; pointer.sy += (pointer.y - pointer.sy) * 0.05;
    camPos.x += pointer.sx * 0.5; camPos.y -= pointer.sy * 0.3;
    camera.position.copy(camPos); camera.lookAt(camTgt);
    // справа список поломок: пока он виден, сдвигаем кадр, чтобы машина стояла в свободной части экрана
    if (ar > 1.25) camera.setViewOffset(w, h, w * 0.085 * ease(0.05, 0.12, p) * (1 - ease(0.9, 0.96, p)), 0, w, h); else camera.clearViewOffset();
    rig.updateMatrixWorld(true);

    let on = -1;
    TAGS.forEach((t, i) => {
      const vis = ease(t.from, t.from + 0.03, p) * (1 - ease(t.to - 0.03, t.to, p));
      const n = nodes[t.part], hs = half[t.part];
      tmp.set(t.at[0] * hs.x, t.at[1] * hs.y, t.at[2] * hs.z);
      if (t.part === 'door') tmp.x += hs.x; // опора дверцы на петле, точка — от центра дверцы
      n.localToWorld(tmp).project(camera);
      const x = (tmp.x * 0.5 + 0.5) * w, y = (-tmp.y * 0.5 + 0.5) * h;
      const el = tagEls[i];
      el.style.opacity = vis.toFixed(3);
      const dx = t.side === 'left' ? -el.offsetWidth + 6 : -6;
      el.style.transform = `translate3d(${(x + dx).toFixed(1)}px, ${(y - 6).toFixed(1)}px, 0)`;
      if (vis > 0.5 && on < 0) on = faultIndex[t.part] ?? -1;
      glow[t.part] = Math.max(glow[t.part] || 0, vis);
    });
    for (const { g, m } of groupMats.values()) m.emissiveIntensity = (glow[g] || 0) * (0.55 + 0.25 * Math.sin(clock.elapsedTime * 3));
    for (const k in glow) glow[k] = 0;
    if (on !== active) {
      active = on;
      faults.forEach((f2, i) => f2.classList.toggle('is-on', i === on));
      if (on >= 0 && narrow()) { const f2 = faults[on], strip = f2.parentElement; strip.scrollTo({ left: f2.offsetLeft - (strip.clientWidth - f2.clientWidth) / 2, behavior: reduced ? 'auto' : 'smooth' }); }
    }
    renderer.render(scene, camera);
    if (first) { first = false; onReady(); }
  }
  if (renderer.compileAsync) await renderer.compileAsync(scene, camera).catch(() => {});
  renderer.setAnimationLoop(() => frame(false));
  document.addEventListener('visibilitychange', () => clock.getDelta());
  if (new URLSearchParams(location.search).has('debug')) window.__scene = { s, nodes, half, lists: Object.fromEntries(Object.entries(lists).map(([k, v]) => [k, v.length])), go: (p) => { s.target = s.x = p; s.v = 0; frame(true); } };
}
