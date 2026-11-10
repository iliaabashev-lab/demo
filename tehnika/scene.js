// Процедурная стиральная машина. Одна величина — прогресс разборки p (0…1) — задаёт положение каждой детали,
// камеру и подписи. Пружина сглаживает только сам прогресс, поэтому детали никогда не расходятся между собой.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const ramp = (a, b, x) => clamp01((x - a) / (b - a));
const ease = (a, b, x) => { const t = ramp(a, b, x); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

// сборка обратно в конце маршрута
const back = (p) => 1 - ease(0.84, 0.97, p);

// ключевые кадры камеры: прогресс → позиция, цель
const KEYS = [
  { p: 0.0, pos: [0.2, 0.4, 9.6], tgt: [0, 0, 0] },
  { p: 0.1, pos: [1.6, 0.9, 8.6], tgt: [0, 0.1, 0.2] },
  { p: 0.28, pos: [5.6, 2.0, 8.0], tgt: [0.1, 0.2, 0.7] },
  { p: 0.48, pos: [6.6, 1.4, 8.4], tgt: [0, 0.0, 1.0] },
  { p: 0.62, pos: [4.6, 0.2, 9.4], tgt: [0, -0.7, 0.8] },
  { p: 0.78, pos: [-4.2, 0.6, 9.6], tgt: [0, -0.5, 0.7] },
  { p: 0.9, pos: [-2.2, 1.0, 9.0], tgt: [0, 0, 0] },
  { p: 1.0, pos: [0.2, 0.4, 9.6], tgt: [0, 0, 0] },
];
function cameraAt(p, out, tgt) {
  let i = 0;
  while (i < KEYS.length - 2 && p > KEYS[i + 1].p) i++;
  const a = KEYS[i], b = KEYS[i + 1];
  const t = ease(a.p, b.p, p);
  out.set(lerp(a.pos[0], b.pos[0], t), lerp(a.pos[1], b.pos[1], t), lerp(a.pos[2], b.pos[2], t));
  tgt.set(lerp(a.tgt[0], b.tgt[0], t), lerp(a.tgt[1], b.tgt[1], t), lerp(a.tgt[2], b.tgt[2], t));
}

// подписи: какая деталь, когда показывать (окно прогресса), где точка привязки, с какой стороны текст
const TAGS = [
  { part: 'door', from: 0.17, to: 0.36, side: 'right', text: ['Дверца и манжета', 'Течёт из-под дверцы', 'от 1 500 ₽'] },
  { part: 'drum', from: 0.4, to: 0.58, side: 'right', text: ['Подшипники и сальник', 'Гудит и стучит на отжиме', 'от 4 500 ₽'] },
  { part: 'pump', from: 0.6, to: 0.82, side: 'left', text: ['Сливной насос', 'Не сливает воду', 'от 2 000 ₽'] },
  { part: 'heater', from: 0.62, to: 0.82, side: 'right', text: ['ТЭН', 'Стирает в холодной воде', 'от 2 500 ₽'] },
  { part: 'motor', from: 0.64, to: 0.82, side: 'right', text: ['Мотор и щётки', 'Барабан не крутится', 'от 3 000 ₽'] },
  { part: 'board', from: 0.66, to: 0.82, side: 'left', text: ['Модуль управления', 'Не включается', 'от 3 500 ₽'] },
];

function drumTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 256); grd.addColorStop(0, '#d9dee2'); grd.addColorStop(0.5, '#f4f6f7'); grd.addColorStop(1, '#c9cfd4');
  g.fillStyle = grd; g.fillRect(0, 0, 512, 256);
  g.fillStyle = '#7d8790';
  for (let y = 14; y < 256; y += 22) for (let x = (y / 22) % 2 ? 11 : 0; x < 512; x += 22) { g.beginPath(); g.arc(x, y, 4.2, 0, Math.PI * 2); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 1); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function displayTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 96;
  const g = c.getContext('2d');
  g.fillStyle = '#0d1820'; g.fillRect(0, 0, 256, 96);
  g.fillStyle = '#58b8ff'; g.font = '600 52px Unbounded, Arial, sans-serif'; g.textBaseline = 'middle'; g.fillText('1:05', 22, 50);
  g.fillStyle = '#E39A16'; g.beginPath(); g.arc(222, 48, 9, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function buildMachine() {
  const M = {
    enamel: new THREE.MeshPhysicalMaterial({ color: 0xf3f5f6, roughness: 0.32, clearcoat: 0.6, clearcoatRoughness: 0.25 }),
    shell: new THREE.MeshStandardMaterial({ color: 0xe4e8eb, roughness: 0.55, side: THREE.DoubleSide }),
    chrome: new THREE.MeshStandardMaterial({ color: 0xd8dde1, metalness: 1, roughness: 0.18 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x2a333b, roughness: 0.7 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x3b444b, roughness: 0.95 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0x9fc3ea, roughness: 0.05, transparent: true, opacity: 0.38, metalness: 0, clearcoat: 1 }),
    drum: new THREE.MeshStandardMaterial({ map: drumTexture(), metalness: 0.75, roughness: 0.3, side: THREE.DoubleSide }),
    copper: new THREE.MeshStandardMaterial({ color: 0xb87333, metalness: 0.9, roughness: 0.35, emissive: 0xff5a00, emissiveIntensity: 0 }),
    board: new THREE.MeshStandardMaterial({ color: 0x1f6b3a, roughness: 0.6 }),
    motor: new THREE.MeshStandardMaterial({ color: 0x5b646c, metalness: 0.6, roughness: 0.45 }),
    pump: new THREE.MeshStandardMaterial({ color: 0x2f3a44, roughness: 0.6 }),
    fault: new THREE.MeshStandardMaterial({ color: 0xe39a16, emissive: 0xe39a16, emissiveIntensity: 0.6, roughness: 0.4 }),
    screen: new THREE.MeshBasicMaterial({ map: displayTexture() }),
  };
  const W = 2.0, H = 2.8, D = 1.9, T = 0.06;
  const root = new THREE.Group();
  const parts = {};
  const add = (g, mesh, pos, name) => { if (pos) mesh.position.set(...pos); mesh.castShadow = true; mesh.receiveShadow = true; g.add(mesh); if (name) mesh.name = name; return mesh; };

  // корпус без передней стенки: бока, низ, задняя стенка
  const shell = new THREE.Group(); root.add(shell);
  add(shell, new THREE.Mesh(new RoundedBoxGeometry(T, H, D, 2, 0.03), M.enamel), [-W / 2, 0, 0]);
  add(shell, new THREE.Mesh(new RoundedBoxGeometry(T, H, D, 2, 0.03), M.enamel), [W / 2, 0, 0]);
  add(shell, new THREE.Mesh(new THREE.BoxGeometry(W, T, D), M.shell), [0, -H / 2 + T / 2, 0]);
  add(shell, new THREE.Mesh(new THREE.BoxGeometry(W, H, T), M.shell), [0, 0, -D / 2]);
  for (const x of [-0.8, 0.8]) for (const z of [-0.75, 0.75]) add(shell, new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.12, 16), M.dark), [x, -H / 2 - 0.06, z]);

  // крышка
  parts.lid = add(root, new THREE.Mesh(new RoundedBoxGeometry(W + 0.04, 0.08, D + 0.04, 3, 0.03), M.enamel), [0, H / 2 + 0.04, 0]);

  // передняя панель с отверстием под люк + панель управления + дверца
  const front = new THREE.Group(); front.position.set(0, 0, D / 2); root.add(front); parts.front = front;
  const sh = new THREE.Shape(); sh.moveTo(-W / 2, -H / 2); sh.lineTo(W / 2, -H / 2); sh.lineTo(W / 2, H / 2 - 0.55); sh.lineTo(-W / 2, H / 2 - 0.55); sh.closePath();
  const hole = new THREE.Path(); hole.absarc(0, -0.25, 0.62, 0, Math.PI * 2, true); sh.holes.push(hole);
  const fp = new THREE.ExtrudeGeometry(sh, { depth: 0.06, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.015, bevelSegments: 2, curveSegments: 48 });
  add(front, new THREE.Mesh(fp, M.enamel), [0, 0, -0.03]);
  const ctrl = add(front, new THREE.Mesh(new RoundedBoxGeometry(W, 0.55, 0.12, 3, 0.04), M.enamel), [0, H / 2 - 0.275, 0]);
  add(front, new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.2), M.screen), [0.02, H / 2 - 0.27, 0.065]);
  const knob = add(front, new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.08, 40), M.chrome), [0.6, H / 2 - 0.27, 0.09]); knob.rotation.x = Math.PI / 2;
  add(front, new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.22, 0.05, 2, 0.02), M.shell), [-0.62, H / 2 - 0.27, 0.07]);
  add(front, new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.18, 0.04, 2, 0.02), M.shell), [0.55, -H / 2 + 0.2, 0.03]);
  // манжета (резина) в проёме
  const cuff = add(front, new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.06, 16, 64), M.rubber), [0, -0.25, 0.02]); parts.cuff = cuff;
  // дверца на петле слева
  const door = new THREE.Group(); door.position.set(-0.7, -0.25, 0.08); front.add(door); parts.door = door;
  add(door, new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.085, 20, 72), M.chrome), [0.7, 0, 0]);
  add(door, new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.05, 16, 72), M.enamel), [0.7, 0, 0.02]);
  const glass = add(door, new THREE.Mesh(new THREE.SphereGeometry(1.27, 48, 16, 0, Math.PI * 2, 0, 0.49), M.glass), [0.7, 0, -1.1]);
  glass.rotation.x = Math.PI / 2; glass.castShadow = false;

  // барабан с подшипником и шкивом
  const drum = new THREE.Group(); drum.position.set(0, -0.25, 0.1); root.add(drum); parts.drum = drum;
  const cyl = add(drum, new THREE.Mesh(new THREE.CylinderGeometry(0.74, 0.74, 1.3, 64, 1, true), M.drum)); cyl.rotation.x = Math.PI / 2;
  const backDisc = add(drum, new THREE.Mesh(new THREE.CircleGeometry(0.74, 64), M.chrome), [0, 0, -0.65]); backDisc.rotation.y = Math.PI;
  const lip = add(drum, new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.04, 12, 64), M.chrome), [0, 0, 0.65]);
  for (let k = 0; k < 3; k++) { const pad = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 1.1), M.chrome); const a = (k / 3) * Math.PI * 2; pad.position.set(Math.cos(a) * 0.66, Math.sin(a) * 0.66, 0); pad.rotation.z = a; drum.add(pad); }
  parts.bearing = add(drum, new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.05, 16, 40), M.fault), [0, 0, -0.78]);
  const pulley = add(drum, new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.05, 48), M.dark), [0, 0, -0.86]); pulley.rotation.x = Math.PI / 2;

  // насос (внизу слева), ТЭН (под барабаном), мотор (внизу сзади), плата (сверху сзади)
  const pump = new THREE.Group(); pump.position.set(-0.55, -1.15, 0.45); root.add(pump); parts.pump = pump;
  const pb = add(pump, new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.3, 32), M.pump)); pb.rotation.z = Math.PI / 2;
  add(pump, new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.12, 24), M.fault), [-0.2, 0, 0]).rotation.z = Math.PI / 2;
  add(pump, new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 0.2), M.dark), [0.18, 0, 0]);

  const heater = new THREE.Group(); heater.position.set(0, -1.02, 0.1); root.add(heater); parts.heater = heater;
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(-0.15, 0, 0.6), new THREE.Vector3(-0.15, 0, -0.5), new THREE.Vector3(0, 0, -0.62), new THREE.Vector3(0.15, 0, -0.5), new THREE.Vector3(0.15, 0, 0.6)]);
  add(heater, new THREE.Mesh(new THREE.TubeGeometry(curve, 64, 0.035, 12, false), M.copper));
  add(heater, new THREE.Mesh(new RoundedBoxGeometry(0.48, 0.14, 0.08, 2, 0.02), M.dark), [0, 0, 0.64]);

  const motor = new THREE.Group(); motor.position.set(0.45, -1.1, -0.55); root.add(motor); parts.motor = motor;
  const mb = add(motor, new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.5, 32), M.motor)); mb.rotation.x = Math.PI / 2;
  add(motor, new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.12, 20), M.fault), [0, 0, -0.32]).rotation.x = Math.PI / 2;
  const belt = add(root, new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.015, 8, 80), M.dark), [0.22, -0.68, -0.98]); belt.scale.set(0.6, 1, 1); parts.belt = belt;

  const board = new THREE.Group(); board.position.set(0.15, 1.1, -0.6); root.add(board); parts.board = board;
  add(board, new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.04, 0.5), M.board));
  for (let k = 0; k < 6; k++) add(board, new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.1), k === 2 ? M.fault : M.dark), [-0.32 + k * 0.13, 0.05, (k % 2 ? 0.1 : -0.1)]);

  // точки привязки подписей (в локальных координатах групп)
  const anchors = {
    door: [door, new THREE.Vector3(0.7, 0.66, 0.05)],
    drum: [drum, new THREE.Vector3(0, 0.1, -0.78)],
    pump: [pump, new THREE.Vector3(-0.2, 0, 0)],
    heater: [heater, new THREE.Vector3(0.15, 0, 0.3)],
    motor: [motor, new THREE.Vector3(0, 0.22, -0.2)],
    board: [board, new THREE.Vector3(-0.2, 0.06, 0)],
  };
  const base = {}; for (const [k, g] of Object.entries(parts)) if (g.position) base[k] = g.position.clone();

  function pose(p, time, still) {
    const b = back(p);
    parts.door.rotation.y = -1.85 * ease(0.06, 0.18, p) * b;
    const fOut = ease(0.18, 0.3, p) * b;
    parts.front.position.set(base.front.x - fOut * 0.2, base.front.y + fOut * 0.2, base.front.z + fOut * 1.5);
    parts.front.rotation.y = -fOut * 0.55;
    parts.lid.position.y = base.lid.y + ease(0.2, 0.32, p) * b * 1.1;
    const dOut = ease(0.36, 0.5, p) * b;
    parts.drum.position.z = base.drum.z + dOut * 2.1;
    parts.drum.position.y = base.drum.y + dOut * 0.35;
    parts.belt.visible = dOut < 0.05;
    const bits = ease(0.56, 0.7, p) * b;
    parts.pump.position.set(base.pump.x - bits * 1.0, base.pump.y - bits * 0.35, base.pump.z + bits * 1.3);
    parts.heater.position.set(base.heater.x, base.heater.y - bits * 0.5, base.heater.z + bits * 1.9);
    parts.motor.position.set(base.motor.x + bits * 1.3, base.motor.y - bits * 0.4, base.motor.z + bits * 1.2);
    parts.board.position.set(base.board.x - bits * 0.6, base.board.y + bits * 0.95, base.board.z + bits * 1.3);
    M.copper.emissiveIntensity = 0.9 * ease(0.62, 0.7, p) * b;
    // барабан крутится в начале и после сборки — машина «работает»
    const run = still ? 0 : (1 - ease(0.04, 0.12, p)) + ease(0.9, 0.99, p);
    parts.drum.rotation.z = (parts.drum.userData.a = (parts.drum.userData.a || 0) + 0.04 * run);
    M.fault.emissiveIntensity = 0.35 + 0.35 * Math.sin(time * 3) * (still ? 0 : 1);
  }
  return { root, pose, anchors, materials: M };
}

export function start({ canvas, labels, faults, reduced, fine, narrow, gsap, ST, onReady, onFail }) {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const dprCap = coarse || narrow() ? 1.5 : 2;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { onFail(e); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, dprCap));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = !coarse;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);

  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(4, 7, 6); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024); key.shadow.camera.left = -4; key.shadow.camera.right = 4; key.shadow.camera.top = 4; key.shadow.camera.bottom = -4; key.shadow.bias = -0.0005;
  scene.add(key, new THREE.HemisphereLight(0xffffff, 0xb9c4cc, 0.6));
  const rim = new THREE.DirectionalLight(0xbcd6ff, 1.2); rim.position.set(-6, 3, -4); scene.add(rim);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ opacity: 0.14 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -1.52; floor.receiveShadow = true; scene.add(floor);

  const machine = buildMachine();
  machine.root.rotation.y = -0.12;
  scene.add(machine.root);

  // HTML-подписи
  const tagEls = TAGS.map((t) => {
    const el = document.createElement('div');
    el.className = `tag${t.side === 'left' ? ' tag--left' : ''}`;
    el.innerHTML = `<span class="tag__dot"></span><span class="tag__box"><b>${t.text[0]}</b><span>${t.text[1]}</span><em>${t.text[2]}</em></span>`;
    labels.append(el);
    return el;
  });

  // прогресс сцены: один ScrollTrigger → пружина
  const s = { target: 0, x: 0, v: 0 };
  ST.create({ trigger: '.razbor', start: 'top top', end: 'bottom bottom', onUpdate: (st) => { s.target = st.progress; }, onRefresh: (st) => { s.target = st.progress; } });

  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  if (fine && !reduced) addEventListener('pointermove', (e) => { pointer.x = e.clientX / innerWidth - 0.5; pointer.y = e.clientY / innerHeight - 0.5; }, { passive: true });

  let w = 0, h = 0;
  function resize() {
    const r = canvas.getBoundingClientRect();
    w = Math.max(1, r.width); h = Math.max(1, r.height);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // на широком экране справа легенда поломок: смещаем кадр, чтобы машина стояла по центру свободного места
    if (w > 860) camera.setViewOffset(w, h, Math.min(190, w * 0.13), 0, w, h); else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  }
  resize();
  addEventListener('resize', resize);

  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); onFail(new Error('WebGL context lost')); });

  const head = document.querySelector('.razbor__head');
  const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(), tmp = new THREE.Vector3();
  let time = 0, first = true, activeFault = -1;
  const clock = new THREE.Clock();
  const faultIndex = { door: 0, drum: 1, pump: 2, heater: 3, motor: 4, board: 5 };

  function frame() {
    const dt = Math.min(0.05, clock.getDelta());
    if (!visible && !first) return;
    time += dt;
    if (reduced) { s.x = s.target; s.v = 0; } else {
      const k = 38; // ниже — тяжелее, плавнее
      s.v += ((s.target - s.x) * k - 2 * Math.sqrt(k) * s.v) * dt;
      s.x += s.v * dt;
    }
    const p = clamp01(s.x);
    machine.pose(p, time, reduced);
    if (head) head.style.opacity = narrow() ? '' : (1 - ease(0.08, 0.14, p) + ease(0.9, 0.97, p)).toFixed(3);

    cameraAt(p, camPos, camTgt);
    const far = w / h < 0.6 ? 2.15 : w / h < 0.8 ? 1.7 : w / h < 1.2 ? 1.3 : 1;
    camPos.sub(camTgt).multiplyScalar(far).add(camTgt);
    if (w / h < 0.8) camTgt.y -= 0.35; // на телефоне машина чуть выше, снизу лента поломок
    pointer.sx += (pointer.x - pointer.sx) * 0.06; pointer.sy += (pointer.y - pointer.sy) * 0.06;
    camPos.x += pointer.sx * 0.6; camPos.y -= pointer.sy * 0.4;
    camera.position.copy(camPos); camera.lookAt(camTgt);

    // подписи: проекция точки детали на экран; показываем, пока окно прогресса открыто
    let on = -1;
    TAGS.forEach((t, i) => {
      const vis = ease(t.from, t.from + 0.03, p) * (1 - ease(t.to - 0.03, t.to, p));
      const [grp, local] = machine.anchors[t.part];
      tmp.copy(local); grp.localToWorld(tmp); tmp.project(camera);
      const x = (tmp.x * 0.5 + 0.5) * w, y = (-tmp.y * 0.5 + 0.5) * h;
      const el = tagEls[i];
      el.style.opacity = vis.toFixed(3);
      const dx = t.side === 'left' ? -el.offsetWidth + 7 : -7;
      el.style.transform = `translate3d(${(x + dx).toFixed(1)}px, ${(y - 7).toFixed(1)}px, 0)`;
      if (vis > 0.5 && on < 0) on = faultIndex[t.part];
    });
    if (on !== activeFault) {
      activeFault = on;
      faults.forEach((f, i) => f.classList.toggle('is-on', i === on));
      if (on >= 0 && narrow()) { const f = faults[on], strip = f.parentElement; strip.scrollTo({ left: f.offsetLeft - (strip.clientWidth - f.clientWidth) / 2, behavior: reduced ? 'auto' : 'smooth' }); }
    }

    renderer.render(scene, camera);
    if (first) { first = false; onReady(); }
  }
  renderer.compileAsync ? renderer.compileAsync(scene, camera).then(() => renderer.setAnimationLoop(frame), () => renderer.setAnimationLoop(frame)) : renderer.setAnimationLoop(frame);
  document.addEventListener('visibilitychange', () => { clock.getDelta(); });
  if (new URLSearchParams(location.search).has('debug')) window.__scene = { s, go: (p) => { s.target = s.x = p; s.v = 0; frame(); } };
}
