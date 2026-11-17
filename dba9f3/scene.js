/* Сцена из света и частиц. Свой WebGL без библиотек: страница открывается двойным щелчком (file://),
   модулей и сети не нужно. Объектов-моделей нет: город, посты, расписание и линия дня собраны из точек. */
(function () {
  'use strict';
  var N = 3200;
  var C = {
    dim: [0.30, 0.38, 0.52], mute: [0.44, 0.53, 0.68], acc: [0.29, 0.56, 0.91],
    light: [0.61, 0.77, 1.0], coral: [0.89, 0.34, 0.30], green: [0.20, 0.78, 0.48]
  };

  /* ---------- детерминированный генератор, чтобы кадры для слайдов совпадали между запусками ---------- */
  var seed = 7;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function rr(a, b) { return a + (b - a) * rnd(); }

  /* Формация: позиция, направление течения (длина = путь за цикл), цвет, размер */
  function F() { return { p: new Float32Array(N * 3), d: new Float32Array(N * 3), c: new Float32Array(N * 3), s: new Float32Array(N) }; }
  function put(f, i, x, y, z, dx, dy, dz, col, size) {
    var k = i * 3;
    f.p[k] = x; f.p[k + 1] = y; f.p[k + 2] = z;
    f.d[k] = dx; f.d[k + 1] = dy; f.d[k + 2] = dz;
    f.c[k] = col[0]; f.c[k + 1] = col[1]; f.c[k + 2] = col[2];
    f.s[i] = size;
  }
  function mix(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }

  /* Посты сервиса: 6 прямоугольников 3×5 в центре, контуры из плотных точек */
  var POSTS = [];
  for (var q = 0; q < 6; q++) POSTS.push({ x: -8.75 + q * 3.5, z: 0 });
  function postEdge(q, t) {
    var P = POSTS[q], w = 1.5, h = 2.5, per = 2 * (2 * w + 2 * h), L = t * per;
    if (L < 2 * w) return [P.x - w + L, P.z - h];
    L -= 2 * w; if (L < 2 * h) return [P.x + w, P.z - h + L];
    L -= 2 * h; if (L < 2 * w) return [P.x + w - L, P.z + h];
    L -= 2 * w; return [P.x - w, P.z + h - L];
  }

  /* 0. Город: улицы, машины-точки едут по ним, в центре светятся посты */
  function city(spread, carsAway) {
    var f = F(), i = 0;
    for (; i < 900; i++) { // посты
      var e = postEdge(i % 6, rnd());
      put(f, i, e[0], rr(0, 0.06), e[1], 0, 0, 0, carsAway ? C.mute : C.light, carsAway ? 1.0 : 1.5);
    }
    for (; i < 2300; i++) { // улицы
      var hor = rnd() < 0.5, k = Math.round(rr(-6, 6)) * 6.5, a = rr(-42, 42);
      var x = hor ? a : k, z = hor ? k : a;
      if (Math.abs(x) < 11 && Math.abs(z) < 4.5) { x += x < 0 ? -12 : 12; }
      var fade = 1 - Math.min(1, Math.hypot(x, z) / 48);
      put(f, i, x, 0, z, 0, 0, 0, mix([0.12, 0.16, 0.24], C.dim, fade), rr(0.6, 1.1));
    }
    for (; i < N; i++) { // машины
      var hor2 = rnd() < 0.5, k2 = Math.round(rr(-6, 6)) * 6.5, a2 = rr(-40, 40);
      var x2 = hor2 ? a2 : k2, z2 = hor2 ? k2 : a2, len = rr(5, 11), sgn;
      if (carsAway) { sgn = (hor2 ? x2 : z2) >= 0 ? 1 : -1; } else { sgn = (hor2 ? x2 : z2) >= 0 ? -1 : 1; }
      var cx = x2 * spread, cz = z2 * spread;
      put(f, i, cx, 0.15, cz, hor2 ? sgn * len : 0, 0, hor2 ? 0 : sgn * len, carsAway ? C.mute : (rnd() < 0.18 ? C.light : C.acc), rr(1.3, 2.1));
    }
    return f;
  }

  /* 2. Воронка: потоки машин по кривым сходятся в 6 постов */
  function funnel() {
    var f = city(1, false), i;
    for (i = 2300; i < N; i++) {
      var q = i % 6, ang = (q / 6) * Math.PI * 2 + rr(-0.25, 0.25), R = rr(26, 40), t = rnd();
      var sx = Math.cos(ang) * R, sz = Math.sin(ang) * R, ex = POSTS[q].x, ez = POSTS[q].z + 2.5 * (sz > 0 ? 1 : -1);
      var mx = (sx + ex) * 0.5 + rr(-3, 3), mz = (sz + ez) * 0.35;
      var u = 1 - t, x = u * u * sx + 2 * u * t * mx + t * t * ex, z = u * u * sz + 2 * u * t * mz + t * t * ez;
      var tx = 2 * u * (mx - sx) + 2 * t * (ex - mx), tz = 2 * u * (mz - sz) + 2 * t * (ez - mz), tl = Math.hypot(tx, tz) || 1;
      put(f, i, x, 0.15 + t * 0.2, z, tx / tl * 6, 0, tz / tl * 6, t > 0.8 ? C.light : C.acc, rr(1.3, 2.2));
    }
    return f;
  }

  /* 3. Расписание: стена 6 постов × 22 получаса, занятые ячейки горят, одна выбрана (коралл, как в продукте) */
  function schedule() {
    var f = F(), i = 0, cols = 6, rows = 22, cw = 3.2, ch = 1.15;
    var busy = {}; for (var b = 0; b < 46; b++) busy[Math.floor(rnd() * cols) + ':' + Math.floor(rnd() * rows)] = 1;
    var pick = '1:9';
    for (; i < N; i++) {
      var c = i % cols, r = Math.floor(i / cols) % rows, key = c + ':' + r;
      var x0 = (c - (cols - 1) / 2) * cw, y0 = ((rows - 1) / 2 - r) * ch;
      var on = busy[key] || key === pick, col, sz;
      if (on) { // заполненная ячейка
        put(f, i, x0 + rr(-1.35, 1.35), y0 + rr(-0.42, 0.42), rr(-0.15, 0.15), rr(-0.3, 0.3), 0, 0,
          key === pick ? C.coral : mix(C.acc, C.light, rnd() * 0.5), key === pick ? 1.9 : 1.5);
      } else { // пустая ячейка: только контур
        var t = rnd(), w = 1.4, h = 0.46, per = 2 * (2 * w + 2 * h), L = t * per, x, y;
        if (L < 2 * w) { x = -w + L; y = -h; } else if ((L -= 2 * w) < 2 * h) { x = w; y = -h + L; } else if ((L -= 2 * h) < 2 * w) { x = w - L; y = h; } else { L -= 2 * w; x = -w; y = h - L; }
        put(f, i, x0 + x, y0 + y, 0, 0, 0, 0, C.dim, 0.75);
      }
    }
    return f;
  }

  /* 4. Линия дня: пять узлов (запись, приезд, работы, выдача, итоги), поток течёт слева направо */
  function timeline() {
    var f = F(), i = 0;
    for (; i < 1100; i++) { // пять колец-узлов
      var n = i % 5, a = rnd() * Math.PI * 2, R = rr(1.6, 1.75);
      put(f, i, -24 + n * 12, Math.cos(a) * R, Math.sin(a) * R, 0, 0, 0, n === 4 ? C.green : C.light, 1.4);
    }
    for (; i < N; i++) {
      var x = rr(-34, 34), r = Math.pow(rnd(), 2) * 0.9, a2 = rnd() * Math.PI * 2;
      put(f, i, x, Math.cos(a2) * r, Math.sin(a2) * r, rr(6, 12), 0, 0, rnd() < 0.2 ? C.light : C.acc, rr(0.9, 1.7));
    }
    return f;
  }

  /* 5. Сфера: данные внутри защищённого контура */
  function sphere() {
    var f = F(), i, g = Math.PI * (3 - Math.sqrt(5));
    for (i = 0; i < 2200; i++) {
      var y = 1 - (i / 2199) * 2, r = Math.sqrt(1 - y * y), th = g * i, R = 11;
      put(f, i, Math.cos(th) * r * R, y * R, Math.sin(th) * r * R, -Math.sin(th) * 1.2, 0, Math.cos(th) * 1.2, i % 9 === 0 ? C.light : C.mute, 1.0);
    }
    for (; i < N; i++) {
      var a = rnd() * Math.PI * 2, b = Math.acos(rr(-1, 1)), R2 = Math.pow(rnd(), 0.5) * 5;
      put(f, i, Math.sin(b) * Math.cos(a) * R2, Math.cos(b) * R2, Math.sin(b) * Math.sin(a) * R2, 0, 0, 0, C.acc, rr(1.2, 2.0));
    }
    return f;
  }

  /* 6. Кольцо: финал, всё собрано в один контур */
  function ring() {
    var f = F(), i;
    for (i = 0; i < N; i++) {
      var a = rnd() * Math.PI * 2, thick = i < 2000 ? 0.22 : 2.0, R = 10.5 + (rnd() - 0.5) * thick;
      var y = (rnd() - 0.5) * (i < 2000 ? 0.2 : 1.6);
      put(f, i, Math.cos(a) * R, y, Math.sin(a) * R, -Math.sin(a) * 5, 0, Math.cos(a) * 5, i < 2000 ? (i % 7 === 0 ? C.light : C.acc) : C.mute, i < 2000 ? 1.5 : 0.9);
    }
    return f;
  }

  var FORMS = [city(1, false), city(1.25, true), funnel(), schedule(), timeline(), sphere(), ring()];

  /* ---------- камера: таблица опорных точек по слайдам (позиция, цель, угол) ---------- */
  /* Ракурс и строй частиц по типу слайда: порядок слайдов задаёт data.js, камера идёт по сплайну через эти точки */
  var BY_TYPE = {
    cover:    { p: [0, 26, 44], t: [-16, 0, -2], f: 32, form: 0 },     // высоко и наискосок над городом
    cards:    { p: [8, 58, 30], t: [-14, 0, 0], f: 34, form: 1 },      // почти сверху: машины уходят
    solution: { p: [22, 4, 26], t: [-6, 1, 0], f: 32, form: 2 },       // у самой земли, потоки идут на камеру
    path:     { p: [40, 14, 6], t: [-2, 0, 4], f: 30, form: 2 },       // сбоку справа
    demo:     { p: [-8, 2, 34], t: [-12, 0, 0], f: 30, form: 3 },      // прямо на стену расписания
    works:    { p: [10, -10, 32], t: [-12, 2, 0], f: 30, form: 3 },    // снизу вверх на стену
    cabinet:  { p: [26, 6, 26], t: [-6, 0, 0], f: 32, form: 3 },       // стена наискосок справа
    invoice:  { p: [-44, 3, 10], t: [-4, 0, -6], f: 30, form: 4 },     // низко от начала линии
    day:      { p: [-30, 3, 24], t: [-4, 0, 0], f: 30, form: 4 },
    ai:       { p: [6, 2.5, 30], t: [-14, 1, -6], f: 32, form: 0 },    // на уровне улиц ночного города
    trust:    { p: [14, 16, 40], t: [-20, 0, 0], f: 32, form: 5 },     // над сферой
    dealer:   { p: [-18, 30, -30], t: [-6, 0, 0], f: 32, form: 2 },    // с обратной стороны города
    compare:  { p: [2, 62, 8], t: [-2, 0, 0], f: 30, form: 0 },        // сверху, как на карте
    price:    { p: [-30, 8, 22], t: [-12, 0, 0], f: 32, form: 3 },     // низко и широко слева
    next:     { p: [2, 34, 56], t: [-21, 0, 2], f: 30, form: 6 }       // над кольцом
  };
  // маршрут перелёта к слайду: через какую точку летит камера (rel: смещение от середины пути, abs: точка в мире)
  var VIA = { // точки подтянуты к сцене: камера проносится рядом с фигурами, а не уходит вдаль
    cover: { rel: [0, 14, 10] }, cards: { rel: [0, 18, -6] }, solution: { rel: [14, -3, 6] }, path: { rel: [-16, 4, -14] },
    demo: { abs: [0, 1.5, 6] }, works: { rel: [10, -6, 10] }, cabinet: { rel: [-14, 10, 4] }, invoice: { abs: [-36, 2, 4] },
    day: { rel: [0, 8, 16] }, ai: { abs: [14, 1.2, 14] }, trust: { rel: [16, 4, -14] }, dealer: { rel: [0, -6, 14] },
    compare: { rel: [0, 20, 0] }, price: { rel: [-16, 0, 6] }, next: { abs: [0, 2, 0] }
  };
  var CAM = [BY_TYPE.cover], SLIDE_FORM = [0];

  function cr(a, b, c, d, t) { var t2 = t * t, t3 = t2 * t; return 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3); }
  function camAt(s) {
    var n = CAM.length, i = Math.max(0, Math.min(n - 1, Math.floor(s))), t = Math.min(1, s - i);
    var A = CAM[Math.max(0, i - 1)], B = CAM[i], Cc = CAM[Math.min(n - 1, i + 1)], D = CAM[Math.min(n - 1, i + 2)];
    var o = { p: [], t: [] };
    for (var k = 0; k < 3; k++) { o.p[k] = cr(A.p[k], B.p[k], Cc.p[k], D.p[k], t); o.t[k] = cr(A.t[k], B.t[k], Cc.t[k], D.t[k], t); }
    o.f = cr(A.f, B.f, Cc.f, D.f, t);
    return o;
  }

  /* ---------- матрицы ---------- */
  function persp(fov, asp, n, f) { var y = 1 / Math.tan(fov * Math.PI / 360); return [y / asp, 0, 0, 0, 0, y, 0, 0, 0, 0, (f + n) / (n - f), -1, 0, 0, 2 * f * n / (n - f), 0]; }
  function look(e, c, roll) {
    var z = [e[0] - c[0], e[1] - c[1], e[2] - c[2]], zl = Math.hypot(z[0], z[1], z[2]); z = [z[0] / zl, z[1] / zl, z[2] / zl];
    var x = [z[2], 0, -z[0]], xl = Math.hypot(x[0], x[1], x[2]) || 1; x = [x[0] / xl, x[1] / xl, x[2] / xl]; // up = (0,1,0)
    var y = [z[1] * x[2] - z[2] * x[1], z[2] * x[0] - z[0] * x[2], z[0] * x[1] - z[1] * x[0]];
    if (roll) { var cr = Math.cos(roll), sr = Math.sin(roll), x2 = [x[0] * cr + y[0] * sr, x[1] * cr + y[1] * sr, x[2] * cr + y[2] * sr]; y = [y[0] * cr - x[0] * sr, y[1] * cr - x[1] * sr, y[2] * cr - x[2] * sr]; x = x2; }
    return [x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0,
      -(x[0] * e[0] + x[1] * e[1] + x[2] * e[2]), -(y[0] * e[0] + y[1] * e[1] + y[2] * e[2]), -(z[0] * e[0] + z[1] * e[1] + z[2] * e[2]), 1];
  }

  /* ---------- шейдеры ---------- */
  var VS = 'attribute vec3 aP;attribute vec3 aD;attribute vec3 aC;attribute float aS;attribute float aK;' +
    'uniform mat4 uPr;uniform mat4 uV;uniform float uT;uniform float uPx;uniform float uMotion;uniform float uBoost;uniform float uBurst;uniform vec2 uMouse;uniform vec3 uRip;uniform float uAsp;uniform vec3 uShift;uniform float uAlpha;uniform float uKeep;varying vec3 vC;varying float vA;' +
    'void main(){float ph=fract(uT*0.07*(0.6+aK)+aK*13.7);float flow=length(aD)>0.0?1.0:0.0;' +
    'vec3 p=aP+uShift+aD*(ph-0.5)*uMotion;' +
    'p+=normalize(p+vec3(0.001,0.002,0.003))*uBurst*(2.0+aK*6.0);' +
    'p.y+=sin(uT*0.6+aK*40.0)*0.05*uMotion;' +
    'vec4 mv=uV*vec4(p,1.0);gl_Position=uPr*mv;float dz=-mv.z;' +
    'vec2 nd=gl_Position.xy/gl_Position.w;vec2 dm=(nd-uMouse)*vec2(uAsp,1.0);float md=length(dm);' +
    'float push=smoothstep(0.28,0.0,md)*0.07*uMotion;nd+=normalize(dm+vec2(1e-5))*push/vec2(uAsp,1.0);gl_Position.xy=nd*gl_Position.w;' +
    'float rd=length((nd-uRip.xy)*vec2(uAsp,1.0));float ring=exp(-pow((rd-uRip.z*1.6)*9.0,2.0))*max(0.0,1.0-uRip.z)*uMotion;' +
    'float tw=0.75+0.25*sin(uT*1.7+aK*90.0);' +
    'vA=mix(tw,sin(3.14159*ph),flow*uMotion)*smoothstep(120.0,40.0,dz)*smoothstep(1.0,6.0,dz);' +
    'vA*=1.0+uBoost*(0.6+0.4*sin(aK*20.0+uT*8.0))+smoothstep(0.3,0.0,md)*0.9*uMotion+ring*3.0+uBurst*0.8;vA*=uAlpha;vC=aC;gl_PointSize=aK>uKeep?0.0:clamp(aS*uPx*210.0/dz*(1.0+ring*1.2),1.5,64.0);}';
  var FS = 'precision mediump float;varying vec3 vC;varying float vA;' +
    'void main(){vec2 q=gl_PointCoord*2.0-1.0;float r=dot(q,q);if(r>1.0)discard;' +
    'float core=exp(-r*9.0);float halo=exp(-r*2.6)*0.35;float a=(core+halo)*vA;' +
    'gl_FragColor=vec4(vC*a*1.25+vec3(core*core*0.35*vA),a);}';
  /* Световой слой: мягкие пятна света над постами и зерно против полос градиента */
  var BVS = 'attribute vec2 aQ;varying vec2 vQ;void main(){vQ=aQ*0.5+0.5;gl_Position=vec4(aQ,0.0,1.0);}';
  var BFS = 'precision mediump float;varying vec2 vQ;uniform vec2 uL;uniform float uI;uniform float uAsp;uniform float uT;' +
    'float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}' +
    'void main(){vec2 d=(vQ-uL)*vec2(uAsp,1.0);float g=exp(-dot(d,d)*3.2)*uI;' +
    'vec3 base=vec3(0.039,0.063,0.125);vec3 col=base+vec3(0.10,0.22,0.42)*g*0.55+vec3(0.05,0.10,0.2)*exp(-dot(d,d)*0.6)*uI*0.5;' +
    'float v=smoothstep(1.25,0.35,length((vQ-0.5)*vec2(uAsp*0.8,1.0)));col*=mix(0.55,1.0,v);' +
    'col+=(h(gl_FragCoord.xy+uT)-0.5)/255.0*2.0;gl_FragColor=vec4(col,1.0);}';

  function compile(gl, vs, fs) {
    function sh(t, s) { var o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; }
    var p = gl.createProgram(); gl.attachShader(p, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    return p;
  }

  function init(canvas, opts) {
    var gl;
    try { gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: !!opts.shot, powerPreference: 'high-performance' }); } catch (e) { gl = null; }
    if (!gl) return null;
    CAM = (opts.types || ['cover']).map(function (t) { return BY_TYPE[t] || BY_TYPE.cover; });
    SLIDE_FORM = CAM.map(function (c) { return c.form; });
    var TYPES = opts.types || ['cover'];
    var prog, bprog;
    try { prog = compile(gl, VS, FS); bprog = compile(gl, BVS, BFS); } catch (e) { return null; }

    // текущее состояние частиц (смешивается между формациями на CPU, грузится в буфер только при смене)
    var cur = { p: new Float32Array(FORMS[0].p), d: new Float32Array(FORMS[0].d), c: new Float32Array(FORMS[0].c), s: new Float32Array(FORMS[0].s) };
    var from = null, to = FORMS[0], mt = 1, formIdx = 0;
    var keys = new Float32Array(N); for (var i = 0; i < N; i++) keys[i] = rnd();

    // старт: все точки собраны в одной световой точке и разлетаются в город (вступление)
    if (!opts.shot && !opts.reduced) { cur.p.fill(0); for (i = 0; i < N; i++) cur.p[i * 3 + 1] = 0.2; from = { p: new Float32Array(cur.p), d: cur.d, c: cur.c, s: cur.s }; mt = 0; }

    function buf(data, loc, size) { var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW); return { b: b, loc: gl.getAttribLocation(prog, loc), size: size }; }
    var B = { p: buf(cur.p, 'aP', 3), d: buf(cur.d, 'aD', 3), c: buf(cur.c, 'aC', 3), s: buf(cur.s, 'aS', 1), k: buf(keys, 'aK', 1) };
    var TN = 900, tun = { p: new Float32Array(TN * 3), d: new Float32Array(TN * 3), c: new Float32Array(TN * 3), s: new Float32Array(TN), k: new Float32Array(TN) };
    for (i = 0; i < TN; i++) tun.k[i] = rnd();
    function tbuf(data, loc, size) { var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW); return { b: b, loc: gl.getAttribLocation(prog, loc), size: size }; }
    var TB = { p: tbuf(tun.p, 'aP', 3), d: tbuf(tun.d, 'aD', 3), c: tbuf(tun.c, 'aC', 3), s: tbuf(tun.s, 'aS', 1), k: tbuf(tun.k, 'aK', 1) };
    var IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    var TN = 720, tun = { p: new Float32Array(TN * 3), d: new Float32Array(TN * 3), c: new Float32Array(TN * 3), s: new Float32Array(TN), k: new Float32Array(TN) };
    for (i = 0; i < TN; i++) {
      var ringI = Math.floor(i / 30), ang = (i % 30) / 30 * Math.PI * 2 + ringI * 0.21, rad = 3.4 + Math.sin(ringI * 1.7) * 0.5;
      tun.p[i * 3] = Math.cos(ang) * rad; tun.p[i * 3 + 1] = Math.sin(ang) * rad; tun.p[i * 3 + 2] = -4 - ringI * 3.1;
      var cc = ringI % 3 === 0 ? C.light : C.acc; tun.c[i * 3] = cc[0]; tun.c[i * 3 + 1] = cc[1]; tun.c[i * 3 + 2] = cc[2];
      tun.s[i] = 1.3; tun.k[i] = rnd();
    }
    function tbuf(data, loc, size) { var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); return { b: b, loc: gl.getAttribLocation(prog, loc), size: size }; }
    var TB = { p: tbuf(tun.p, 'aP', 3), d: tbuf(tun.d, 'aD', 3), c: tbuf(tun.c, 'aC', 3), s: tbuf(tun.s, 'aS', 1), k: tbuf(tun.k, 'aK', 1) };
    var IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    var TN = 720, tun = { p: new Float32Array(TN * 3), d: new Float32Array(TN * 3), c: new Float32Array(TN * 3), s: new Float32Array(TN), k: new Float32Array(TN) };
    for (i = 0; i < TN; i++) {
      var ringI = Math.floor(i / 30), ang = (i % 30) / 30 * Math.PI * 2 + ringI * 0.21, rad = 3.4 + Math.sin(ringI * 1.7) * 0.5;
      tun.p[i * 3] = Math.cos(ang) * rad; tun.p[i * 3 + 1] = Math.sin(ang) * rad; tun.p[i * 3 + 2] = -4 - ringI * 3.1;
      var cc = ringI % 3 === 0 ? C.light : C.acc; tun.c[i * 3] = cc[0]; tun.c[i * 3 + 1] = cc[1]; tun.c[i * 3 + 2] = cc[2];
      tun.s[i] = 1.3; tun.k[i] = rnd();
    }
    function tbuf(data, loc, size) { var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); return { b: b, loc: gl.getAttribLocation(prog, loc), size: size }; }
    var TB = { p: tbuf(tun.p, 'aP', 3), d: tbuf(tun.d, 'aD', 3), c: tbuf(tun.c, 'aC', 3), s: tbuf(tun.s, 'aS', 1), k: tbuf(tun.k, 'aK', 1) };
    var IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    var quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var U = {}; ['uPr', 'uV', 'uT', 'uPx', 'uMotion', 'uBoost', 'uBurst', 'uMouse', 'uRip', 'uAsp', 'uShift', 'uAlpha', 'uKeep'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
    var BU = {}; ['uL', 'uI', 'uAsp', 'uT'].forEach(function (n) { BU[n] = gl.getUniformLocation(bprog, n); });

    var fl = { on: false }, lastP = null, lastT = null, rideOn = false, rideW = 0, rideX = -46, rideTo = -46, tr = { mode: '', t0: -10 }, keep = 1, quality = 2, ema = 0.016, frames = 0, boost = 0, burst = 0, rip = [0, 0, 1], s = 0, sv = 0, sTarget = 0, mouse = [0, 0], mouseS = [0, 0], debug = opts.debug ? { yaw: 0, pitch: 0, dist: 0 } : null;
    var reduced = !!opts.reduced, px = Math.min(window.devicePixelRatio || 1, 1.25), W = 0, H = 0, lost = false;

    function resize() {
      W = Math.round(canvas.clientWidth * px); H = Math.round(canvas.clientHeight * px);
      if (canvas.width !== W || canvas.height !== H) { canvas.width = W; canvas.height = H; }
    }
    function setForm(k, instant) {
      if (k === formIdx && !instant) return;
      formIdx = k; from = { p: new Float32Array(cur.p), d: new Float32Array(cur.d), c: new Float32Array(cur.c), s: new Float32Array(cur.s) };
      to = FORMS[k]; mt = instant ? 1 : 0;
      if (instant) { cur.p.set(to.p); cur.d.set(to.d); cur.c.set(to.c); cur.s.set(to.s); upload(); }
    }
    function upload() {
      [['p', cur.p], ['d', cur.d], ['c', cur.c], ['s', cur.s]].forEach(function (x) { gl.bindBuffer(gl.ARRAY_BUFFER, B[x[0]].b); gl.bufferSubData(gl.ARRAY_BUFFER, 0, x[1]); });
    }
    function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function morph(dt) {
      if (mt >= 1 || !from) return;
      mt = Math.min(1, mt + dt / 2.2); // 2,2 с: 70 % от привычных 1,5 с
      for (var i = 0; i < N; i++) {
        var tt = ease(Math.max(0, Math.min(1, mt * 1.4 - keys[i] * 0.4))), k = i * 3;
        for (var j = 0; j < 3; j++) {
          cur.p[k + j] = from.p[k + j] + (to.p[k + j] - from.p[k + j]) * tt;
          cur.d[k + j] = from.d[k + j] + (to.d[k + j] - from.d[k + j]) * tt;
          cur.c[k + j] = from.c[k + j] + (to.c[k + j] - from.c[k + j]) * tt;
        }
        cur.s[i] = from.s[i] + (to.s[i] - from.s[i]) * tt;
      }
      upload();
    }
    // критически демпфированная пружина: довод 0,33 с, предел скорости 1,1 слайда в секунду
    function damp(dt) {
      var st = 0.33, om = 2 / st, x = om * dt, ex = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
      var ch = s - sTarget, mc = 0.8 * st; // предел скорости: 70 % от прежнего ch = Math.max(-mc, Math.min(mc, ch));
      var tgt = s - ch, tmp = (sv + om * ch) * dt; sv = (sv - om * tmp) * ex; s = tgt + (ch + tmp) * ex;
    }

    function draw(time) {
      resize(); gl.viewport(0, 0, W, H);
      var cam = camAt(s), asp = W / Math.max(1, H);
      var p = cam.p.slice(), t = cam.t.slice();
      if (fl.on) {
        var fu = Math.min(1, (time - fl.t0) / fl.dur), e2 = fu < 0.5 ? 4 * fu * fu * fu : 1 - Math.pow(-2 * fu + 2, 3) / 2, iu = 1 - e2;
        for (var qi = 0; qi < 3; qi++) {
          p[qi] = iu * iu * fl.A[qi] + 2 * iu * e2 * fl.V[qi] + e2 * e2 * fl.B[qi];
          t[qi] = iu * iu * fl.AT[qi] + 2 * iu * e2 * fl.VT[qi] + e2 * e2 * fl.BT[qi];
        }
        cam = { p: p, t: t, f: fl.Af + (fl.Bf - fl.Af) * e2 };
        if (fu >= 1) { fl.on = false; s = sTarget; sv = 0; }
      }
      var fr = s - Math.floor(s), arc = Math.sin(Math.PI * fr) * (Math.abs(s - sTarget) > 0.002 || Math.abs(sv) > 0.01 ? 1 : 0);
      p[1] += arc * 9; p[2] += arc * 12;
      var fovK = 0, tunA = 0, roll = 0; // угол обзора не скачет: стандарт 28–35°
      // пролёт камеры: у каждого перехода свой маршрут, все кривые начинаются и заканчиваются в нуле, поэтому рывков нет
      var tp = Math.max(0, Math.min(1, (time - tr.t0) / 2.1)), bell = Math.sin(Math.PI * tp), ez = tp < 0.5 ? 2 * tp * tp : 1 - Math.pow(-2 * tp + 2, 2) / 2;
      if (rideW > 0.001) { // смешение с обычной камерой, поэтому вход и выход без рывка
        var rp = [rideX - 6, 0.15, 0.35], rt = [rideX + 14, 0, -3.4];
        for (var q = 0; q < 3; q++) { p[q] += (rp[q] - p[q]) * rideW; t[q] += (rt[q] - t[q]) * rideW; }
      }
      if (tp < 1 && !reduced) {
        var vx = t[0] - p[0], vy = t[1] - p[1], vz = t[2] - p[2], vl = Math.hypot(vx, vy, vz) || 1, dol = bell * 12;
        p[0] += vx / vl * dol; p[1] += vy / vl * dol; p[2] += vz / vl * dol; // наезд по оси взгляда
        tunA = Math.min(1, tp / 0.12) * (1 - Math.max(0, Math.min(1, (tp - 0.62) / 0.26)));
        if (!tr.flash && tp > 0.6) { tr.flash = true; boost = 1.3; burst = Math.max(burst, 0.5); } // вспышка в момент прохода
      }
      if (debug) {
        var dx = p[0] - t[0], dy = p[1] - t[1], dz = p[2] - t[2], R = Math.hypot(dx, dy, dz) + debug.dist;
        var yaw = Math.atan2(dx, dz) + debug.yaw, pit = Math.asin(dy / Math.hypot(dx, dy, dz)) + debug.pitch;
        pit = Math.max(-1.4, Math.min(1.4, pit));
        p = [t[0] + Math.sin(yaw) * Math.cos(pit) * R, t[1] + Math.sin(pit) * R, t[2] + Math.cos(yaw) * Math.cos(pit) * R];
        opts.onDebug && opts.onDebug('{ p: [' + p.map(function (v) { return v.toFixed(1); }).join(', ') + '], t: [' + t.map(function (v) { return v.toFixed(1); }).join(', ') + '], f: ' + cam.f.toFixed(0) + ' }');
      }
      lastP = p.slice(); lastT = t.slice();
      var V = look(p, t, roll), P = persp(Math.max(28, Math.min(35, cam.f + fovK)), asp, 0.3, 200);
      // световое пятно над центром формации: проекция точки (0,0,0)
      var cx = V[12], cy = V[13], cz = V[14], clip = [P[0] * cx, P[5] * cy, -cz];
      var L = [clip[0] / clip[2] * 0.5 + 0.5, clip[1] / clip[2] * 0.5 + 0.5];
      gl.disable(gl.BLEND); gl.useProgram(bprog);
      gl.bindBuffer(gl.ARRAY_BUFFER, quad); var qa = gl.getAttribLocation(bprog, 'aQ'); gl.enableVertexAttribArray(qa); gl.vertexAttribPointer(qa, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(BU.uL, L[0], L[1]); gl.uniform1f(BU.uI, 1.0); gl.uniform1f(BU.uAsp, asp); gl.uniform1f(BU.uT, time % 100);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); gl.disableVertexAttribArray(qa);

      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.useProgram(prog);
      gl.uniformMatrix4fv(U.uPr, false, P); gl.uniformMatrix4fv(U.uV, false, V);
      gl.uniform1f(U.uT, time); gl.uniform1f(U.uPx, px * Math.min(1.4, H / (900 * px) + 0.25)); gl.uniform1f(U.uMotion, reduced ? 0 : 1); gl.uniform1f(U.uBoost, boost); gl.uniform1f(U.uBurst, burst);
      gl.uniform2f(U.uMouse, mouse[0], mouse[1]); gl.uniform3f(U.uRip, rip[0], rip[1], rip[2]); gl.uniform1f(U.uAsp, asp);
      for (var n in B) { gl.bindBuffer(gl.ARRAY_BUFFER, B[n].b); gl.enableVertexAttribArray(B[n].loc); gl.vertexAttribPointer(B[n].loc, B[n].size, gl.FLOAT, false, 0, 0); }
      gl.uniform3f(U.uShift, 0, 0, 0); gl.uniform1f(U.uAlpha, 1); gl.uniform1f(U.uKeep, keep);
      gl.uniform3f(U.uShift, 0, 0, 0); gl.uniform1f(U.uAlpha, 1); gl.uniform1f(U.uKeep, keep);
      gl.uniform3f(U.uShift, 0, 0, 0); gl.uniform1f(U.uAlpha, 1); gl.uniform1f(U.uKeep, keep);
      gl.drawArrays(gl.POINTS, 0, N);
      if (tunA > 0.01) { // тоннель рисуется в координатах камеры и едет навстречу
        gl.uniformMatrix4fv(U.uV, false, IDENT); gl.uniform3f(U.uShift, 0, 0, ez * 34); gl.uniform1f(U.uAlpha, tunA); gl.uniform1f(U.uKeep, 1);
        for (var m in TB) { gl.bindBuffer(gl.ARRAY_BUFFER, TB[m].b); gl.vertexAttribPointer(TB[m].loc, TB[m].size, gl.FLOAT, false, 0, 0); }
        gl.drawArrays(gl.POINTS, 0, TN);
      }
      if (tunA > 0.01) { // тоннель рисуется в координатах камеры и едет навстречу
        gl.uniformMatrix4fv(U.uV, false, IDENT); gl.uniform3f(U.uShift, 0, 0, ez * 74); gl.uniform1f(U.uAlpha, tunA); gl.uniform1f(U.uKeep, 1);
        for (var m in TB) { gl.bindBuffer(gl.ARRAY_BUFFER, TB[m].b); gl.vertexAttribPointer(TB[m].loc, TB[m].size, gl.FLOAT, false, 0, 0); }
        gl.drawArrays(gl.POINTS, 0, TN);
      }
      if (tunA > 0.01) { // тоннель рисуется в координатах камеры и едет навстречу
        gl.uniformMatrix4fv(U.uV, false, IDENT); gl.uniform3f(U.uShift, 0, 0, ez * 74); gl.uniform1f(U.uAlpha, tunA); gl.uniform1f(U.uKeep, 1);
        for (var m in TB) { gl.bindBuffer(gl.ARRAY_BUFFER, TB[m].b); gl.vertexAttribPointer(TB[m].loc, TB[m].size, gl.FLOAT, false, 0, 0); }
        gl.drawArrays(gl.POINTS, 0, TN);
      }
    }

    var last = 0, raf = 0, t0 = performance.now();
    function frame(now) {
      raf = requestAnimationFrame(frame);
      if (lost || document.hidden) return;
      var dt = Math.min(0.05, (now - (last || now)) / 1000); last = now;
      ema = ema * 0.95 + dt * 0.05; frames++;
      if (frames > 150 && quality > 0 && ema > 0.032) { quality--; frames = 0; ema = 0.016; keep = quality === 1 ? 0.6 : 0.38; px = 1; opts.onQuality && opts.onQuality(quality); }
      ema = ema * 0.95 + dt * 0.05; frames++;
      if (frames > 90 && quality > 0 && ema > 0.024) { quality--; frames = 0; ema = 0.016; keep = quality === 1 ? 0.6 : 0.38; px = 1; opts.onQuality && opts.onQuality(quality); }
      ema = ema * 0.95 + dt * 0.05; frames++;
      if (frames > 90 && quality > 0 && ema > 0.024) { quality--; frames = 0; ema = 0.016; keep = quality === 1 ? 0.6 : 0.38; px = 1; opts.onQuality && opts.onQuality(quality); }
      if (fl.on) { morph(dt); } else if (reduced) { s = sTarget; sv = 0; if (mt < 1) { mt = 0.999; morph(1); } } else { damp(dt); morph(dt); }
      rideW += ((rideOn ? 1 : 0) - rideW) * Math.min(1, dt * 1.6); rideX += (rideTo - rideX) * Math.min(1, dt * 1.3);
      boost = Math.max(0, boost - dt * 0.9); burst = Math.max(0, burst - dt * 0.9); rip[2] = Math.min(1, rip[2] + dt * 0.55);
      mouseS[0] += (mouse[0] - mouseS[0]) * Math.min(1, dt * 2.2); mouseS[1] += (mouse[1] - mouseS[1]) * Math.min(1, dt * 2.2);
      draw((now - t0) / 1000);
    }
    canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); lost = true; opts.onLost && opts.onLost(); });
    // щелчок по пустому месту сцены пускает световую волну по частицам
    window.addEventListener('pointerdown', function (e) {
      if (reduced || (e.target.closest && e.target.closest('button,a,input,[data-zoom],.app,.panel,.chat,.vs,.card,.overlay,.overlay-panel,table'))) return;
      rip = [(e.clientX / innerWidth - 0.5) * 2, (e.clientY / innerHeight - 0.5) * -2, 0];
    });
    window.addEventListener('pointermove', function (e) {
      if (reduced || e.pointerType === 'touch') return;
      mouse = [(e.clientX / innerWidth - 0.5) * 2, (e.clientY / innerHeight - 0.5) * -2];
    });
    if (debug) {
      var drag = null;
      canvas.style.pointerEvents = 'auto';
      canvas.addEventListener('pointerdown', function (e) { drag = [e.clientX, e.clientY]; });
      window.addEventListener('pointerup', function () { drag = null; });
      window.addEventListener('pointermove', function (e) { if (!drag) return; debug.yaw -= (e.clientX - drag[0]) * 0.005; debug.pitch += (e.clientY - drag[1]) * 0.005; drag = [e.clientX, e.clientY]; });
      canvas.addEventListener('wheel', function (e) { debug.dist += e.deltaY * 0.02; }, { passive: true });
    }

    var api = {
      go: function (i, instant, mode) {
        if (!instant && !reduced && i !== sTarget && lastP) {
          var B = CAM[i], via = VIA[TYPES[i]] || { rel: [0, 20, 0] }, V2 = [], VT = [];
          for (var q = 0; q < 3; q++) {
            var mid = (lastP[q] + B.p[q]) / 2;
            V2[q] = via.abs ? via.abs[q] : mid * 0.5 + via.rel[q];
            VT[q] = (lastT[q] + B.t[q]) / 2;
          }
          fl = { on: true, A: lastP.slice(), AT: lastT.slice(), V: V2, VT: VT, B: B.p.slice(), BT: B.t.slice(), Af: camAt(sTarget).f, Bf: B.f, t0: (performance.now() - t0) / 1000, dur: 2.3 };
          burst = 0.6;
        }
        sTarget = i; setForm(SLIDE_FORM[i] || 0, instant || reduced); if (instant || reduced) { s = i; sv = 0; } },
      setReduced: function (r) { reduced = r; },
      pulse: function () { if (!reduced) boost = 1.6; },
      ride: function (k) { if (reduced) return; if (k === null) { rideOn = false; return; } if (!rideOn) { rideX = -46; } rideOn = true; rideTo = k < 0 ? -40 : -24 + k * 12 + 4; },
      // кадр для слайда без анимации: для съёмки PPSX/PDF
      renderAt: function (i, time) { sTarget = s = i; sv = 0; setForm(SLIDE_FORM[i] || 0, true); mouseS = [0, 0]; draw(time || 4.0); },
      stop: function () { cancelAnimationFrame(raf); }
    };
    if (!opts.shot) raf = requestAnimationFrame(frame);
    return api;
  }

  window.LightScene = { init: init };
})();
