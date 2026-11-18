/* Логика презентации. Хранилище состояния создаётся до отрисовки, все кнопки работают через него. */
(function () {
  'use strict';
  var D = window.DECK, S = D.slides, KEY = 'avtohabr-lada-v1';
  var Q = new URLSearchParams(location.search);
  var SHOT = Q.has('shot') ? Math.max(0, Math.min(S.length - 1, parseInt(Q.get('shot'), 10) - 1 || 0)) : -1;
  var DEBUG = Q.has('debug');

  /* ---------- хранилище ---------- */
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
  var saved = load();
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var store = {
    i: 0, prev: -1,
    reduced: typeof saved.reduced === 'boolean' ? saved.reduced : false, // одинаково на всех устройствах; клавиша M выключает эффекты вручную
    notes: false, overview: false,
    path: { step: 0, auto: true },
    cab: 0,
    calc: { check: saved.calc && saved.calc.check >= 1000 ? saved.calc.check : 2500 },
    demo: { step: 1, svc: null, day: 0, time: null, name: '', phone: '', car: '', sending: false, done: null, flash: null,
      list: (saved.demo && Array.isArray(saved.demo.list)) ? saved.demo.list.filter(function (b) { return typeof b.day === 'number'; }) : [] },
    works: { q: 'замена', sel: saved.works && Array.isArray(saved.works.sel) ? saved.works.sel : [], rate: 2500 },
    inv: { state: 'idle', n: 0 },
    ai: { msgs: [], typing: false, busy: false },
    rival: 0,
    flip: {},
    tick: saved.tick && typeof saved.tick === 'object' ? saved.tick : {}
  };
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({ reduced: store.reduced, calc: store.calc, demo: { list: store.demo.list }, works: { sel: store.works.sel }, tick: store.tick })); } catch (e) { /* приватный режим: работаем без сохранения */ }
  }
  if (SHOT >= 0) { // кадр для PPSX/PDF: показательное состояние интерактивных слайдов
    store.reduced = true; store.path.step = 2; store.path.auto = false;
    store.demo = { step: 4, svc: 3, day: 0, time: '10:30', name: 'Андрей', phone: '', car: 'Lada Vesta', sending: false, flash: null, done: null,
      list: [{ key: 'k1', day: 0, time: '10:30', svc: 3, name: 'Андрей', car: 'Lada Vesta' }] };
    store.works = { q: 'замена', sel: [0, 1, 3], rate: 2500 };
    store.inv = { state: 'parsed', n: 6 };
    store.ai = { msgs: null, typing: false, busy: false };
    store.calc.check = 2500;
  }

  /* ---------- утилиты ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function r(k) { return ' r" style="--i:' + k; }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function plural(n, f) { var a = n % 10, b = n % 100; return f[(a === 1 && b !== 11) ? 0 : (a >= 2 && a <= 4 && (b < 12 || b > 14)) ? 1 : 2]; }
  function rub(n) { return Math.round(n).toLocaleString('ru-RU').replace(/ | /g, ' '); }
  function win(src, cap, cls) {
    return '<div class="win tilt ' + (cls || '') + '" data-zoom="assets/img/' + src + '" data-cap="' + cap + '" role="button" tabindex="0" aria-label="Увеличить: ' + cap + '">' +
      '<div class="chrome"><i></i><i></i><i></i><span>app.avtohabr.ru</span></div><img src="assets/img/' + src + '" alt="' + cap + '" loading="eager"><div class="glare"></div><span class="zoomhint">Увеличить</span></div>';
  }
  function head(s, k) { return '<div class="kicker' + r(k) + '">' + s.kicker + '</div><h1 class="' + (s.type === 'cover' ? 'hero sweep' : '') + r(k + 1) + '">' + s.title + '</h1>'; }

  /* ---------- шаблоны слайдов: один компонент на тип, данные из data.js ---------- */
  var T = {
    cover: function (s) {
      return '<div class="cover">' + head(s, 0) + '<p class="lead' + r(2) + '">' + s.lead + '</p><div class="meta' + r(3) + '">' +
        s.meta.map(function (m, j) { return '<span class="chip' + (j === 0 ? ' acc' : '') + '">' + m + '</span>'; }).join('') + '</div></div>' +
        '<div class="hint">Дальше: → или пробел</div>';
    },
    cards: function (s) {
      return head(s, 0) + '<div class="grid2">' + s.cards.map(function (c, j) {
        return '<button class="flipcard' + r(2 + j) + '" data-act="flip" data-k="' + j + '" aria-pressed="false"><span class="fc-in"><span class="card fc-front"><span class="num">' + pad2(j + 1) + '</span><h3>' + c[0] + '</h3><p>' + c[1] + '</p></span>' +
          '<span class="card fc-back"><span class="num">AVTOHABR</span><h3>' + c[0] + '</h3><p>' + c[2] + '</p></span></span></button>';
      }).join('') + '</div><p class="foot' + r(6) + '">' + s.foot + '</p>';
    },
    solution: function (s) {
      return '<div class="split"><div>' + head(s, 0) + '<div class="list3">' + s.items.map(function (it, j) {
        return '<div class="' + r(2 + j) + '"><h3>' + it[0] + '</h3><p>' + it[1] + '</p></div>';
      }).join('') + '</div></div><div class="windows' + r(3) + '">' + win(s.shots[1][0], s.shots[1][1], 'back') + win(s.shots[0][0], s.shots[0][1], 'front') + '</div></div>';
    },
    path: function (s) {
      var st = store.path.step;
      return head(s, 0) + '<div class="path"><div class="steps' + r(2) + '" role="tablist">' + s.steps.map(function (x, j) {
        return '<button class="step' + (j === st ? ' on' : '') + '" role="tab" aria-selected="' + (j === st) + '" data-act="step" data-k="' + j + '"><span class="n">' + pad2(j + 1) + '</span><span><h3>' + x[0] + '</h3><p>' + x[1] + '</p></span></button>';
      }).join('') + '</div><div class="stepview' + r(3) + '"><div class="deck">' + s.steps.map(function (x, j) {
        var o = (j - st + 4) % 4; return '<div class="dk' + (o === 0 ? ' front' : '') + '" style="--o:' + o + '">' + win(x[2], x[0]) + '</div>';
      }).join('') + '</div><div class="prog' + (store.path.auto && !store.reduced ? ' auto' : '') + '">' + s.steps.map(function (x, j) { return '<i class="' + (j < st ? 'done' : j === st ? 'cur' : '') + '"></i>'; }).join('') + '</div></div></div>';
    },
    demo: function (s) { return head(s, 0) + '<div class="demo' + r(2) + '" id="demoBox">' + demoInner(s) + '</div>'; },
    works: function (s) {
      var t = wTotals();
      return head(s, 0) + '<div class="works"><div class="app wapp' + r(2) + '"><div class="w-head"><b>Работы</b><b class="mono" id="wSum">' + rub(t.sum) + ' ₽</b></div>' +
        '<p class="w-hint">Добавьте работы: начните вводить название, подскажем услуги из вашего прайса.</p><input id="wq" class="w-input" autocomplete="off" aria-label="Поиск работы" value="' + esc(store.works.q) + '">' +
        '<p class="w-cap" id="wCap">Справочник нормо-часов • ' + rub(store.works.rate) + ' ₽ за час</p><div class="w-list" id="wList">' + wListInner() + '</div></div>' +
        '<div class="panel' + r(3) + '"><h4>Заказ-наряд</h4><div id="wOrder">' + wOrderInner() + '</div><p class="w-rateline">Стоимость нормо-часа из настроек сервиса: <b class="mono">' + rub(store.works.rate) + ' ₽</b></p>' +
        '<p class="small">' + s.note + '</p></div></div>';
    },
    invoice: function (s) {
      return head(s, 0) + '<div class="works inv"><div class="app' + r(2) + '"><div class="wh-tabs">' + ['Остатки', 'Приход', 'Загрузить накладную', 'Проценка', 'Движения'].map(function (x, j) { return '<span' + (j === 2 ? ' class="on"' : '') + '>' + x + '</span>'; }).join('') + '</div>' +
        '<p class="w-hint">Загрузите <b>товарную накладную поставщика</b> (ТОРГ-12, УПД, счёт-фактура — файл Excel .xlsx как есть, ничего не переименовывая).</p>' +
        '<div class="xls-wrap' + (store.inv.n ? '' : ' empty') + '" id="invTableWrap"><table class="xls-t"><thead><tr><th>Наименование</th><th>Артикул</th><th>Кол-во</th><th>Цена</th><th>НДС</th><th>Сумма</th></tr></thead><tbody id="invTable">' + invRows() + '</tbody></table></div>' +
        '<div id="invFoot">' + invFoot() + '</div></div>' +
        '<div class="panel' + r(3) + '"><h4>Склад · остатки</h4><div class="stock" id="stock">' + stockInner() + '</div><p class="small" style="margin-top:14px">' + s.note + '</p></div></div>';
    },
    ai: function (s) {
      if (SHOT >= 0 && !store.ai.msgs) store.ai.msgs = [{ c: 'c', t: s.questions[1][1] }, { c: 'b', t: aiAnswer('free').t }];
      return '<div class="split"><div>' + head(s, 0) + '<div class="list3">' + s.points.map(function (x, j) { return '<div class="' + r(2 + j) + '"><p style="color:var(--text)">' + x + '</p></div>'; }).join('') +
        '</div></div><div class="chat' + r(3) + '"><div class="chat-head"><i class="dot"></i><b>Помощник студии</b><span class="mono dim">23:40 · пример</span></div><div class="chat-body" id="chatBody">' + chatInner() + '</div>' +
        '<div class="chat-foot"><div class="qchips">' + s.questions.map(function (q) { return '<button class="qchip" data-act="ask" data-k="' + q[0] + '">' + q[1] + '</button>'; }).join('') + '</div><button class="app-link small" data-act="aiclear">Очистить</button></div></div></div>';
    },
    cabinet: function (s) {
      var t = s.tabs[store.cab];
      return head(s, 0) + '<div class="cab"><div class="tabs' + r(2) + '" role="tablist">' + s.tabs.map(function (x, j) {
        return '<button class="tab" role="tab" aria-selected="' + (j === store.cab) + '" data-act="tab" data-k="' + j + '"><span class="mono">' + pad2(j + 1) + '</span>' + x[0] + '</button>';
      }).join('') + '</div><div class="cabview' + r(3) + '">' + win(t[2], t[0]) + '<p class="cabcap" id="cabCap">' + t[1] + '</p></div></div>';
    },
    day: function (s) {
      return head(s, 0) + '<div class="dayctl' + r(2) + '"><span class="clock mono" id="dayClock">' + (SHOT >= 0 ? s.times[4] : s.times[0]) + '</span><button class="tbtn" data-act="dayplay">Прожить день ещё раз</button><span class="mono dim">пример одного дня</span></div>' +
        '<div class="dayline' + r(2) + '"><i id="dayFill"></i></div><div class="day' + (SHOT >= 0 ? ' done' : '') + '">' + s.steps.map(function (x, j) {
        return '<button class="dstep' + (SHOT >= 0 ? ' lit' : '') + r(2 + j) + '" data-act="dayfocus" data-k="' + j + '"><span class="mono">' + s.times[j] + '</span><h3>' + x[0] + '</h3><p>' + x[1] + '</p></button>';
      }).join('') + '</div>';
    },
    trust: function (s) {
      return head(s, 0) + '<div class="tiles">' + s.tiles.map(function (x, j) {
        return '<div class="tile' + r(2 + j) + '"><b>' + x[0] + '</b><p>' + x[1] + '</p></div>';
      }).join('') + '</div>';
    },
    dealer: function (s) {
      return head(s, 0) + '<div class="cols"><div class="' + r(2) + '"><div class="pairs"><span class="ph">Сейчас</span><span class="ph acc">С AVTOHABR</span>' + s.pairs.map(function (x) {
        return '<span class="pn">' + x[0] + '</span><span class="pa">' + x[1] + '</span>';
      }).join('') + '</div></div><div class="askbox' + r(3) + '"><h4>Уточним на встрече</h4><ol class="ask">' + s.ask.map(function (x, j) { return '<li><button class="askq" data-act="tick" data-k="' + j + '" aria-pressed="' + !!store.tick[j] + '"><i></i>' + x + '</button></li>'; }).join('') + '</ol><p class="askprog mono" id="askProg">' + askProg(s) + '</p></div></div>';
    },
    compare: function (s) {
      return head(s, 0) + '<div class="seg' + r(2) + '" role="tablist" aria-label="С чем сравнить">' + s.rivals.map(function (x, j) {
        return '<button role="tab" data-act="rival" data-k="' + j + '" aria-selected="' + (j === store.rival) + '">' + x.name + '</button>';
      }).join('') + '<i class="seg-pill" id="segPill"></i></div><div class="vs' + r(3) + '" id="vsBox">' + vsInner(s) + '</div>';
    },
    price: function (s) {
      var c = store.calc.check, p = ((c - 1000) / 19000 * 100).toFixed(1) + '%';
      return head(s, 0) + '<div class="pricegrid"><div class="' + r(2) + '"><div class="big" data-count="' + s.price.replace(/\D/g, '') + '">' + s.price + '</div><div class="per">' + s.per + ' · ' + s.terms.join(' · ') + '</div><p class="incl-h">Входит в подписку</p><div class="incl">' +
        s.included.map(function (t, j) { return '<span style="--j:' + j + '">' + t + '</span>'; }).join('') + '</div><div class="plans">' + s.plans.map(function (x) { return '<div class="plan"><span class="mono">' + x[0] + '</span><b>' + x[1] + '</b></div>'; }).join('') +
        '</div></div><div class="panel calc' + r(3) + '"><h4>Окупаемость: посчитаем вместе</h4><label for="check">Средний чек сервиса <output id="checkOut">' + chk(c) + '</output></label>' +
        '<input class="range" id="check" type="range" min="1000" max="20000" step="500" value="' + c + '" style="--p:' + p + '" aria-describedby="calcRes">' +
        '<div class="scale"><span>1 000 ₽</span><span>20 000+ ₽</span></div><div class="result" id="calcRes">' + calcInner() + '</div>' +
        '<p class="small" style="margin-top:22px">Пример расчёта, не обещание результата. Формула: 5 000 ₽ ÷ средний чек.</p></div></div>';
    },
    next: function (s) {
      var c = D.contacts;
      return '<div class="qr' + r(4) + '"><img src="assets/img/qr-site.svg" alt="QR-код: app.avtohabr.ru/business" width="300" height="300"><span>Наведите камеру телефона: откроется app.avtohabr.ru</span></div>' + head(s, 0) + '<div class="next3">' + s.steps.map(function (x, j) {
        return '<div class="' + r(2 + j) + '"><span class="mono">Шаг ' + (j + 1) + '</span><h3>' + x[0] + '</h3><p>' + x[1] + '</p></div>';
      }).join('') + '</div><div class="contacts' + r(5) + '"><p class="who">' + c.team + '</p><dl><dt>Телефон</dt><dd>' + c.phone + '</dd><dt>Почта</dt><dd>' + c.mail + '</dd><dt>Telegram</dt><dd>' + c.tg + '</dd><dt>Сайт</dt><dd>' + c.site + '</dd></dl></div>' +
        '<div class="sitecta' + r(6) + '"><a class="sitebtn magnet" id="siteLink" href="' + s.site + '" target="_blank" rel="noopener">' + s.siteLabel + ' ↗</a><button class="tbtn copybtn" data-act="copy">Скопировать ссылку</button><p class="cities">' + s.cities + '</p></div>';
    }
  };

  /* ---------- демо записи: тексты и шаги взяты из BookingPage.tsx и MyBookingPage.tsx продукта ---------- */
  var DOW = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  function dayInfo(k) { var d = new Date(); d.setDate(d.getDate() + 1 + k); return { dow: DOW[d.getDay()], dm: pad2(d.getDate()) + '.' + pad2(d.getMonth() + 1) }; }
  function demoData() { return S.filter(function (s) { return s.type === 'demo'; })[0]; }
  function durMin(s) { var n = parseFloat(s); return /ч/.test(s) && !/мин/.test(s) ? n * 60 : n; }
  function addMin(t, m) { var a = t.split(':'), x = +a[0] * 60 + +a[1] + m; return pad2(Math.floor(x / 60)) + ':' + pad2(x % 60); }
  function isBusy(day, t) {
    var d = demoData(), i = d.times.indexOf(t);
    var base = day === 0 ? d.busy.indexOf(t) >= 0 : (i * 7 + day * 3) % 6 === 0;
    return base || store.demo.list.some(function (b) { return b.day === day && b.time === t; });
  }
  function phoneMask(v) {
    var d = v.replace(/\D/g, ''); if (d[0] === '8' || d[0] === '7') d = d.slice(1); d = d.slice(0, 10);
    var o = '+7'; if (d.length) o += ' (' + d.slice(0, 3); if (d.length >= 3) o += ')'; if (d.length > 3) o += ' ' + d.slice(3, 6);
    if (d.length > 6) o += '-' + d.slice(6, 8); if (d.length > 8) o += '-' + d.slice(8, 10); return d.length ? o : '';
  }
  function esc(v) { return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function demoValid() { var dm = store.demo; return dm.name.trim().length >= 2 && dm.phone.replace(/\D/g, '').length === 11 && dm.car.trim().length >= 2; }
  function demoHint() { var dm = store.demo; return dm.name.trim().length < 2 ? 'Введите имя' : dm.phone.replace(/\D/g, '').length !== 11 ? 'Введите телефон полностью' : dm.car.trim().length < 2 ? 'Укажите автомобиль' : 'Всё верно, можно записываться'; }
  function clientPanel(s) {
    var dm = store.demo, sv = dm.svc !== null ? s.services[dm.svc] : null, di = dayInfo(dm.day);
    if (dm.step === 4) { // «Моя запись»: экран продукта после записи
      var last = dm.list[dm.list.length - 1], ld = dayInfo(last.day), lsv = s.services[last.svc];
      return '<div class="app client"><div class="app-title">Моя запись</div><span class="app-status">Подтверждена</span>' +
        '<div class="app-track">' + ['Записан', 'В работе', 'Готово'].map(function (x, j) { return '<span class="' + (j === 0 ? 'on' : '') + '"><i></i>' + x + '</span>'; }).join('') + '</div>' +
        '<div class="app-card"><b>' + lsv[0] + '</b><span class="mono">' + ld.dow + ', ' + ld.dm + ' · ' + last.time + '</span><small>' + esc(last.car) + '</small></div>' +
        '<p class="app-ready">Оплата в студии после выполнения работ · ' + lsv[2] + '</p><p class="app-ready">Напоминание за сутки до записи: в календарь телефона или push-уведомлением</p>' +
        '<button class="app-btn ghost" data-act="dagain">Записать ещё одну машину</button></div>';
    }
    var h = '<div class="app client"><div class="app-title">Запись в студию</div><div class="app-bars">' + [1, 2, 3].map(function (k) { return '<i class="' + (dm.step >= k ? 'on' : '') + '"></i>'; }).join('') + '</div>';
    var picked = sv ? '<p class="app-picked">' + sv[0] + ' · ' + sv[2] + ' — <button class="app-link" data-act="dstep" data-k="1">сменить</button></p>' : '';
    if (dm.step === 1) {
      h += '<p class="app-sub">Шаг 1 — выберите услугу</p><div class="app-list">' + s.services.map(function (v, j) {
        return '<button class="app-row" data-act="dsvc" data-k="' + j + '"><span><b>' + v[0] + '</b><small>' + v[1] + '</small></span><em>' + v[2] + '</em></button>';
      }).join('') + '</div>';
    } else if (dm.step === 2) {
      h += picked + '<p class="app-lbl">Дата</p><div class="app-dates">' + [0, 1, 2, 3, 4, 5, 6].map(function (k) {
        var x = dayInfo(k); return '<button class="app-date" data-act="dday" data-k="' + k + '" aria-pressed="' + (dm.day === k) + '"><small>' + x.dow + '</small>' + x.dm + '</button>';
      }).join('') + '</div><p class="app-lbl">Свободное время</p><div class="app-times">' + s.times.map(function (t) {
        var b = isBusy(dm.day, t);
        return '<button class="app-time" data-act="dtime" data-k="' + t + '" aria-pressed="' + (dm.time === t) + '"' + (b ? ' disabled aria-label="' + t + ', занято"' : '') + '>' + t + '</button>';
      }).join('') + '</div><p class="app-ready">' + (dm.time ? 'Машина будет готова: ' + di.dm + ', ' + addMin(dm.time, durMin(sv[1])) : 'Выберите свободное время') + '</p>' +
        '<button class="app-btn" data-act="dnext"' + (dm.time ? '' : ' disabled') + '>Далее: ваши данные</button>';
    } else {
      h += picked + '<p class="app-picked2">' + di.dow + ', ' + di.dm + ' · ' + dm.time + ' — <button class="app-link" data-act="dstep" data-k="2">сменить</button></p><p class="app-lbl">Ваши данные</p>' +
        '<label class="app-f">Имя<input id="dName" autocomplete="off" placeholder="Как к вам обращаться" value="' + esc(dm.name) + '"></label>' +
        '<label class="app-f">Телефон<input id="dPhone" inputmode="tel" autocomplete="off" placeholder="+7 999 123-45-67" value="' + esc(dm.phone) + '"></label>' +
        '<label class="app-f">Автомобиль<input id="dCar" autocomplete="off" placeholder="BMW X5, 2021" value="' + esc(dm.car) + '"></label>' +
        '<p class="app-hint' + (demoValid() ? ' ok' : '') + '" id="dHint">' + demoHint() + '</p><button class="app-btn" id="dGo" data-act="dbook"' + (demoValid() && !dm.sending ? '' : ' disabled') + '>' + (dm.sending ? 'Подтверждаем…' : 'Записаться — ' + sv[2] + ' →') + '</button>';
    }
    return h + '</div>';
  }
  function plRec(n) { return n + ' ' + plural(n, ['запись', 'записи', 'записей']); }
  function cabPanel(s) {
    var dm = store.demo, rows = s.existing.map(function (e) { return { day: 0, time: e[0], svc: e[1], car: e[2], name: e[3] }; });
    dm.list.forEach(function (b) { rows.push({ day: b.day, time: b.time, svc: s.services[b.svc][0], car: esc(b.car), name: esc(b.name), mine: true, flash: b.key === dm.flash }); });
    var html = '';
    for (var d = 0; d < 3; d++) {
      var day = rows.filter(function (r) { return r.day === d; }).sort(function (a, b) { return a.time < b.time ? -1 : 1; }), x = dayInfo(d);
      html += '<div class="rday"><b>' + x.dm + ', ' + x.dow + '</b><span>' + (day.length ? plRec(day.length) : 'Свободно') + '</span></div>' + day.map(function (r) {
        return '<div class="rec' + (r.mine ? ' mine' : '') + (r.flash ? ' new' : '') + '"><span class="mono">' + r.time + '</span><span><b>' + r.svc + '</b><small>' + r.car + ' · ' + r.name + '</small></span></div>';
      }).join('');
    }
    return '<div class="app cabapp"><aside class="cab-side"><div class="cab-org"><i>С</i>Сервис</div>' +
      ['Расписание', 'Заказ-наряды', 'Склад', 'Автомобили', 'Отчёты', 'Клиенты', 'Команда', 'Настройки', 'Мой сайт', 'Ассистент'].map(function (x, j) { return '<span' + (j === 0 ? ' class="on"' : '') + '>' + x + '</span>'; }).join('') +
      '</aside><div class="cab-main"><div class="cab-head"><b>Расписание</b>' + (dm.list.length ? '<button class="app-link small" data-act="dreset">Очистить демо-записи</button>' : '') + '</div>' +
      '<div class="kpis"><div><small>Записи</small><b class="mono">' + rows.length + '</b></div><div><small>Выполнено</small><b class="mono">0</b></div><div><small>Получено</small><b class="mono">0 ₽</b></div></div>' +
      '<div class="recs">' + html + '</div></div></div>';
  }
  function demoInner(s) {
    return '<div class="demo-ctl"><span class="mono dim">Слева экран клиента, справа кабинет сервиса: запись появляется сразу</span></div>' + clientPanel(s) + cabPanel(s);
  }
  function renderDemo() { var box = $('#demoBox'); if (box) box.innerHTML = demoInner(demoData()); store.demo.flash = null; }
  function book() {
    var dm = store.demo;
    if (dm.sending || !demoValid() || dm.time === null) return; // защита от двойного нажатия
    if (isBusy(dm.day, dm.time)) { dm.time = null; dm.step = 2; renderDemo(); toast('Время занято', 'Это время только что заняли. Выберите другое.'); return; }
    dm.sending = true; var b = $('#dGo'); if (b) { b.disabled = true; b.textContent = 'Подтверждаем…'; }
    setTimeout(function () {
      var key = 'k' + Date.now(), di = dayInfo(dm.day);
      dm.list.push({ key: key, day: dm.day, time: dm.time, svc: dm.svc, name: dm.name.trim(), car: dm.car.trim() });
      toast('Новая запись', di.dm + ', ' + dm.time + ' · ' + demoData().services[dm.svc][0] + ' · ' + esc(dm.car.trim()) + '. Запись уже в расписании.');
      if (scene && scene.pulse) scene.pulse();
      dm.flash = key; dm.step = 4; dm.sending = false; save(); renderDemo();
    }, store.reduced ? 0 : 650);
  }

  /* ---------- заказ-наряд: экран «Работы» из WorkOrdersPage.tsx ---------- */
  function worksData() { return S.filter(function (s) { return s.type === 'works'; })[0]; }
  function h1(n) { return n.toFixed(1).replace('.', ','); }
  function wListInner() {
    var w = store.works, d = worksData(), q = w.q.trim().toLowerCase();
    var rows = d.norms.map(function (n, i) { return [n, i]; }).filter(function (x) { return !q || x[0][0].toLowerCase().indexOf(q) >= 0; });
    if (!rows.length) return '<p class="w-empty">В справочнике такой работы нет. В кабинете её добавляют строкой «+ Добавить «' + esc(w.q.trim()) + '»».</p>';
    return rows.map(function (x) {
      var on = w.sel.indexOf(x[1]) >= 0;
      return '<button class="w-row" data-act="wtoggle" data-k="' + x[1] + '" aria-pressed="' + on + '"><b>' + x[0][0] + '</b><span class="mono">' + h1(x[0][1]) + ' н/ч • ' + rub(x[0][1] * w.rate) + ' ₽</span><i>' + (on ? '✓' : '+') + '</i></button>';
    }).join('');
  }
  function wTotals() { var w = store.works, d = worksData(), hrs = 0; w.sel.forEach(function (i) { hrs += d.norms[i][1]; }); return { hrs: hrs, sum: hrs * w.rate }; }
  function wOrderInner() {
    var w = store.works, d = worksData(), t = wTotals();
    if (!w.sel.length) return '<p class="w-empty">Добавьте работы слева: сумма посчитается сама.</p>';
    return '<div class="w-order">' + w.sel.map(function (i) { var n = d.norms[i]; return '<div><span>' + n[0] + '</span><span class="mono">' + h1(n[1]) + ' н/ч</span><span class="mono">' + rub(n[1] * w.rate) + ' ₽</span></div>'; }).join('') +
      '</div><div class="w-total"><span>Итого ' + h1(t.hrs) + ' н/ч</span><b class="mono">' + rub(t.sum) + ' ₽</b></div>';
  }
  function wRefresh() {
    var prevSum = +($('#wSum').textContent.replace(/\D/g, '') || 0), t = wTotals(); $('#wList').innerHTML = wListInner(); $('#wOrder').innerHTML = wOrderInner();
    animNum($('#wSum'), prevSum, t.sum); $('#wCap').textContent = 'Справочник нормо-часов • ' + rub(store.works.rate) + ' ₽ за час'; save();
  }

  /* ---------- накладная: вкладка «Загрузить накладную» из WarehousePage.tsx ---------- */
  var invTimer = 0;
  function invData() { return S.filter(function (s) { return s.type === 'invoice'; })[0]; }
  function invSum(r) { return r[2] * r[3]; }
  function invRows() {
    var d = invData(), n = store.inv.n;
    if (!n && store.inv.state === 'idle') return '';
    return d.rows.slice(0, n).map(function (r) {
      return '<tr class="' + (store.inv.state === 'posted' ? 'got' : 'new') + '"><td>' + r[1] + '</td><td class="mono">' + r[0] + '</td><td class="mono">' + r[2] + '</td><td class="mono">' + rub(r[3]) + '</td><td class="mono">' + rub(invSum(r) * 22 / 122) + '</td><td class="mono">' + rub(invSum(r)) + '</td></tr>';
    }).join('');
  }
  function invTotal() { var t = 0; invData().rows.slice(0, store.inv.n).forEach(function (r) { t += invSum(r); }); return t; }
  function invFoot() {
    var st = store.inv.state, n = invData().rows.length;
    if (st === 'idle') return '<button class="app-btn light" data-act="inv">Выбрать файл: ' + invData().file + '</button>';
    if (st === 'run') return '<p class="app-ready">Читаем файл…</p>';
    return '<p class="inv-total">Итого по накладной: <b class="mono">' + rub(invTotal()) + ' ₽</b> с НДС</p>' +
      (st === 'posted' ? '<p class="inv-ok">Оприходовано ' + n + ' поз. · остатки обновлены</p><button class="app-link small" data-act="invreset">Повторить с начала</button>'
        : '<button class="app-btn light" data-act="invpost">Оприходовать ' + n + ' поз.</button>');
  }
  function stockInner() {
    var d = invData(), posted = store.inv.state === 'posted';
    return d.rows.map(function (r) { var q = r[4] + (posted ? r[2] : 0); return '<div class="' + (posted ? 'up' : '') + '"><span>' + r[1] + '<small class="mono">' + r[0] + '</small></span><b class="mono">' + q + ' шт</b></div>'; }).join('');
  }
  function invRender() { var t = $('#invTable'); if (!t) return; t.innerHTML = invRows(); $('#invFoot').innerHTML = invFoot(); $('#stock').innerHTML = stockInner(); $('#invTableWrap').classList.toggle('empty', !store.inv.n); }
  function invRun() {
    if (store.inv.state === 'run') return;
    clearInterval(invTimer); var total = invData().rows.length;
    if (store.reduced) { store.inv = { state: 'parsed', n: total }; invRender(); return; }
    store.inv = { state: 'run', n: 0 }; invRender();
    invTimer = setInterval(function () { store.inv.n++; if (store.inv.n >= total) { store.inv.state = 'parsed'; clearInterval(invTimer); } invRender(); }, 300);
  }

  /* ---------- «Помощник студии»: вопросы на выбор; цены и свободное время берутся из данных демо записи ---------- */
  var aiTimers = [];
  function aiData() { return S.filter(function (s) { return s.type === 'ai'; })[0]; }
  function freeTimes(day) { return demoData().times.filter(function (t) { return !isBusy(day, t); }); }
  function aiAnswer(q) {
    var sv = demoData().services, f = freeTimes(0);
    if (q === 'price') return { t: sv[2][0] + ' ' + sv[2][2] + ', займёт около ' + sv[2][1] + '. Подобрать время?' };
    if (q === 'free') return { t: f.length ? 'Завтра свободно: ' + f.slice(0, 4).join(', ') + '. Записать вас?' : 'Завтра всё занято. Послезавтра свободно: ' + freeTimes(1).slice(0, 3).join(', ') + '.' };
    if (!f.length) return { t: 'Завтра свободного времени нет. Могу предложить послезавтра.' };
    return { t: 'Могу записать на завтра, ' + f[0] + ', на плановое ТО. Подтвердите данные.', act: { label: 'Записаться: завтра, ' + f[0], time: f[0], state: 'confirm' } };
  }
  function chatInner() {
    var w = aiData().who, h = (store.ai.msgs || []).map(function (m) {
      var x = '<div class="msg ' + m.c + '">' + m.t + '</div>';
      if (m.act) {
        x += '<div class="msg b action"><span class="pill' + (m.act.state === 'done' ? ' done' : '') + '">' + (m.act.state === 'done' ? '✓ Выполнено' : m.act.label) + '</span></div>';
        if (m.act.state === 'confirm') x += '<div class="confirm"><b>Подтвердите действие</b><div class="cf"><span>Имя</span><i>' + w[0] + '</i><span>Телефон</span><i>' + w[1] + '</i><span>Автомобиль</span><i>' + w[2] + '</i></div><small>После «Подтвердить» откроется окно согласия с документами сервиса.</small><span class="pill solid">Подтвердить</span></div>';
      }
      return x;
    }).join('');
    if (!h && !store.ai.typing) h = '<p class="chat-empty">Выберите вопрос внизу: помощник ответит по прайсу и расписанию сервиса</p>';
    return h + (store.ai.typing ? '<div class="msg b typing"><i></i><i></i><i></i></div>' : '');
  }
  function aiRender() { var b = $('#chatBody'); if (b) { b.innerHTML = chatInner(); b.scrollTop = b.scrollHeight; } }
  function aiStop() { aiTimers.forEach(clearTimeout); aiTimers = []; store.ai.typing = false; store.ai.busy = false; }
  function aiAsk(q) {
    var A = store.ai; if (A.busy) return; A.busy = true; A.msgs = A.msgs || [];
    var qt = aiData().questions.filter(function (x) { return x[0] === q; })[0][1], ans = aiAnswer(q), fast = store.reduced;
    A.msgs.push({ c: 'c', t: qt }); aiRender();
    function later(fn, ms) { if (fast) fn(); else aiTimers.push(setTimeout(fn, ms)); }
    later(function () { A.typing = true; aiRender(); }, 350);
    later(function () { A.typing = false; var m = { c: 'b', t: ans.t, act: ans.act }; A.msgs.push(m); aiRender(); if (!m.act) A.busy = false;
      if (m.act) later(function () { // подтверждение: запись создаётся и появляется в расписании демо
        var w = aiData().who, key = 'ai' + Date.now(); m.act.state = 'done';
        store.demo.list.push({ key: key, day: 0, time: m.act.time, svc: 2, name: w[0], car: w[2] }); save(); renderDemo();
        if (scene && scene.pulse) scene.pulse(); toast('Помощник записал клиента', dayInfo(0).dm + ', ' + m.act.time + ' · Плановое ТО · ' + w[2] + '. Запись уже в расписании.');
        aiRender(); A.busy = false;
      }, 2200);
    }, 1500);
  }

  /* ---------- день: прогон по шагам с часами ---------- */
  var dayTimers = [];
  function dayStop() { dayTimers.forEach(clearTimeout); dayTimers = []; if (scene && scene.ride) scene.ride(null); }
  function dayPlay() {
    dayStop(); var d = S.filter(function (x) { return x.type === 'day'; })[0], steps = $$('.dstep'), clock = $('#dayClock'), fill = $('#dayFill'), box = $('.day');
    if (!clock) return;
    box.classList.remove('focused'); box.classList.add('playing');
    steps.forEach(function (b) { b.classList.remove('lit', 'focus'); });
    function at(k) {
      clock.textContent = d.times[k]; clock.classList.remove('tick'); void clock.offsetWidth; clock.classList.add('tick');
      steps.forEach(function (b, j) { b.classList.toggle('lit', j <= k); b.classList.toggle('focus', j === k); });
      if (scene && scene.ride) scene.ride(k);
      fill.style.width = (k / 4 * 100) + '%';
      if (k === 4) { box.classList.remove('playing'); box.classList.add('done'); if (scene && scene.pulse) scene.pulse(); }
    }
    if (store.reduced) { at(4); return; }
    if (scene && scene.ride) scene.ride(-1);
    for (var k = 0; k < 5; k++) dayTimers.push(setTimeout(at.bind(null, k), 700 + k * 2000));
  }

  /* ---------- фишки слайдов ---------- */
  function askProg(s) { var n = s.ask.filter(function (x, j) { return store.tick[j]; }).length; return 'Обсудили ' + n + ' из ' + s.ask.length; }
  function animNum(el, from, to) {
    if (!el) return; if (store.reduced || from === to) { el.textContent = rub(to) + ' ₽'; return; }
    var t0 = performance.now(); (function st(now) { var k = Math.min(1, (now - t0) / 600), e = 1 - Math.pow(1 - k, 3); el.textContent = rub(from + (to - from) * e) + ' ₽'; if (k < 1) requestAnimationFrame(st); })(t0);
  }
  var shuffleTimer = 0;
  function slideFx(type) {
    clearInterval(shuffleTimer);
    if (type === 'solution' && !store.reduced && SHOT < 0) shuffleTimer = setInterval(function () { var w = $('.slide.on .windows'); if (w) w.classList.toggle('swapped'); }, 4200);
  }
  function copyLink(url) {
    function done() { toast('Ссылка скопирована', url); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(done, fallback); else fallback();
    function fallback() { var t = document.createElement('textarea'); t.value = url; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) { toast('Ссылка', url); } t.remove(); }
  }

  /* ---------- сравнение один на один ---------- */
  function vsInner(s) {
    var rv = s.rivals[store.rival], wins = rv.v.filter(function (x) { return x[1] === '+'; }).length, total = rv.v.filter(function (x) { return x[1] !== '$'; }).length;
    var tag = { '+': '<em class="t-win">AVTOHABR сильнее</em>', '=': '<em class="t-eq">наравне</em>', '?': '<em class="t-unk">нет данных</em>', 'x': '<em class="t-sep">отдельная программа</em>', '$': '' };
    return '<div class="vs-head"><span></span><b class="us">AVTOHABR</b><b>' + rv.name + '</b></div>' + s.rows.map(function (row, j) {
      var v = rv.v[j];
      return '<div class="vs-row' + (v[1] === '+' ? ' is-win' : '') + '"><span>' + row + '</span><span class="us">' + (v[1] === '$' ? '' : '<i class="ck"></i>') + s.us[j] + '</span><span class="them">' + v[0] + tag[v[1]] + '</span></div>';
    }).join('') + '<div class="vs-foot"><p class="vs-score">' + (rv.bundle ? '<b class="mono">1</b> окно вместо четырёх-пяти программ: запись, сайт, клиенты, учёт и склад связаны между собой</p>' : '<b class="mono">' + wins + '</b> из ' + total + ' пунктов: AVTOHABR сильнее, ' + (rv.v.some(function (x) { return x[1] === '?'; }) ? 'в остальных наравне или нет открытых данных' : 'в остальных наравне') + '</p>') + '<p class="srcs">' + rv.note + '</p></div>';
  }
  function segMove() {
    var b = $('.seg [aria-selected="true"]'), p = $('#segPill'); if (!b || !p) return;
    p.style.width = b.offsetWidth + 'px'; p.style.transform = 'translateX(' + b.offsetLeft + 'px)';
  }
  function setRival(k) {
    store.rival = k; $$('.seg button').forEach(function (b, j) { b.setAttribute('aria-selected', j === k); }); segMove();
    var box = $('#vsBox'), s = S.filter(function (x) { return x.type === 'compare'; })[0];
    if (store.reduced) { box.innerHTML = vsInner(s); return; }
    box.classList.add('swap'); setTimeout(function () { box.innerHTML = vsInner(s); box.classList.remove('swap'); }, 180);
  }

  /* ---------- калькулятор ---------- */
  // чек меньше подписки: сколько записей окупают месяц; чек больше: во сколько раз одна запись окупает подписку
  function chk(c) { return rub(c) + (c >= 20000 ? '+' : '') + ' ₽'; }
  function calcInner() {
    var c = store.calc.check, top = c >= 20000;
    function raz(x) { if (x % 1) return 'раза'; var a = x % 10, b = x % 100; return a >= 2 && a <= 4 && (b < 12 || b > 14) ? 'раза' : 'раз'; }
    function line(cost, cls, what, note) {
      if (c < cost) { var n = Math.ceil(cost / c); return '<b' + cls + '>' + n + '</b><span>' + plural(n, ['запись', 'записи', 'записей']) + ' в месяц окупают ' + what + note + '</span>'; }
      var x = Math.round(c / cost * 10) / 10, k = String(x).replace('.', ',');
      return '<b' + cls + '>×' + k + (top ? '+' : '') + '</b><span>одна запись окупает ' + what + (x >= 1.05 ? ' в ' + k + ' ' + raz(x) + (top ? ' и больше' : '') : '') + note + '</span>';
    }
    return line(5000, '', 'подписку 5 000 ₽', '') + line(40000 / 12, ' class="sm"', 'подписку при оплате за год', ' (40 000 ₽, ≈' + rub(40000 / 12) + ' ₽ в месяц)');
  }



  /* ---------- уведомления ---------- */
  function toast(title, text) {
    var box = $('#toasts'), el = document.createElement('div');
    el.className = 'toast'; el.innerHTML = '<span class="mono">' + title + '</span>' + text;
    box.appendChild(el);
    while (box.children.length > 3) box.removeChild(box.firstChild);
    setTimeout(function () { el.classList.add('out'); setTimeout(function () { el.remove(); }, 300); }, 5200);
  }

  /* ---------- отрисовка и навигация ---------- */
  var stage = $('#stage'), slidesEl = $('#slides'), scene = null, autoTimer = 0;
  function build() {
    slidesEl.innerHTML = S.map(function (s, i) {
      return '<section class="slide" data-type="' + s.type + '" data-i="' + i + '" aria-label="Слайд ' + (i + 1) + ' из ' + S.length + ': ' + s.chapter + '" aria-hidden="true">' + T[s.type](s) + '</section>';
    }).join('');
    $$('.slide h1', slidesEl).forEach(splitWords);
    $('#dots').innerHTML = S.map(function (s, i) { return '<button data-act="goto" data-k="' + i + '" aria-label="Слайд ' + (i + 1) + ': ' + s.chapter + '" title="' + pad2(i + 1) + ' · ' + s.chapter + '"></button>'; }).join('');
    $('#ovGrid').innerHTML = S.map(function (s, i) {
      return '<button class="ov-card" data-act="goto" data-k="' + i + '"><span class="mono">' + pad2(i + 1) + ' · ' + s.chapter + '</span><b>' + s.title + '</b></button>';
    }).join('');
  }
  // переходы по смыслу слайда: шторка-ворота, сдвиг ленты, погружение, диафрагма из точки щелчка, створки, диагональ
  var TR = { cover: 'zoom', cards: 'drop', solution: 'iris', path: 'slide', demo: 'door', works: 'wipe', cabinet: 'split', invoice: 'diag', day: 'vsplit', ai: 'flip', trust: 'scaleup', dealer: 'gate', compare: 'skew', price: 'blur', next: 'ring' };
  var lastPt = [72, 50];
  // маршрут камеры к слайду: сквозь тоннель, падение, подъём из-под сетки, облёт, нырок, разворот
  var CAMFX = { cover: 'bay', cards: 'diamond', solution: 'rings', path: 'chevrons', demo: 'grid', works: 'gear', cabinet: 'window', invoice: 'rows', day: 'clock', ai: 'bubble', trust: 'shield', dealer: 'hexagon', compare: 'doors', price: 'bars', next: 'helix' }; // портал перехода: фигура со смыслом слайда
  document.addEventListener('pointerdown', function (e) { var b = stage.getBoundingClientRect(); lastPt = [((e.clientX - b.left) / b.width * 100).toFixed(1), ((e.clientY - b.top) / b.height * 100).toFixed(1)]; });
  document.addEventListener('keydown', function () { lastPt = [72, 50]; }, true);
  function rerender(i) { var sec = slidesEl.children[i]; sec.innerHTML = T[S[i].type](S[i]); $$('h1', sec).forEach(splitWords); }
  // заголовок по словам: каждое слово поднимается из-под своей маски
  function splitWords(h) {
    var k = 0, out = '';
    Array.prototype.slice.call(h.childNodes).forEach(function (n) {
      if (n.nodeType === 3) out += n.textContent.split(/( +)/).map(function (w) { return /^ +$/.test(w) || !w ? w : '<span class="w"><span style="--w:' + (k++) + '">' + w.replace(/</g, '&lt;') + '</span></span>'; }).join('');
      else out += '<span class="w"><span style="--w:' + (k++) + '">' + n.outerHTML + '</span></span>';
    });
    h.innerHTML = out;
  }
  var FLY = 1750, flyT = 0; // слайд появляется, когда камера почти долетела до своего места
  function go(i, instant) {
    i = Math.max(0, Math.min(S.length - 1, i));
    if (i === store.i && store.prev !== -1 && !instant) return;
    var old = slidesEl.children[store.i], nu = slidesEl.children[i], anim = !store.reduced && !instant && old && old !== nu;
    store.prev = store.i; store.i = i;
    clearTimeout(flyT); clearInterval(autoTimer); clearInterval(shuffleTimer); dayStop();
    if (S[store.prev] && S[store.prev].type === 'ai') aiStop();
    $$('.slide', slidesEl).forEach(function (el) { if (el !== old) { clearTimeout(el._t); el.className = 'slide'; el.setAttribute('aria-hidden', 'true'); } });
    if (old && old !== nu) {
      old.setAttribute('aria-hidden', 'true'); clearTimeout(old._t);
      if (anim) {
        var tr = TR[S[i].type] || 'gate', back = i < store.prev ? '-b' : '';
        old.className = 'slide leave o-' + tr + back; nu._tr = 'i-' + tr + back;
        old._t = setTimeout(function () { old.className = 'slide'; }, 800);
      } else { old.className = 'slide'; nu._tr = ''; }
    }
    $('#barFill').style.width = ((i + 1) / S.length * 100) + '%';
    $('#count').textContent = pad2(i + 1) + ' / ' + pad2(S.length);
    $('#chapter').textContent = S[i].chapter;
    $('[data-act="prev"]').disabled = i === 0; $('[data-act="next"]').disabled = i === S.length - 1;
    $('#notesNum').textContent = pad2(i + 1) + ' ' + S[i].chapter; $('#notesText').textContent = S[i].notes;
    $$('.ov-card').forEach(function (c, k) { c.classList.toggle('cur', k === i); });
    $$('.dots button').forEach(function (c, k) { c.setAttribute('aria-current', k === i ? 'step' : 'false'); });
    if (SHOT < 0) try { history.replaceState(null, '', '#' + (i + 1)); } catch (e) { /* file:// в части браузеров */ }
    if (scene) scene.go(i, instant, CAMFX[S[i].type]);
    if (anim) {
      // пока слайда нет, видна только сцена: пролёт камеры читается целиком
      document.body.classList.add('flying');
      var fl = document.createElement('i'); fl.className = 'flashline'; stage.appendChild(fl); setTimeout(function () { fl.remove(); }, 900);
      var bn = document.createElement('b'); bn.className = 'bignum' + (i < store.prev ? ' back' : ''); bn.textContent = pad2(i + 1); stage.appendChild(bn); setTimeout(function () { bn.remove(); }, 1500);
      flyT = setTimeout(function () { arrive(nu, i); }, FLY);
    } else arrive(nu, i);
  }
  function arrive(nu, i) {
    document.body.classList.remove('flying');
    nu.style.setProperty('--ix', lastPt[0] + '%'); nu.style.setProperty('--iy', lastPt[1] + '%');
    var tr = nu._tr || ''; nu._tr = '';
    nu.className = 'slide on' + (tr ? ' ' + tr : ''); nu.setAttribute('aria-hidden', 'false');
    if (tr) nu._t = setTimeout(function () { nu.classList.remove(tr); }, 1000);
    countUp(nu);
    var type = S[i].type;
    if (type === 'compare') setTimeout(segMove, 30);
    slideFx(type); pathAuto();
    if (type === 'day' && SHOT < 0) dayPlay();
    if (type === 'ai' && SHOT < 0 && !(store.ai.msgs || []).length) aiTimers.push(setTimeout(function () { aiAsk('free'); }, 500));
  }
  // числа с data-count набегают от нуля при показе слайда: взгляд идёт к главной цифре
  function countUp(sec) {
    $$('[data-count]', sec).forEach(function (el) {
      var to = +el.dataset.count;
      if (store.reduced || SHOT >= 0) { el.textContent = rub(to); return; }
      var t0 = performance.now();
      (function step(now) { var k = Math.min(1, (now - t0) / 1100), e = 1 - Math.pow(1 - k, 3); el.textContent = rub(to * e); if (k < 1) requestAnimationFrame(step); })(t0);
    });
  }
  function pathAuto() {
    clearInterval(autoTimer);
    if (S[store.i].type !== 'path' || store.reduced || !store.path.auto || SHOT >= 0) return;
    autoTimer = setInterval(function () { setStep((store.path.step + 1) % 4); }, 4500);
  }
  function setStep(k) {
    store.path.step = k;
    $$('.step').forEach(function (b, j) { b.classList.toggle('on', j === k); b.setAttribute('aria-selected', j === k); });
    $$('.deck .dk').forEach(function (c, j) { var o = (j - k + 4) % 4; c.style.setProperty('--o', o); c.classList.toggle('front', o === 0); });
    var pr = $('.slide[data-type="path"] .prog'); if (pr) { pr.classList.toggle('auto', store.path.auto && !store.reduced); pr.innerHTML = [0, 1, 2, 3].map(function (j) { return '<i class="' + (j < k ? 'done' : j === k ? 'cur' : '') + '"></i>'; }).join(''); }
  }
  function setTab(k) {
    store.cab = k;
    var s = S.filter(function (x) { return x.type === 'cabinet'; })[0], t = s.tabs[k], view = $('.cabview');
    $$('.tab').forEach(function (b, j) { b.setAttribute('aria-selected', j === k); });
    var img = $('img', view), w = $('.win', view);
    img.src = 'assets/img/' + t[2]; img.alt = t[0]; w.dataset.zoom = 'assets/img/' + t[2]; w.dataset.cap = t[0]; w.setAttribute('aria-label', 'Увеличить: ' + t[0]);
    $('#cabCap').textContent = t[1];
  }
  function setReduced(v) {
    store.reduced = v; document.body.classList.toggle('reduced', v);
    $('#motionBtn').setAttribute('aria-pressed', v);
    if (scene) scene.setReduced(v);
    save(); pathAuto();
  }
  function toggle(id, key) {
    store[key] = !store[key]; $('#' + id).hidden = !store[key];
  }

  /* ---------- лупа для скриншотов ---------- */
  var lb = $('#lightbox'), lbView = $('#lbView'), lbImg = $('#lbImg'), lastFocus = null;
  function openLB(src, cap) { lastFocus = document.activeElement; lbImg.src = src; lbImg.alt = cap; $('#lbCap').textContent = cap; lbView.classList.remove('zoom'); lbImg.style.transform = ''; lb.hidden = false; $('[data-act="lbclose"]').focus(); }
  function closeLB() { lb.hidden = true; if (lastFocus) lastFocus.focus(); }
  lbView.addEventListener('click', function (e) {
    var z = !lbView.classList.contains('zoom'); lbView.classList.toggle('zoom', z);
    var b = lbImg.getBoundingClientRect();
    lbImg.style.transformOrigin = ((e.clientX - b.left) / b.width * 100) + '% ' + ((e.clientY - b.top) / b.height * 100) + '%';
    lbImg.style.transform = z ? 'scale(2.2)' : '';
  });
  lbView.addEventListener('pointermove', function (e) {
    if (!lbView.classList.contains('zoom')) return;
    var v = lbView.getBoundingClientRect();
    lbImg.style.transformOrigin = ((e.clientX - v.left) / v.width * 100) + '% ' + ((e.clientY - v.top) / v.height * 100) + '%';
  });

  /* ---------- события: одно делегирование на документ ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-act]');
    if (!a) { var z = e.target.closest('[data-zoom]'); if (z) openLB(z.dataset.zoom, z.dataset.cap); return; }
    var k = a.dataset.k;
    switch (a.dataset.act) {
      case 'next': go(store.i + 1); break;
      case 'prev': go(store.i - 1); break;
      case 'goto': store.overview = false; $('#overview').hidden = true; go(+k); break;
      case 'overview': toggle('overview', 'overview'); break;
      case 'notes': toggle('notes', 'notes'); break;
      case 'motion': setReduced(!store.reduced); break;
      case 'full': fullscreen(); break;
      case 'lbclose': closeLB(); break;
      case 'step': store.path.auto = false; clearInterval(autoTimer); setStep(+k); break;
      case 'tab': setTab(+k); break;
      case 'dsvc': store.demo.svc = +k; store.demo.step = 2; store.demo.time = null; renderDemo(); break;
      case 'dstep': store.demo.step = +k; renderDemo(); break;
      case 'dday': store.demo.day = +k; store.demo.time = null; renderDemo(); break;
      case 'dtime': store.demo.time = k; renderDemo(); break;
      case 'dnext': if (store.demo.time) { store.demo.step = 3; renderDemo(); var f = $('#dName'); if (f) f.focus({ preventScroll: true }); } break;
      case 'dbook': book(); break;
      case 'dagain': var dm = store.demo; dm.step = 1; dm.svc = null; dm.time = null; dm.day = 0; dm.done = null; dm.name = dm.phone = dm.car = ''; renderDemo(); break;
      case 'dreset': store.demo.list = []; store.demo.done = null; if (store.demo.step === 4) store.demo.step = 1; save(); renderDemo(); break;
      case 'wtoggle': var w = store.works, j = w.sel.indexOf(+k); if (j >= 0) w.sel.splice(j, 1); else w.sel.push(+k); wRefresh(); break;
      case 'inv': invRun(); break;
      case 'invpost': store.inv.state = 'posted'; invRender(); toast('Склад', 'Оприходовано ' + invData().rows.length + ' поз. Остатки обновлены.'); if (scene && scene.pulse) scene.pulse(); break;
      case 'invreset': clearInterval(invTimer); store.inv = { state: 'idle', n: 0 }; invRender(); break;
      case 'ask': aiAsk(k); break;
      case 'aiclear': aiStop(); store.ai.msgs = []; aiRender(); break;
      case 'dayplay': dayPlay(); break;
      case 'rival': setRival(+k); break;
      case 'flip': a.classList.toggle('flipped'); a.setAttribute('aria-pressed', a.classList.contains('flipped')); break;
      case 'dayfocus': dayStop(); if (scene && scene.ride) scene.ride(+k); $$('.dstep').forEach(function (b, j) { b.classList.toggle('focus', j === +k); b.classList.toggle('lit', j === +k); }); $('.day').classList.remove('playing', 'done'); $('.day').classList.add('focused'); break;
      case 'tick': store.tick[k] = !store.tick[k]; a.setAttribute('aria-pressed', !!store.tick[k]); $('#askProg').textContent = askProg(S.filter(function (x) { return x.type === 'dealer'; })[0]); save(); break;
      case 'copy': copyLink(S[S.length - 1].site); break;
    }
  });
  document.addEventListener('input', function (e) {
    var id = e.target.id, dm = store.demo;
    if (id === 'dName' || id === 'dPhone' || id === 'dCar') {
      if (id === 'dPhone') { e.target.value = phoneMask(e.target.value); dm.phone = e.target.value; }
      else if (id === 'dName') dm.name = e.target.value; else dm.car = e.target.value;
      $('#dHint').textContent = demoHint(); $('#dHint').classList.toggle('ok', demoValid()); $('#dGo').disabled = !demoValid() || dm.sending; return;
    }
    if (id === 'wq') { store.works.q = e.target.value; $('#wList').innerHTML = wListInner(); return; }
    if (id !== 'check') return;
    var v = +e.target.value; store.calc.check = v;
    e.target.style.setProperty('--p', ((v - 1000) / 19000 * 100).toFixed(1) + '%');
    $('#checkOut').textContent = chk(v); $('#calcRes').innerHTML = calcInner(); save();
  });
  // 3D-наклон окна за курсором (на сенсорных экранах выключен)
  document.addEventListener('pointermove', function (e) {
    if (store.reduced || e.pointerType === 'touch') return;
    var w = e.target.closest && e.target.closest('.tilt');
    $$('.tilt').forEach(function (el) { if (el !== w) { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); } });
    $$('.magnet').forEach(function (m) {
      var mb = m.getBoundingClientRect(), cx = mb.left + mb.width / 2, cy = mb.top + mb.height / 2, dx = e.clientX - cx, dy = e.clientY - cy;
      var near = Math.abs(dx) < mb.width / 2 + 40 && Math.abs(dy) < mb.height / 2 + 40;
      m.style.transform = near ? 'translate(' + (dx * 0.22).toFixed(1) + 'px,' + (dy * 0.22).toFixed(1) + 'px)' : '';
    });
    if (!w) return;
    var b = w.getBoundingClientRect(), x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height;
    w.style.setProperty('--ry', ((x - 0.5) * 8).toFixed(2) + 'deg'); w.style.setProperty('--rx', ((0.5 - y) * 6).toFixed(2) + 'deg');
    w.style.setProperty('--gx', (x * 100).toFixed(0) + '%'); w.style.setProperty('--gy', (y * 100).toFixed(0) + '%');
  });
  // лупа над экраном кабинета и прожектор-фара на обложке
  document.addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch') return;
    var sb = stage.getBoundingClientRect(); stage.style.setProperty('--mx', ((e.clientX - sb.left) / sb.width * 100).toFixed(1) + '%'); stage.style.setProperty('--my', ((e.clientY - sb.top) / sb.height * 100).toFixed(1) + '%');
    var tile = e.target.closest && e.target.closest('.tile');
    if (tile && tile !== lastTile && scene && scene.pulse) scene.pulse(); lastTile = tile;
  });
  var lastTile = null;
  document.addEventListener('keydown', function (e) {
    var t = e.target, inField = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA');
    if (!lb.hidden) { if (e.key === 'Escape') closeLB(); return; }
    if (e.key === 'Escape') { if (store.overview) toggle('overview', 'overview'); else if (store.notes) toggle('notes', 'notes'); return; }
    if (store.overview) return;
    if ((e.key === 'Enter' || e.key === ' ') && t && t.dataset && t.dataset.zoom) { e.preventDefault(); openLB(t.dataset.zoom, t.dataset.cap); return; }
    if (inField && (/Arrow|Page|Home|End/.test(e.key) || e.key === ' ')) return; // ползунок забирает стрелки себе
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var onBtn = t && t.tagName === 'BUTTON';
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': e.preventDefault(); go(store.i + 1); return;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': e.preventDefault(); go(store.i - 1); return;
      case ' ': if (!onBtn) { e.preventDefault(); go(store.i + (e.shiftKey ? -1 : 1)); } return;
      case 'Home': e.preventDefault(); go(0); return;
      case 'End': e.preventDefault(); go(S.length - 1); return;
    }
    if (inField) return;
    if (e.code === 'KeyO') toggle('overview', 'overview');
    else if (e.code === 'KeyN') toggle('notes', 'notes');
    else if (e.code === 'KeyM') setReduced(!store.reduced);
    else if (e.code === 'KeyF') fullscreen();
  });
  // колесо и тачпад: один шаг на жест
  var wheelLock = 0;
  window.addEventListener('wheel', function (e) {
    if (!lb.hidden || store.overview) return;
    var now = Date.now(); if (now < wheelLock || Math.abs(e.deltaY) < 30) return;
    wheelLock = now + 900; go(store.i + (e.deltaY > 0 ? 1 : -1));
  }, { passive: true });
  // свайп на сенсорном экране
  var sw = null;
  stage.addEventListener('pointerdown', function (e) { if (e.pointerType === 'touch' && !e.target.closest('input,button,[data-zoom]')) sw = [e.clientX, e.clientY]; });
  stage.addEventListener('pointerup', function (e) {
    if (!sw) return; var dx = e.clientX - sw[0], dy = e.clientY - sw[1]; sw = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) > 50) go(store.i + ((Math.abs(dx) > Math.abs(dy) ? dx : dy) < 0 ? 1 : -1));
  });
  function fullscreen() {
    var d = document;
    if (!d.fullscreenElement) { if (d.documentElement.requestFullscreen) d.documentElement.requestFullscreen().catch(function () { toast('Весь экран', 'Браузер не разрешил полноэкранный режим. Нажмите F11.'); }); }
    else if (d.exitFullscreen) d.exitFullscreen();
  }
  function fit() {
    var k = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = 'translate(-50%, -50%) scale(' + k + ')';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('hashchange', function () { var n = parseInt(location.hash.slice(1), 10); if (n >= 1 && n !== store.i + 1) go(n - 1); });

  /* ---------- курсор: кольцо догоняет точку, подпись говорит, что будет по щелчку ---------- */
  var LABELS = [['.lb-view', function (el) { return el.classList.contains('zoom') ? 'Уменьшить' : 'Увеличить'; }], ['[data-zoom]', 'Увеличить'],
    ['a[href]', 'Открыть сайт'], ['.app-time:disabled', 'Занято'], ['.app-time', 'Выбрать время'], ['.app-date', 'Выбрать дату'], ['.app-row', 'Выбрать услугу'],
    ['.app-btn:disabled', 'Заполните поля'], ['.app-btn', 'Нажать'], ['.w-row', 'В наряд'], ['input:not([type=range])', 'Ввести'],
    ['.range', 'Потяните'], ['.seg button', 'Сравнить'], ['.flipcard', 'Перевернуть'], ['.qchip', 'Спросить'], ['.dstep', 'Показать шаг'], ['.askq', 'Отметить'], ['.tab', 'Открыть'], ['.step', 'Открыть'], ['[data-act="next"]', 'Дальше'], ['[data-act="prev"]', 'Назад'],
    ['.ov-card', 'Перейти'], ['button', '']];
  function initCursor() {
    if (SHOT >= 0 || !window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;
    var box = $('#cursor'), dot = $('.c-dot', box), wrap = $('.c-wrap', box), ring = $('.c-ring', box), lab = $('.c-label', box);
    var x = -100, y = -100, rx = -100, ry = -100, last = '';
    document.body.classList.add('has-cursor');
    document.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      x = e.clientX; y = e.clientY; dot.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      document.body.classList.remove('cursor-off');
      var txt = null;
      for (var k = 0; k < LABELS.length; k++) { var el = e.target.closest && e.target.closest(LABELS[k][0]); if (el) { txt = typeof LABELS[k][1] === 'function' ? LABELS[k][1](el) : LABELS[k][1]; break; } }
      ring.classList.toggle('act', txt !== null);
      if (txt && txt !== last) lab.textContent = txt;
      lab.classList.toggle('on', !!txt); if (txt) last = txt;
    });
    document.addEventListener('pointerdown', function () { ring.classList.add('down'); });
    document.addEventListener('pointerup', function () { ring.classList.remove('down'); });
    document.documentElement.addEventListener('mouseleave', function () { document.body.classList.add('cursor-off'); });
    (function loop() {
      var k = store.reduced ? 1 : 0.22; rx += (x - rx) * k; ry += (y - ry) * k;
      wrap.style.transform = 'translate(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px)';
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- запуск ---------- */
  build(); fit(); initCursor();
  document.body.classList.toggle('reduced', store.reduced);
  $('#motionBtn').setAttribute('aria-pressed', store.reduced);
  if (SHOT >= 0) document.body.classList.add('shot');
  if (DEBUG) $('#debug').hidden = false;
  try {
    scene = window.LightScene.init($('#scene'), {
      reduced: store.reduced, shot: SHOT >= 0, debug: DEBUG, types: S.map(function (x) { return x.type; }),
      onDebug: function (t) { $('#debug').textContent = t; },
      onLost: function () { document.body.classList.add('no-gl'); },
      onQuality: function (q) { document.body.classList.add('lowfx'); }
    });
  } catch (e) { scene = null; }
  if (!scene) document.body.classList.add('no-gl');
  var start = SHOT >= 0 ? SHOT : Math.max(0, Math.min(S.length - 1, (parseInt(location.hash.slice(1), 10) || 1) - 1));
  if (SHOT < 0 && !store.reduced && start === 0) { document.body.classList.add('intro'); setTimeout(function () { document.body.classList.remove('intro'); }, 1800); }
  go(start, true);
  if (SHOT >= 0) {
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () {
      if (scene) scene.renderAt(SHOT);
      requestAnimationFrame(function () { requestAnimationFrame(function () { window.__ready = true; }); });
    });
  }
  window.__deck = { go: go, store: store };
})();
