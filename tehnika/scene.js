// Настоящая модель «Washing Machine (new)» (nikita.bulgakov, CC BY), сжата meshopt без склейки деталей.
// Один прогресс p (0…1) задаёт положение каждой детали, «рентген» корпуса, камеру и подписи.
// Пружина сглаживает только сам прогресс (метод impulse-site), поэтому детали не расходятся между собой.
// Ориентацию не угадываем: после загрузки меряем габариты деталей и разворачиваем машину дверцей к камере.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const ease = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const back = (p) => 1 - ease(0.86, 0.97, p); // в конце машина собирается обратно

// детали по именам узлов модели; всё, что не перечислено, — корпус («рентген»)
const GROUPS = {
  door: ['polySurface118', 'polySurface138', 'polySurface127', 'polySurface115', 'polySurface117'],
  top: ['polySurface119'],
  panel: ['polySurface116', 'polySurface121', 'polySurface131', 'polySurface120', 'polySurface130', 'polySurface139', 'polySurface141',
    'polySurface143', 'pSphere14', 'pSphere15', 'pSphere16', 'pSphere21', 'pSphere22', 'pSphere19', 'pSphere20', 'pCube52', 'pCube55',
    'pSphere23', 'pSphere24', 'pSphere25', 'pSphere26', 'pSphere27', 'pSphere28', 'pSphere29'],
  drum: ['pCylinder1037', 'polySurface133', 'polySurface134', 'polySurface136', 'polySurface137', 'pCube51', 'pCube53', 'pCube54', 'pCylinder1038'],
  hoses: ['pCylinder1025', 'pHelix9', 'polySurface146', 'pCylinder1014', 'pCylinder1027'],
  filter: ['polySurface122', 'polySurface142'], // лючок фильтра (правая часть цоколя) и его защёлка
  feet: ['pCube45', 'pCube46', 'pCube47', 'pCube48', 'pCylinder1015', 'pCylinder1016', 'pCylinder1020', 'pCylinder1036',
    'pCylinder1017', 'pCylinder1018', 'pCylinder1019', 'pCylinder1021', 'pHelix5', 'pHelix6', 'pHelix7', 'pHelix8'],
};
// вилка со шнуром лежит внутри машины перед стеклом, и ещё один шланг проходит сквозь дверцу — ошибки расстановки в модели
const HIDDEN = new Set(['pCylinder1039', 'pCylinder1022', 'pCylinder1023', 'pCylinder1024', 'pCylinder1026', 'pCylinder1028', 'pCylinder1029',
  'pCylinder1030', 'pSphere17', 'pSphere18', 'pCube49', 'pCube50', 'polySurface125', 'polySurface126', 'polySurface128', 'polySurface144']);
const groupOf = new Map(Object.entries(GROUPS).flatMap(([g, ns]) => ns.map((n) => [n, g])));

// камера (машина: высота 2,8, центр в нуле, дверца смотрит на +Z)
const KEYS = [
  { p: 0.0, pos: [1.4, 0.55, 8.4], tgt: [-0.7, 0.05, 0] },
  { p: 0.1, pos: [2.8, 0.9, 7.4], tgt: [-0.2, 0.1, 0.2] },
  { p: 0.26, pos: [5.4, 2.6, 6.6], tgt: [0, 0.45, 0.4] },
  { p: 0.46, pos: [6.4, 1.7, 9.8], tgt: [0, 0.0, 0.8] },
  { p: 0.62, pos: [-1.4, -0.45, 6.4], tgt: [-0.25, -0.95, 0.8] }, // крупно: фильтр и насос внизу спереди
  { p: 0.71, pos: [2.0, -0.55, 6.2], tgt: [0.25, -1.0, 0.7] }, // крупно: ТЭН и мотор
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
  { part: 'filter', from: 0.57, to: 0.67, side: 'right', at: [0, 0, 1] },
  { part: 'pump', from: 0.58, to: 0.67, side: 'left', at: [-0.6, 0.5, 0.6] },
  { part: 'heater', from: 0.66, to: 0.76, side: 'left', at: [0.8, 0, 1] },
  { part: 'motor', from: 0.67, to: 0.76, side: 'right', at: [-0.15, 0.1, 0.05] },
  { part: 'hoses', from: 0.75, to: 0.86, side: 'left', at: [-0.95, -0.2, 0] },
  { part: 'feet', from: 0.76, to: 0.86, side: 'right', at: [0.8, -1, 0.8] },
];
const TEXT = {
  door: ['Дверца и манжета', 'Течёт из-под люка, не закрывается', 'от 1 500 ₽'],
  panel: ['Модуль управления', 'Не включается, мигают индикаторы', 'от 3 500 ₽'],
  drum: ['Барабан и подшипники', 'Гул и стук на отжиме', 'от 4 500 ₽'],
  filter: ['Сливной фильтр', 'Не сливает воду, ошибка слива', 'от 1 500 ₽'],
  pump: ['Сливной насос', 'Гудит, но вода не уходит', 'от 2 500 ₽'],
  heater: ['ТЭН', 'Стирает в холодной воде', 'от 2 500 ₽'],
  motor: ['Мотор, щётки, ремень', 'Барабан не крутится, пахнет гарью', 'от 3 000 ₽'],
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
  renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
  // фон — то же пятно света, что было в CSS, но внутри сцены: так его не ломает постобработка
  {
    const c = document.createElement('canvas'); c.width = 1024; c.height = 640;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(640, 320, 0, 640, 320, 620);
    // при постобработке тон-маппинг проходит и по фону, поэтому для неё фон светлее, чтобы на экране совпасть с CSS
    const ao = !matchMedia('(pointer: coarse)').matches && innerWidth > 860 && !new URLSearchParams(location.search).has('noao');
    const [c0, c1, c2] = ao ? ['#4B5151', '#383C3C', '#262929'] : ['#2E3232', '#232626', '#1A1C1C'];
    grd.addColorStop(0, c0); grd.addColorStop(0.4, c1); grd.addColorStop(1, c2);
    g.fillStyle = grd; g.fillRect(0, 0, 1024, 640);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t;
  }
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(3.5, 7, 5); key.castShadow = true;
  key.shadow.mapSize.set(coarse ? 1024 : 4096, coarse ? 1024 : 4096);
  Object.assign(key.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: 1, far: 20 });
  key.shadow.bias = -0.0002; key.shadow.normalBias = 0.025; key.shadow.radius = 5; // normalBias убирает полосатую рябь теней на гладкой эмали
  const rim = new THREE.DirectionalLight(0xfff1dc, 2.2); rim.position.set(-6, 4, -5);
  // студийная трёхточечная схема: ключевой сверху-справа, мягкий заполняющий слева, контровой сзади (из него — блик по кромкам)
  const fill = new THREE.DirectionalLight(0xeef2ff, 0.9); fill.position.set(-5, 2.5, 4);
  scene.add(key, rim, fill, new THREE.HemisphereLight(0xffffff, 0xc4cad0, 0.35));
  scene.environmentIntensity = 1.15;

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
    if (HIDDEN.has(o.parent?.name) || HIDDEN.has(o.name.split('_')[0])) { o.visible = false; return; }
    let g = groupOf.get(o.name.replace(/_[A-Za-z0-9]+_0$/, '').replace(/_[a-z_]+\d*_0$/i, '')) || groupOf.get(o.parent?.name) || 'shell';
    (lists[g] ||= []).push(o);
    const m = o.material;
    // материалы автора оставляем как есть (глянцевая эмаль, полированная сталь); стеклу — чуть больше прозрачности
    if (m.name === 'glass') { m.opacity = 0.22; m.roughness = 0.02; o.castShadow = false; }
    if (m.map) m.map.anisotropy = renderer.capabilities.getMaxAnisotropy(); // максимальная фильтрация текстур
    if (g === 'shell') {
      if (!shellMats.has(m.uuid)) { const c = m.clone(); c.transparent = true; shellMats.set(m.uuid, c); }
      o.material = shellMats.get(m.uuid);
    } else {
      // у каждой группы свои копии материалов — чтобы подсвечивать только ту деталь, о которой подпись
      const k = g + m.uuid;
      if (!groupMats.has(k)) { const c = m.clone(); c.emissive = new THREE.Color(0xffffff); c.emissiveIntensity = 0; groupMats.set(k, { g, m: c }); }
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
  const xray = new THREE.LineBasicMaterial({ color: 0xf9f4eb, transparent: true, opacity: 0, depthWrite: false });
  for (const o of lists.shell || []) {
    if (o.geometry.attributes.position.count > 8000) continue;
    o.add(new THREE.LineSegments(new THREE.EdgesGeometry(o.geometry, 30), xray));
  }
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.45 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = bottomY - 0.005; floor.receiveShadow = true; scene.add(floor);


  // Насос, ТЭН и мотор: в исходной модели их нет. Делаем в тех же материалах, что и сама машина (сталь, серый пластик),
  // гладкой геометрией (вращение профиля, трубки), и ставим туда, где они стоят в настоящей фронтальной машине.
  {
    const base = {};
    for (const { m } of groupMats.values()) if (!base[m.name]) base[m.name] = m;
    const mat = (g, name, fallback) => {
      const src = base[name] || fallback;
      const k = g + ':' + name;
      if (!groupMats.has(k)) { const c = src.clone(); c.emissive = new THREE.Color(0xffffff); c.emissiveIntensity = 0; groupMats.set(k, { g, m: c }); }
      return groupMats.get(k).m;
    };
    const rubber = new THREE.MeshStandardMaterial({ name: 'rubber', color: 0x2b2d2e, roughness: 0.85 });
    const make = (g) => { const n = new THREE.Group(); n.name = g; rig.add(n); nodes[g] = n; return n; };
    const put = (n, geo, m, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => {
      const mesh = new THREE.Mesh(geo, m); mesh.position.set(x, y, z); mesh.rotation.set(rx, ry, rz);
      mesh.castShadow = true; mesh.receiveShadow = true; n.add(mesh); return mesh;
    };
    const lathe = (pts, seg = 48) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
    const dTop = home.drum.y - half.drum.y; // низ барабана
    const front = half.shell.z + (home.shell ? home.shell.z : 0);

    // сливной насос: улитка с крышкой фильтра спереди, моторчик сзади, патрубок вверх к баку
    const pump = make('pump');
    pump.position.set(home.filter.x - 0.06, bottomY + 0.27, front - 0.42);
    const grey = mat('pump', 'grey'), steelP = mat('pump', 'steel'), white = mat('pump', 'plastic_white');
    put(pump, lathe([[0, -0.07], [0.105, -0.07], [0.115, -0.05], [0.115, 0.05], [0.105, 0.07], [0, 0.07]]), grey, 0, 0, 0, Math.PI / 2);
    put(pump, lathe([[0, 0], [0.075, 0], [0.08, 0.02], [0.08, 0.06], [0.065, 0.075], [0, 0.075]]), white, 0, 0, 0.07, Math.PI / 2);
    put(pump, new THREE.CylinderGeometry(0.06, 0.06, 0.16, 40), steelP, 0, 0, -0.15, Math.PI / 2);
    put(pump, new THREE.CylinderGeometry(0.062, 0.062, 0.02, 40), grey, 0, 0, -0.08, Math.PI / 2);
    const inlet = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.1, 0), new THREE.Vector3(0, 0.22, -0.02), new THREE.Vector3(0.05, 0.36, -0.1), new THREE.Vector3(0.08, dTop - pump.position.y + 0.02, -0.18)]);
    put(pump, new THREE.TubeGeometry(inlet, 40, 0.032, 16, false), rubber);
    const outlet = new THREE.CatmullRomCurve3([new THREE.Vector3(0.1, 0, -0.02), new THREE.Vector3(0.22, 0.02, -0.05), new THREE.Vector3(0.3, 0.08, -0.25)]);
    put(pump, new THREE.TubeGeometry(outlet, 30, 0.022, 14, false), rubber);

    // ТЭН: U-образная трубка под барабаном с фланцем и клеммами
    const heater = make('heater');
    heater.position.set(home.drum.x, dTop - 0.05, home.drum.z);
    const steelH = mat('heater', 'steel'), greyH = mat('heater', 'grey');
    const L = Math.min(0.55, half.drum.z * 0.9);
    const u = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.07, 0, -L), new THREE.Vector3(-0.07, 0, L - 0.08), new THREE.Vector3(-0.045, 0, L - 0.015),
      new THREE.Vector3(0, 0, L), new THREE.Vector3(0.045, 0, L - 0.015), new THREE.Vector3(0.07, 0, L - 0.08), new THREE.Vector3(0.07, 0, -L)], false, 'centripetal');
    put(heater, new THREE.TubeGeometry(u, 120, 0.016, 16, false), steelH);
    put(heater, new THREE.BoxGeometry(0.2, 0.09, 0.025), greyH, 0, 0, -L - 0.012);
    for (const x of [-0.07, 0.07]) put(heater, new THREE.CylinderGeometry(0.009, 0.009, 0.05, 12), steelH, x, 0, -L - 0.045, Math.PI / 2);
    put(heater, new THREE.CylinderGeometry(0.012, 0.012, 0.05, 12), greyH, 0, 0.02, -L - 0.045, Math.PI / 2);

    // мотор с рёбрами, шкив и приводной ремень к шкиву барабана сзади
    const motor = make('motor');
    motor.position.set(home.drum.x + 0.38, bottomY + 0.34, home.drum.z - half.drum.z * 0.35);
    const greyM = mat('motor', 'grey'), steelM = mat('motor', 'steel');
    put(motor, lathe([[0, -0.19], [0.13, -0.19], [0.145, -0.17], [0.145, 0.17], [0.13, 0.19], [0, 0.19]]), greyM, 0, 0, 0, Math.PI / 2);
    for (let i = -3; i <= 3; i++) put(motor, new THREE.TorusGeometry(0.147, 0.006, 8, 48), steelM, 0, 0, i * 0.045);
    put(motor, new THREE.CylinderGeometry(0.012, 0.012, 0.12, 16), steelM, 0, 0, -0.25, Math.PI / 2);
    const pulleyZ = -0.3;
    put(motor, new THREE.CylinderGeometry(0.035, 0.035, 0.03, 32), steelM, 0, 0, pulleyZ, Math.PI / 2);
    // ремень: от шкива мотора к большому шкиву за барабаном (центр барабана, задняя стенка)
    const big = new THREE.Vector3(home.drum.x, home.drum.y, home.drum.z - half.drum.z - 0.03);
    const m0 = new THREE.Vector3(motor.position.x, motor.position.y, motor.position.z + pulleyZ);
    const R = Math.min(0.42, half.drum.y * 0.45), r = 0.035;
    const zB = big.z;
    const loop = [];
    for (let i = 0; i <= 24; i++) { const a = Math.PI * (i / 24); loop.push(new THREE.Vector3(big.x + Math.cos(a) * R, big.y + Math.sin(a) * R, zB)); }
    for (let i = 0; i <= 12; i++) { const a = Math.PI + Math.PI * (i / 12); loop.push(new THREE.Vector3(m0.x + Math.cos(a) * r, m0.y + Math.sin(a) * r, zB)); }
    const beltGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(loop, true), 160, 0.008, 8, true);
    const belt = new THREE.Mesh(beltGeo, rubber); belt.castShadow = true; motor.add(belt);
    belt.position.sub(motor.position);
    const bigWheel = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 0.02, 64), steelM); bigWheel.rotation.x = Math.PI / 2;
    bigWheel.position.copy(big).sub(motor.position); motor.add(bigWheel);

    for (const g of ['pump', 'heater', 'motor']) {
      const b = new THREE.Box3().setFromObject(nodes[g]);
      home[g] = nodes[g].position.clone();
      half[g] = b.getSize(new THREE.Vector3()).multiplyScalar(0.5);
      nodes[g].userData.center = b.getCenter(new THREE.Vector3()).sub(nodes[g].position);
    }
  }

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
    for (const m of shellMats.values()) { m.opacity = 1 - xr * 0.9; m.depthWrite = xr < 0.5; }
    xray.opacity = xr * 0.42;
    if (gtao) gtao.blendIntensity = 1 - xr; // в «рентгене» затенение прозрачного корпуса только мешает
    const d = ease(0.42, 0.56, p) * (1 - ease(0.6, 0.66, p)) * b;
    nodes.drum.position.set(home.drum.x, home.drum.y + d * 0.18, home.drum.z + d * 1.7);
    const run = reduced ? 0 : (1 - ease(0.03, 0.1, p)) * 0.6 + d * 0.5 + ease(0.92, 0.99, p) * 0.6;
    nodes.drum.rotation.z += run * 0.025;
    const a1 = ease(0.57, 0.63, p) * b, a2 = ease(0.65, 0.71, p) * b, low = ease(0.74, 0.8, p) * b;
    nodes.pump.position.set(home.pump.x - a1 * 0.35, home.pump.y + a1 * 0.05, home.pump.z + a1 * 1.15);
    nodes.heater.position.set(home.heater.x, home.heater.y - a2 * 0.12, home.heater.z + a2 * 1.35);
    nodes.motor.position.set(home.motor.x + a2 * 0.9, home.motor.y - a2 * 0.05, home.motor.z + a2 * 0.35);
    // лючок фильтра остаётся на своём месте внизу спереди — только подсвечивается (раньше улетал и выглядел мусором)
    nodes.hoses.position.set(home.hoses.x - low * 0.9, home.hoses.y - low * 0.1, home.hoses.z - low * 0.5);
    nodes.feet.position.y = home.feet.y - low * 0.45;
  }

  const s = { target: 0, x: 0, v: 0 };
  ST.create({ trigger: '.razbor', start: 'top top', end: 'bottom bottom', onUpdate: (st) => { s.target = st.progress; }, onRefresh: (st) => { s.target = st.progress; } });
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  if (fine && !reduced) addEventListener('pointermove', (e) => { pointer.x = e.clientX / innerWidth - 0.5; pointer.y = e.clientY / innerHeight - 0.5; }, { passive: true });

  let w = 1, h = 1;
  // затенение в углах и стыках (GTAO), как во вьюере Sketchfab. На телефонах и слабых машинах выключено.
  const aoOn = !coarse && !narrow() && (navigator.hardwareConcurrency || 4) >= 4 && !new URLSearchParams(location.search).has('noao');
  let composer = null, gtao = null;
  if (aoOn) {
    // свой буфер со сглаживанием MSAA ×4: без него постобработка даёт «лесенку» и мерцание краёв
    const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    gtao = new GTAOPass(scene, camera, 1, 1);
    gtao.updateGtaoMaterial({ radius: 0.22, distanceExponent: 1.4, thickness: 1.2, scale: 1.15, samples: 16 });
    gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 10, rings: 3, samples: 24 }); // сильнее сглаживаем шум затенения
    gtao.blendIntensity = 1;
    composer.addPass(gtao);
    composer.addPass(new OutputPass());
  }
  const resize = () => {
    const r = canvas.getBoundingClientRect(); w = Math.max(1, r.width); h = Math.max(1, r.height);
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); }
  };
  resize(); addEventListener('resize', resize);
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); onFail(new Error('WebGL context lost')); });

  const fades = [...document.querySelectorAll('[data-fade]')];
  const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(), tmp = new THREE.Vector3();
  const clock = new THREE.Clock();
  let first = true, active = -2;
  const perf = { t: 0, n: 0 };
  const glow = {};

  function frame(force) {
    const dt = Math.min(0.05, clock.getDelta());
    // защита от лагов: если 1,5 с подряд кадр медленнее ~40 к/с — сначала выключаем затенение, потом снижаем разрешение
    perf.t += dt; perf.n++;
    if (perf.t > 1.5) {
      const avg = perf.t / perf.n; perf.t = 0; perf.n = 0;
      if (avg > 1 / 40 && visible) {
        if (composer) { composer = null; gtao = null; }
        else if (renderer.getPixelRatio() > 1) { renderer.setPixelRatio(Math.max(1, renderer.getPixelRatio() - 0.5)); resize(); }
      }
    }
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
    for (const { g, m } of groupMats.values()) m.emissiveIntensity = (glow[g] || 0) * (0.06 + 0.03 * Math.sin(clock.elapsedTime * 2.5));
    for (const k in glow) glow[k] = 0;
    if (on !== active) {
      active = on;
      faults.forEach((f2, i) => f2.classList.toggle('is-on', i === on));
      if (on >= 0 && narrow()) { const f2 = faults[on], strip = f2.parentElement; strip.scrollTo({ left: f2.offsetLeft - (strip.clientWidth - f2.clientWidth) / 2, behavior: reduced ? 'auto' : 'smooth' }); }
    }
    if (composer) composer.render(); else renderer.render(scene, camera);
    if (first) { first = false; onReady(); }
  }
  if (renderer.compileAsync) await renderer.compileAsync(scene, camera).catch(() => {});
  renderer.setAnimationLoop(() => frame(false));
  document.addEventListener('visibilitychange', () => clock.getDelta());
  if (new URLSearchParams(location.search).has('debug')) window.__scene = { only: (g) => { for (const [k, n] of Object.entries(nodes)) n.visible = !g || k === g; for (const m of shellMats.values()) m.opacity = 1; frame(true); }, s, nodes, half, lists: Object.fromEntries(Object.entries(lists).map(([k, v]) => [k, v.length])), go: (p) => { s.target = s.x = p; s.v = 0; frame(true); } };
}
