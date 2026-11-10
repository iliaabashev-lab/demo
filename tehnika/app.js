// Один «часы прокрутки» на каждую закреплённую сцену (как в impulse-site): ScrollTrigger публикует прогресс,
// сцена догоняет его через критически демпфированную пружину. Все состояния — функции прогресса,
// поэтому обратная прокрутка проигрывает всё назад без рассинхрона.
const root = document.documentElement;
root.dataset.booted = '1';
const gsap = window.gsap;
const ST = window.ScrollTrigger;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).has('reduce');
root.dataset.motion = reduced ? 'reduced' : 'full';
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const narrow = () => innerWidth <= 860;
if (gsap && ST) gsap.registerPlugin(ST);
if (gsap && window.MorphSVGPlugin) gsap.registerPlugin(window.MorphSVGPlugin);

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const ramp = (a, b, x) => clamp01((x - a) / (b - a));
const smooth = (a, b, x) => { const t = ramp(a, b, x); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

/* ---------- 1. Меню на весь экран ---------- */
{
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  const set = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    btn.querySelector('.menu-btn__label').textContent = open ? 'Закрыть' : 'Меню';
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
}

/* ---------- 2. Текст-переход в заголовке: старое слово уходит вверх по буквам, новое поднимается снизу ---------- */
{
  const el = document.querySelector('.swap');
  const words = el.dataset.words.split('|');
  let i = 0;
  // буквы внутри слова не переносятся, между словами обычный пробел — на телефоне строка переносится по словам
  const letters = (w) => w.split(' ').map((word) => `<span class="swap__word">${[...word].map((c) => `<span class="swap__ch"><i>${c}</i></span>`).join('')}</span>`).join(' ');
  if (!reduced && gsap) {
    el.innerHTML = letters(words[0]);
    setInterval(() => {
      if (document.hidden) return;
      i = (i + 1) % words.length;
      const out = [...el.querySelectorAll('i')];
      gsap.to(out, { yPercent: -105, duration: 0.38, ease: 'power3.in', stagger: 0.018, onComplete: () => {
        el.innerHTML = letters(words[i]);
        el.setAttribute('aria-label', words[i]);
        gsap.fromTo(el.querySelectorAll('i'), { yPercent: 105 }, { yPercent: 0, duration: 0.5, ease: 'power3.out', stagger: 0.022 });
      } });
    }, 2800);
  }
}

/* ---------- 3. Калькулятор с морфингом силуэта ---------- */
const PRICES = {
  washer: { shape: 'M40 30 H200 Q215 30 215 45 V245 Q215 260 200 260 H40 Q25 260 25 245 V45 Q25 30 40 30 Z', items: [
    ['Не сливает воду', 'насос или засор', 2000], ['Не греет воду', 'ТЭН или датчик', 2500], ['Гудит на отжиме', 'подшипники и сальник', 4500],
    ['Течёт из-под дверцы', 'манжета люка', 1500], ['Не включается', 'модуль или кнопка', 3500]] },
  fridge: { shape: 'M60 6 H180 Q195 6 195 21 V259 Q195 274 180 274 H60 Q45 274 45 259 V21 Q45 6 60 6 Z', items: [
    ['Не морозит', 'утечка фреона, заправка', 4500], ['Течёт вода внизу', 'засор дренажа', 1500], ['Шумит компрессор', 'реле или компрессор', 3500],
    ['Намерзает лёд на стенке', 'датчик или No Frost', 3000], ['Не закрывается дверь', 'уплотнитель', 2000]] },
  dish: { shape: 'M40 30 H200 Q215 30 215 45 V245 Q215 260 200 260 H40 Q25 260 25 245 V45 Q25 30 40 30 Z', items: [
    ['Не сливает воду', 'насос или фильтр', 2000], ['Плохо отмывает', 'импеллер или разбрызгиватели', 2500], ['Не греет воду', 'ТЭН или датчик', 3000],
    ['Течёт на пол', 'аквастоп или шланг', 2000]] },
  oven: { shape: 'M30 60 H210 Q225 60 225 75 V235 Q225 250 210 250 H30 Q15 250 15 235 V75 Q15 60 30 60 Z', items: [
    ['Не греет', 'ТЭН или терморегулятор', 2500], ['Не работает конвекция', 'вентилятор', 2500], ['Не горит подсветка', 'лампа или патрон', 1000],
    ['Выбивает автомат', 'замыкание проводки', 2000]] },
};
{
  const list = document.querySelector('.calc__list');
  const sum = document.querySelector('.calc__sum');
  const outline = document.querySelector('.shape-outline');
  const chips = [...document.querySelectorAll('.chip')];
  const fmt = (n) => n.toLocaleString('ru-RU').replace(/ /g, ' ');
  let kind = 'washer';
  const total = () => {
    const v = [...list.querySelectorAll('input:checked')].reduce((s, i) => s + +i.value, 0);
    sum.textContent = v ? `от ${fmt(v)} ₽` : 'Отметьте поломку';
  };
  const show = (k) => {
    kind = k;
    chips.forEach((c) => { const on = c.dataset.kind === k; c.classList.toggle('is-on', on); c.setAttribute('aria-checked', String(on)); });
    document.querySelectorAll('.shape-detail').forEach((g) => g.classList.toggle('is-on', g.dataset.kind === k));
    if (gsap && window.MorphSVGPlugin && !reduced) gsap.to(outline, { morphSVG: PRICES[k].shape, duration: 0.7, ease: 'power3.inOut' });
    else outline.setAttribute('d', PRICES[k].shape);
    list.innerHTML = PRICES[k].items.map(([t, why, p], i) =>
      `<label class="opt"><input type="checkbox" value="${p}" ${i === 0 ? 'checked' : ''}><span><b>${t}</b><small>${why}</small></span><em>от ${fmt(p)} ₽</em></label>`).join('');
    if (gsap && !reduced) gsap.from(list.children, { y: 14, opacity: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out' });
    total();
  };
  chips.forEach((c) => c.addEventListener('click', () => show(c.dataset.kind)));
  list.addEventListener('change', total);
  show(kind);
}

/* ---------- 4. Большие цифры: досчитываются, когда видны ---------- */
if (gsap && ST && !reduced) {
  document.querySelectorAll('.num').forEach((el) => {
    const to = +el.dataset.to; const o = { v: 0 };
    el.textContent = '0';
    gsap.to(o, { v: to, duration: 1.4, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => { el.textContent = Math.round(o.v); } });
  });
}

/* ---------- 5. Орбитальный таймлайн ---------- */
if (gsap && ST && !reduced) {
  const ring = document.querySelector('.orbit__ring');
  const dots = [...document.querySelectorAll('.orbit__dot')];
  const steps = [...document.querySelectorAll('.step')];
  const spring = { x: 0, v: 0, t: 0 };
  let last = -1;
  ST.create({ trigger: '.shagi', start: 'top top', end: 'bottom bottom', onUpdate: (s) => { spring.t = s.progress; } });
  steps[0].classList.add('is-on'); dots[0].classList.add('is-on');
  gsap.ticker.add((_, dtMs) => {
    const dt = Math.min(0.05, dtMs / 1000), k = 70;
    spring.v += ((spring.t - spring.x) * k - 2 * Math.sqrt(k) * spring.v) * dt;
    spring.x += spring.v * dt;
    // шаг i стоит наверху кольца на прогрессе i/4; между шагами кольцо поворачивается на 72°
    ring.style.setProperty('--rot', (-spring.x * 4 * 72).toFixed(2));
    const idx = Math.min(4, Math.round(spring.x * 4));
    if (idx !== last) { last = idx; steps.forEach((s, i) => s.classList.toggle('is-on', i === idx)); dots.forEach((d, i) => d.classList.toggle('is-on', i === idx)); }
  });
} else {
  document.querySelectorAll('.step, .orbit__dot').forEach((s) => s.classList.add('is-on'));
}

/* ---------- 6. Форма (демо) и липкая кнопка ---------- */
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.querySelector('.form__msg').textContent = 'Это демо: на вашем сайте заявка сразу придёт вам в Telegram.';
});
{
  const cta = document.querySelector('.sticky-cta');
  const z = document.getElementById('zayavka');
  new IntersectionObserver(([e]) => cta.classList.toggle('is-hidden', e.isIntersecting)).observe(z);
  const r = document.getElementById('razbor');
  new IntersectionObserver(([e]) => document.body.classList.toggle('in-razbor', e.isIntersecting && e.intersectionRatio > 0.2), { threshold: [0, 0.2, 0.5] }).observe(r);
}

/* ---------- 7. 3D: стиральная машина, которая разбирается на прокрутке ---------- */
const faults = [...document.querySelectorAll('.fault')];
function fallback(reason) {
  console.warn('[demo] 3D недоступно:', reason?.message ?? reason);
  root.dataset.state = 'fallback';
}
function webglOk() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
}
if (!webglOk() || !gsap || !ST) fallback('нет WebGL или GSAP');
else import('./scene.js').then((m) => m.start({ canvas: document.querySelector('.stage__canvas'), labels: document.querySelector('.stage__labels'),
  faults, reduced, fine, narrow, gsap, ST, onReady: () => { root.dataset.state = 'ready'; ST.refresh(); }, onFail: fallback }))
  .catch(fallback);
setTimeout(() => { if (root.dataset.state === 'loading') fallback('сцена не успела загрузиться'); }, 15000);
