/* =========================================
   0. I18N BILINGUAL TRANSLATION ENGINE
========================================= */
const i18nData = {
  ka: {
    navHome: "მთავარი",
    navAbout: "ჩემ შესახებ",
    navProjects: "პროექტები",
    navTerminal: "ტერმინალი",
    navBack: "← მთავარი",
    connectBtn: "დაკავშირება",
    heroBadge: "ხელმისაწვდომია ახალი პროექტებისთვის",
    heroTitle1: "ვაშენებ თანამედროვე",
    heroTitle2: "ციფრულ გამოცდილებას",
    heroDesc:
      "Front-end დეველოპმენტი და ინტერაქციული UI დიზაინი. სუფთა კოდი, მაღალი წარმადობა და გამორჩეული ნეონის ესთეტიკა.",
    viewProjectsBtn: "ნახე პროექტები",
    resumeBtn: "ჩემი რეზიუმე",
    aboutTitle1: "ჩემ",
    aboutTitle2: "შესახებ",
    aboutText:
      "ვქმნი თანამედროვე, სწრაფ და ვიზუალურად გამორჩეულ ციფრულ ინტერფეისებს. განსაკუთრებულ ყურადღებას ვუთმობ დეტალებს, მიკრო-ინტერაქციებს, სუფთა არქიტექტურასა და კიბერპანკ/Tokyo Night ესთეტიკას.",
    skillsDesc: "ტექნოლოგიები და ხელსაწყოები, რომლებსაც ყოველდღიურად ვიყენებ:",
    termTitle1: "ინტერაქციული",
    termTitle2: "ტერმინალი",
    termWelcome:
      'სისტემა მზადაა. აკრიფე <span class="cmd-highlight">help</span> ბრძანებების სიისთვის.',
    footerDesc:
      "თანამედროვე ციფრული გადაწყვეტილებები და ინტერაქციული ვებ-გამოცდილება.",
    footerCopy: "© 2026 NEONDEV. ყველა უფლება დაცულია.",
    modalContactTitle1: "მოდი",
    modalContactTitle2: "დავუკავშირდეთ",
    modalContactDesc:
      "გაქვს საინტერესო იდეა ან პროექტი? მომწერე ნებისმიერ დროს.",
    labelName: "სახელი",
    labelEmail: "ელ-ფოსტა",
    labelMsg: "შეტყობინება",
    phName: "თქვენი სახელი",
    phMsg: "მოკლედ თქვენი იდეის შესახებ...",
    sendBtn: "გაგზავნა",
    resumeModalTitle1: "ჩემი",
    resumeModalTitle2: "რეზიუმე / CV",
    resumeModalDesc: "მოკლე პროფესიული შეჯამება და უნარები",
    cvPosLabel: "პოზიცია:",
    cvStackLabel: "სტეკი:",
    cvFocusLabel: "ფოკუსი:",
    cvFocusVal: "ინტერაქციული UI/UX, Cyberpunk ესთეტიკა, სუფთა არქიტექტურა",
    downloadCvBtn: "PDF რეზიუმეს ჩამოტვირთვა",
    projectsPageTitle1: "რჩეული",
    projectsPageTitle2: "პროექტები",
    projectsPageSubtitle:
      "ინტერაქციული ვებ-აპლიკაციები, კიბერპანკ ინტერფეისები და ექსპერიმენტული UI სისტემები.",
    proj1Desc:
      "ბრაუზერში გაშვებული კიბერპანკ სამუშაო გარემო მრავალფანჯრიანი სისტემით, Tokyo Night თემით, ანიმაციებითა და სისტემური მონიტორინგის ფუნქციებით.",
    proj2Desc:
      "ვირტუალური ბრძანებათა სტრიქონი რეალურ დროში სინთეზირებული კლავიატურის აკრეფის ხმებით, ჩაშენებული ბრძანებებითა და სისტემური მანიპულაციით.",
    proj3Desc:
      "სრულად მორგებული Tiling Window Manager-ის კონფიგურაცია Wayland-ზე. Waybar-ის პერსონალური მოდულები, Rofi მენიუ და ჰარმონიული ნეონის პალიტრა.",
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navTerminal: "Terminal",
    navBack: "← Home",
    connectBtn: "Contact",
    heroBadge: "Available for new projects",
    heroTitle1: "Building Modern",
    heroTitle2: "Digital Experiences",
    heroDesc:
      "Front-end engineering & interactive UI design. Clean code, high performance, and signature cyberpunk neon aesthetics.",
    viewProjectsBtn: "View Projects",
    resumeBtn: "My Resume",
    aboutTitle1: "About",
    aboutTitle2: "Me",
    aboutText:
      "Crafting modern, fast, and visually striking digital interfaces. Focused on micro-interactions, clean frontend architecture, and Cyberpunk/Tokyo Night design aesthetics.",
    skillsDesc: "Technologies and tools I work with on a daily basis:",
    termTitle1: "Interactive",
    termTitle2: "Terminal",
    termWelcome:
      'System online. Type <span class="cmd-highlight">help</span> for available commands.',
    footerDesc:
      "Modern digital solutions and immersive interactive web experiences.",
    footerCopy: "© 2026 NEONDEV. All rights reserved.",
    modalContactTitle1: "Let's",
    modalContactTitle2: "Connect",
    modalContactDesc: "Have a project or opportunity? Send a message anytime.",
    labelName: "Name",
    labelEmail: "Email",
    labelMsg: "Message",
    phName: "Your name",
    phMsg: "Tell me about your project...",
    sendBtn: "Send Message",
    resumeModalTitle1: "My",
    resumeModalTitle2: "Resume / CV",
    resumeModalDesc: "Professional summary and core engineering skills",
    cvPosLabel: "Role:",
    cvStackLabel: "Stack:",
    cvFocusLabel: "Focus:",
    cvFocusVal: "Interactive UI/UX, Cyberpunk Aesthetics, Clean Architecture",
    downloadCvBtn: "Download PDF Resume",
    projectsPageTitle1: "Featured",
    projectsPageTitle2: "Projects",
    projectsPageSubtitle:
      "Interactive web applications, cyberpunk interfaces, and experimental UI systems.",
    proj1Desc:
      "In-browser cyberpunk desktop environment featuring multi-window manager, Tokyo Night theme, physics animations, and system telemetry.",
    proj2Desc:
      "Procedural web terminal engine with real-time Web Audio API synthesized mechanical keystrokes and system management commands.",
    proj3Desc:
      "Fully customized Tiling Window Manager setup on Wayland with custom Waybar modules, Rofi app launcher, and unified neon palette.",
  },
};

let currentLang = localStorage.getItem("selectedLang") || "ka";
const langBtns = document.querySelectorAll(".lang-btn");

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("selectedLang", lang);
  document.documentElement.lang = lang;

  langBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18nData[lang] && i18nData[lang][key]) {
      el.innerHTML = i18nData[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (i18nData[lang] && i18nData[lang][key]) {
      el.placeholder = i18nData[lang][key];
    }
  });
}

langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetLang = btn.getAttribute("data-lang");
    if (targetLang !== currentLang) {
      applyLanguage(targetLang);
      if (typeof playClickSound === "function") playClickSound();
    }
  });
});

applyLanguage(currentLang);

/* =========================================
   1. CUSTOM CYBERPUNK CURSOR (მხოლოდ Desktop-ზე)
========================================= */
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

let mouseX = 0,
  mouseY = 0;
let ringX = 0,
  ringY = 0;

if (cursorDot && cursorRing && !isTouchDevice) {
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  const interactives = document.querySelectorAll(
    "a, button, input, textarea, .card, .player-btn, .theme-dot, .lang-btn",
  );
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () =>
      cursorRing.classList.add("hovered"),
    );
    el.addEventListener("mouseleave", () =>
      cursorRing.classList.remove("hovered"),
    );
  });
}

/* =========================================
   2. MATRIX RAIN ტილო (CANVAS) - მობილურზე ოპტიმიზებული
========================================= */
const canvas = document.getElementById("matrixCanvas");
let matrixColor = "#7dcfff";

if (canvas) {
  const ctx = canvas.getContext("2d");
  const letters = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789ABCDEF<>/{}*";
  const fontSize = 16;
  let columns = 0;
  let drops = [];
  let lastWidth = 0;

  function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    lastWidth = window.innerWidth;

    const newColumns = Math.floor(canvas.width / fontSize);
    if (newColumns !== columns) {
      columns = newColumns;
      drops = Array(columns).fill(1);
    }
  }

  initMatrix();

  window.addEventListener("resize", () => {
    if (Math.abs(window.innerWidth - lastWidth) > 30) {
      initMatrix();
    }
  });

  function drawMatrix() {
    ctx.fillStyle = "rgba(15, 17, 26, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = matrixColor;
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 35);
}

/* =========================================
   3. ნეონის თემების გადამრთველი & LOCALSTORAGE
========================================= */
const themeDots = document.querySelectorAll(".theme-dot");

function applyTheme(themeName, playSound = false) {
  themeDots.forEach((d) => {
    d.classList.toggle("active", d.getAttribute("data-theme") === themeName);
  });

  document.body.classList.remove("theme-cyber", "theme-matrix");

  if (themeName === "cyber") {
    document.body.classList.add("theme-cyber");
    matrixColor = "#fcee0a";
  } else if (themeName === "matrix") {
    document.body.classList.add("theme-matrix");
    matrixColor = "#00ff66";
  } else {
    matrixColor = "#7dcfff";
  }

  localStorage.setItem("selectedTheme", themeName);

  if (playSound && typeof playClickSound === "function") {
    playClickSound();
  }
}

themeDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const selectedTheme = dot.getAttribute("data-theme");
    applyTheme(selectedTheme, true);
  });
});

const savedTheme = localStorage.getItem("selectedTheme") || "tokyo";
applyTheme(savedTheme, false);

/* =========================================
   4. CYBER_LOFI.FM: Advanced Progression Engine (Lush Lo-Fi & Synthwave)
========================================= */
const playToggleBtn = document.getElementById("playToggleBtn");
const nextTrackBtn = document.getElementById("nextTrackBtn");
const playerIcon = document.getElementById("playerIcon");
const trackTitleEl = document.getElementById("trackTitle");
const audioPlayer = document.getElementById("audioPlayer");
const visualizerBars = document.querySelectorAll(".v-bar");

const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
let musicCtx = null;
let isPlaying = false;
let synthTimer = null;
let globalStep = 0;
let currentTrackIndex = 0;

let delayNode, delayFeedback, delayMix, distNode, distGain;

function makeDistortionCurve(amount) {
  const k = typeof amount === "number" ? amount : 50;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

// 3 სრულყოფილად სტრუქტურირებული ტრეკი დინამიური აკორდებით
const playlists = [
  {
    name: "TOKYO_NIGHT.FM",
    style: "lofi",
    bpm: 72, // ძალიან ნელი და მოსადუნებელი
    root: 73.42, // D2
    scale: [0, 2, 3, 5, 7, 8, 10], // D Minor
    progression: [0, -2, -1, -3], // 4-ტაქტიანი ულამაზესი პროგრესია: Dm7 -> Bbmaj7 -> C7 -> Am7
    drums: {
      k: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // რბილი და იშვიათი ბიტი
      s: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      h: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    },
    bass: [
      0,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      0,
      null,
      null,
      null,
      2,
      null,
      null,
      null,
    ],
    chords: [
      [0, 2, 4, 6],
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    lead: [
      null,
      null,
      null,
      null,
      4,
      null,
      6,
      null,
      7,
      null,
      null,
      null,
      9,
      null,
      4,
      null,
    ],
  },
  {
    name: "CYBER_DRIFT.WAV",
    style: "synthwave",
    bpm: 105,
    root: 55.0, // A1
    scale: [0, 2, 3, 5, 7, 8, 10], // A Minor
    progression: [0, -3, -2, -4], // Am -> F -> G -> Em
    drums: {
      k: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      s: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      h: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    bass: [0, 0, 7, 0, 0, 0, 7, 0, -2, -2, 5, -2, 2, 2, 9, 2],
    chords: [
      [0, 2, 4],
      null,
      null,
      null,
      [0, 2, 4],
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    lead: [
      null,
      null,
      7,
      null,
      4,
      null,
      null,
      5,
      null,
      3,
      null,
      null,
      4,
      null,
      2,
      null,
    ],
  },
  {
    name: "MATRIX_DREAM.RAW",
    style: "ambient",
    bpm: 115,
    root: 41.2, // E1
    scale: [0, 1, 3, 5, 7, 8, 10], // E Phrygian
    progression: [0, 2, 4, 3], // ამოუცნობი მატრიცული ატმოსფერო
    drums: {
      k: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
      s: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      h: [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
    },
    bass: [
      0,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      1,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    chords: [
      [0, 4, 7],
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    lead: [
      null,
      7,
      null,
      8,
      null,
      5,
      null,
      7,
      null,
      3,
      null,
      5,
      null,
      1,
      null,
      0,
    ],
  },
];

// ნოტების ავტომატური გადამყვანი (სკალის ჰარმონიისთვის)
function getFreq(root, scale, degree, octOffset = 0) {
  let d = degree;
  let oct = octOffset;
  while (d < 0) {
    d += scale.length;
    oct -= 1;
  }
  while (d >= scale.length) {
    d -= scale.length;
    oct += 1;
  }
  const semitones = scale[d] + oct * 12;
  return root * Math.pow(2, semitones / 12);
}

/* --- ინსტრუმენტების სინთეზი --- */
function triggerKick(style, time) {
  const osc = musicCtx.createOscillator();
  const gain = musicCtx.createGain();
  osc.frequency.setValueAtTime(style === "lofi" ? 110 : 160, time);
  osc.frequency.exponentialRampToValueAtTime(30, time + 0.1);

  gain.gain.setValueAtTime(0.001, time);
  // Lo-fi Kick არის ძალიან რბილი და ჩუმი
  gain.gain.exponentialRampToValueAtTime(
    style === "lofi" ? 0.25 : 0.45,
    time + 0.01,
  );
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);

  osc.connect(gain);
  if (style === "synthwave") {
    gain.connect(distNode);
  } else {
    gain.connect(musicCtx.destination);
  }
  osc.start(time);
  osc.stop(time + 0.3);
}

function triggerSnare(style, time) {
  const bufferSize = musicCtx.sampleRate * 0.15;
  const buffer = musicCtx.createBuffer(1, bufferSize, musicCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = musicCtx.createBufferSource();
  noise.buffer = buffer;
  const filter = musicCtx.createBiquadFilter();
  const gain = musicCtx.createGain();

  // Lo-Fi-ში Snare ჩახშულია
  filter.type = style === "synthwave" ? "lowpass" : "lowpass";
  filter.frequency.setValueAtTime(style === "lofi" ? 1100 : 2800, time);

  gain.gain.setValueAtTime(style === "lofi" ? 0.07 : 0.18, time);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    time + (style === "lofi" ? 0.08 : 0.15),
  );

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(musicCtx.destination);
  noise.start(time);
  noise.stop(time + 0.2);
}

function triggerHiHat(style, time) {
  const bufferSize = musicCtx.sampleRate * 0.05;
  const buffer = musicCtx.createBuffer(1, bufferSize, musicCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = musicCtx.createBufferSource();
  noise.buffer = buffer;
  const filter = musicCtx.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.setValueAtTime(8000, time);

  const gain = musicCtx.createGain();
  // Lo-fi Hat თითქმის უჩინარია
  gain.gain.setValueAtTime(style === "lofi" ? 0.015 : 0.04, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(musicCtx.destination);
  noise.start(time);
  noise.stop(time + 0.05);
}

function triggerBass(style, freq, time, duration) {
  const osc = musicCtx.createOscillator();
  const filter = musicCtx.createBiquadFilter();
  const gain = musicCtx.createGain();

  osc.type = style === "synthwave" ? "sawtooth" : "triangle";
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(style === "synthwave" ? 800 : 200, time);

  if (style === "synthwave") {
    filter.frequency.exponentialRampToValueAtTime(100, time + duration);
    filter.Q.setValueAtTime(4, time);
  }

  gain.gain.setValueAtTime(0.001, time);
  // Lo-fi ბასი რბილია და ღრმა
  gain.gain.linearRampToValueAtTime(
    style === "lofi" ? 0.15 : 0.22,
    time + 0.05,
  );
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(filter);
  filter.connect(gain);

  if (style === "synthwave") {
    gain.connect(distNode);
  } else {
    gain.connect(musicCtx.destination);
  }

  osc.start(time);
  osc.stop(time + duration + 0.1);
}

function triggerChord(style, notes, time, duration) {
  notes.forEach((freq) => {
    const osc = musicCtx.createOscillator();
    const filter = musicCtx.createBiquadFilter();
    const gain = musicCtx.createGain();

    osc.type = style === "synthwave" ? "sawtooth" : "sine";
    filter.type = "lowpass";
    // Lo-Fi-ში აკორდი უკიდურესად თბილია
    filter.frequency.setValueAtTime(style === "lofi" ? 500 : 1800, time);

    if (style === "synthwave") {
      filter.frequency.exponentialRampToValueAtTime(300, time + duration);
    }

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(
      style === "lofi" ? 0.018 : 0.025,
      time + 0.15,
    ); // ნელი გაშლა
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(musicCtx.destination);

    if (style !== "synthwave") gain.connect(delayNode); // ექო ემატება

    osc.start(time);
    osc.stop(time + duration + 0.1);
  });
}

function triggerLead(style, freq, time, duration) {
  const osc = musicCtx.createOscillator();
  const filter = musicCtx.createBiquadFilter();
  const gain = musicCtx.createGain();

  osc.type = style === "synthwave" ? "square" : "sine";
  filter.type = style === "ambient" ? "bandpass" : "lowpass";
  filter.frequency.setValueAtTime(style === "synthwave" ? 2500 : 1200, time);

  gain.gain.setValueAtTime(0.001, time);
  gain.gain.linearRampToValueAtTime(
    style === "lofi" ? 0.02 : 0.05,
    time + 0.05,
  );
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(musicCtx.destination);
  gain.connect(delayNode); // მელოდიას აქვს ექო

  osc.start(time);
  osc.stop(time + duration + 0.1);
}

/* --- სტრუქტურირებული ტაქტის სვლა (4 Bar Dynamic Progression) --- */
function runCompositionStep() {
  if (!isPlaying || !musicCtx) return;

  const track = playlists[currentTrackIndex];
  const now = musicCtx.currentTime;
  const stepDuration = 15 / track.bpm;

  // ექოს სინქრონიზაცია ბიტთან
  if (delayNode) delayNode.delayTime.setValueAtTime(stepDuration * 3, now);

  const step = globalStep % 16; // 0-დან 15-მდე (1 ტაქტი)
  const bar = Math.floor(globalStep / 16) % 4; // 0, 1, 2, 3 (ტაქტების ციკლი)

  // ჰარმონიის ავტომატური გადანაცვლება ტაქტის მიხედვით!
  const barOffset = track.progression[bar];

  const kickHit = track.drums.k[step];
  const snareHit = track.drums.s[step];
  const hatHit = track.drums.h[step];
  const bassNote = track.bass[step];
  const chordNotes = track.chords[step];
  const leadNote = track.lead[step];

  // Synthwave-ში მე-4 ტაქტზე ბიტს ვაჩერებთ დროპისთვის, Lo-Fi-ში ყველაფერი უწყვეტია
  const isDrop = track.style === "synthwave" && bar === 3 && step >= 12;

  // Drums
  if (kickHit && !isDrop) triggerKick(track.style, now);
  if (snareHit) triggerSnare(track.style, now);
  if (hatHit || (isDrop && step % 2 === 0)) triggerHiHat(track.style, now);

  // Bass
  if (bassNote !== null) {
    // ბასი გადაადგილდება მიმდინარე ტაქტის ჰარმონიის მიხედვით!
    const freq = getFreq(track.root, track.scale, bassNote + barOffset);
    triggerBass(track.style, freq, now, stepDuration * 0.9);
  }

  // Chords
  if (chordNotes !== null) {
    if (track.style === "lofi" || bar !== 3) {
      // აკორდებიც იცვლება ყოველ ტაქტში მუსიკალური სკალის გაყოლებით
      const freqs = chordNotes.map((n) =>
        getFreq(track.root, track.scale, n + barOffset),
      );
      triggerChord(track.style, freqs, now, stepDuration * 3.5);
    }
  }

  // Lead მელოდია
  if (leadNote !== null) {
    // მელოდია შემოდის მხოლოდ მე-2 და მე-3 ტაქტში, რომ მუსიკამ ისუნთქოს
    if (track.style === "synthwave" || bar === 1 || bar === 2) {
      const freq = getFreq(track.root, track.scale, leadNote + barOffset, 1);
      triggerLead(track.style, freq, now, stepDuration * 1.5);
    }
  }

  if (visualizerBars.length > 0) {
    const intensity = kickHit ? 14 : snareHit ? 10 : hatHit ? 5 : 3;
    visualizerBars.forEach((b) => {
      b.style.height = `${Math.floor(Math.random() * intensity) + 4}px`;
    });
  }

  globalStep++;
}

// ჩართვა / ეფექტების ინიციალიზაცია
if (playToggleBtn) {
  playToggleBtn.addEventListener("click", () => {
    if (!musicCtx) {
      musicCtx = new AudioCtxClass();

      // სივრცული Delay (ექო)
      delayNode = musicCtx.createDelay();
      delayFeedback = musicCtx.createGain();
      delayMix = musicCtx.createGain();

      delayFeedback.gain.value = 0.35;
      delayMix.gain.value = 0.25;

      delayNode.connect(delayFeedback);
      delayFeedback.connect(delayNode);
      delayNode.connect(delayMix);
      delayMix.connect(musicCtx.destination);

      // Distortion
      distNode = musicCtx.createWaveShaper();
      distNode.curve = makeDistortionCurve(45);
      distNode.oversample = "4x";
      distGain = musicCtx.createGain();
      distGain.gain.value = 0.7;
      distNode.connect(distGain);
      distGain.connect(musicCtx.destination);
    }

    if (musicCtx.state === "suspended") musicCtx.resume();

    isPlaying = !isPlaying;

    if (isPlaying) {
      if (audioPlayer) audioPlayer.classList.add("playing");
      if (playerIcon) playerIcon.innerHTML = "&#10074;&#10074;";

      runCompositionStep();
      const track = playlists[currentTrackIndex];
      synthTimer = setInterval(runCompositionStep, (15 / track.bpm) * 1000);
    } else {
      if (audioPlayer) audioPlayer.classList.remove("playing");
      if (playerIcon) playerIcon.innerHTML = "&#9658;";
      clearInterval(synthTimer);
      synthTimer = null;
      globalStep = 0;
      visualizerBars.forEach((bar) => (bar.style.height = "3px"));
    }
  });
}

if (nextTrackBtn) {
  nextTrackBtn.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlists.length;
    const nextTrack = playlists[currentTrackIndex];

    if (trackTitleEl) {
      trackTitleEl.textContent = nextTrack.name;
    }

    globalStep = 0;

    if (isPlaying) {
      clearInterval(synthTimer);
      runCompositionStep();
      synthTimer = setInterval(runCompositionStep, (15 / nextTrack.bpm) * 1000);
    }
  });
}
/* =========================================
   5. SCI-FI UI SOUND EFFECTS (WEB AUDIO API)
========================================= */
let sfxAudioCtx = null;
let sfxEnabled = true;

function playHoverSound() {
  if (!sfxEnabled || isTouchDevice) return;
  if (!sfxAudioCtx) sfxAudioCtx = new AudioCtxClass();
  if (sfxAudioCtx.state === "suspended") sfxAudioCtx.resume();

  const osc = sfxAudioCtx.createOscillator();
  const gain = sfxAudioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(1100, sfxAudioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(
    1700,
    sfxAudioCtx.currentTime + 0.04,
  );

  gain.gain.setValueAtTime(0.015, sfxAudioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    sfxAudioCtx.currentTime + 0.04,
  );

  osc.connect(gain);
  gain.connect(sfxAudioCtx.destination);

  osc.start();
  osc.stop(sfxAudioCtx.currentTime + 0.045);
}

function playClickSound() {
  if (!sfxEnabled) return;
  if (!sfxAudioCtx) sfxAudioCtx = new AudioCtxClass();
  if (sfxAudioCtx.state === "suspended") sfxAudioCtx.resume();

  const osc = sfxAudioCtx.createOscillator();
  const gain = sfxAudioCtx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(320, sfxAudioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(
    60,
    sfxAudioCtx.currentTime + 0.06,
  );

  gain.gain.setValueAtTime(0.05, sfxAudioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, sfxAudioCtx.currentTime + 0.06);

  osc.connect(gain);
  gain.connect(sfxAudioCtx.destination);

  osc.start();
  osc.stop(sfxAudioCtx.currentTime + 0.065);
}

document
  .querySelectorAll(
    ".nav-links a, .btn-neon, .btn-primary, .btn-secondary, .card, .tag, .social-link, .btn-scroll-top, .modal-close, .theme-dot, .lang-btn",
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", playHoverSound);
    el.addEventListener("click", playClickSound);
  });

/* =========================================
   6. ტერმინალი & კლავიატურის დინამიური ხმები
========================================= */
const termInput = document.getElementById("terminalInput");
const termOutput = document.getElementById("terminalOutput");

function playKeyClick(key) {
  if (!sfxAudioCtx) sfxAudioCtx = new AudioCtxClass();
  if (sfxAudioCtx.state === "suspended") sfxAudioCtx.resume();

  const osc = sfxAudioCtx.createOscillator();
  const gain = sfxAudioCtx.createGain();

  let baseFreq = 500 + ((key.charCodeAt(0) * 37) % 600);
  let duration = 0.04;
  let oscType = "sine";

  if (key === "Enter") {
    baseFreq = 180;
    duration = 0.09;
    oscType = "triangle";
  } else if (key === "Backspace") {
    baseFreq = 300;
    duration = 0.05;
    oscType = "triangle";
  } else if (key === " ") {
    baseFreq = 260;
  }

  osc.type = oscType;
  osc.frequency.setValueAtTime(baseFreq, sfxAudioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(
    Math.max(40, baseFreq * 0.4),
    sfxAudioCtx.currentTime + duration,
  );

  gain.gain.setValueAtTime(
    key === "Enter" ? 0.08 : 0.035,
    sfxAudioCtx.currentTime,
  );
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    sfxAudioCtx.currentTime + duration,
  );

  osc.connect(gain);
  gain.connect(sfxAudioCtx.destination);

  osc.start();
  osc.stop(sfxAudioCtx.currentTime + duration);
}

const commands = {
  help: () =>
    currentLang === "ka"
      ? `ხელმისაწვდომი ბრძანებები:
  - <span class="cmd-highlight">skills</span>: ტექნოლოგიური სტეკი
  - <span class="cmd-highlight">about</span>: მოკლე ინფორმაცია
  - <span class="cmd-highlight">play</span>: კიბერპანკ მუსიკის ჩართვა/გამორთვა
  - <span class="cmd-highlight">clear</span>: ეკრანის გასუფთავება`
      : `Available commands:
  - <span class="cmd-highlight">skills</span>: Core tech stack
  - <span class="cmd-highlight">about</span>: Short biography
  - <span class="cmd-highlight">play</span>: Toggle cyberpunk audio
  - <span class="cmd-highlight">clear</span>: Clear terminal console`,

  skills: `Technologies: [ HTML5, CSS3, JavaScript, Web Audio API, Canvas, Git, Linux ]`,
  about: () =>
    currentLang === "ka"
      ? `Frontend დეველოპერი, რომელიც ორიენტირებულია მაღალი დონის ინტერაქციულ UI/UX დიზაინზე.`
      : `Creative Frontend Engineer focusing on interactive UI/UX and cyberpunk design systems.`,
  play: () => {
    if (playToggleBtn) playToggleBtn.click();
    return isPlaying ? "CYBER_LOFI.FM // ONLINE" : "CYBER_LOFI.FM // OFFLINE";
  },
};

if (termInput) {
  termInput.addEventListener("keydown", (e) => {
    const ignoredKeys = [
      "Shift",
      "Control",
      "Alt",
      "CapsLock",
      "Meta",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];
    if (!ignoredKeys.includes(e.key)) playKeyClick(e.key);

    if (e.key === "Enter") {
      const rawInput = termInput.value.trim().toLowerCase();
      if (!rawInput) return;

      const userLine = document.createElement("div");
      userLine.className = "term-line";
      userLine.innerHTML = `<span class="terminal-prompt">guest@tokyo-night:~$</span> ${termInput.value}`;
      termOutput.appendChild(userLine);

      if (rawInput === "clear") {
        termOutput.innerHTML = "";
      } else if (commands[rawInput]) {
        const response =
          typeof commands[rawInput] === "function"
            ? commands[rawInput]()
            : commands[rawInput];
        const resLine = document.createElement("div");
        resLine.className = "term-line term-success";
        resLine.innerHTML = response.replace(/\n/g, "<br>");
        termOutput.appendChild(resLine);
      } else {
        const errorLine = document.createElement("div");
        errorLine.className = "term-line term-error";
        errorLine.textContent =
          currentLang === "ka"
            ? `ბრძანება "${rawInput}" ვერ მოიძებნა. სცადე 'help'`
            : `Command "${rawInput}" not found. Try 'help'`;
        termOutput.appendChild(errorLine);
      }

      termInput.value = "";
      termOutput.scrollTop = termOutput.scrollHeight;
    }
  });
}

/* =========================================
   7. მოდალები, SCROLL & REVEAL & 3D TILT
========================================= */
const contactBtn = document.querySelector(".nav-desktop-btn");
const mobileConnectBtn = document.querySelector(".btn-mobile-connect");
const modal = document.getElementById("contactModal");
const closeBtn = document.getElementById("closeBtn");
const resumeBtn = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeResumeBtn = document.getElementById("closeResumeBtn");

function openModal(targetModal) {
  if (targetModal) {
    targetModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(targetModal) {
  if (targetModal) {
    targetModal.classList.remove("active");
  } else {
    if (modal) modal.classList.remove("active");
    if (resumeModal) resumeModal.classList.remove("active");
  }
  document.body.style.overflow = "";
}

if (contactBtn) contactBtn.addEventListener("click", () => openModal(modal));
if (mobileConnectBtn) {
  mobileConnectBtn.addEventListener("click", () => {
    if (hamburgerBtn && navLinks) {
      hamburgerBtn.classList.remove("active");
      navLinks.classList.remove("active");
    }
    openModal(modal);
  });
}
if (closeBtn) closeBtn.addEventListener("click", () => closeModal(modal));
if (resumeBtn && resumeModal)
  resumeBtn.addEventListener("click", () => openModal(resumeModal));
if (closeResumeBtn && resumeModal)
  closeResumeBtn.addEventListener("click", () => closeModal(resumeModal));

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal(modal);
  if (e.target === resumeModal) closeModal(resumeModal);
});

const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

// 3D Tilt ბარათებზე (ცალკე ფუნქცია, რომელიც SPA გადასვლის შემდეგაც მუშაობს)
function init3DTilt() {
  if (isTouchDevice) return;
  document.querySelectorAll(".card, .showcase-card").forEach((card) => {
    card.onmousemove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };
    card.onmouseleave = () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    };
  });
}
init3DTilt();

// Scroll Reveal
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("active"));
  }
}
initScrollReveal();

/* =========================================
   8. მობილურის ჰამბურგერ მენიუ (OUTSIDE CLICK)
========================================= */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburgerBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      hamburgerBtn.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
}

/* =========================================
   9. HACKER TEXT SCRAMBLE EFFECT
========================================= */
const chars = "!<>-_\\/[]{}—=+*^?#_010101";

class TextScramble {
  constructor(el) {
    this.el = el;
    this.isLogo = el.classList.contains("logo");
    this.originalHTML = el.innerHTML;
    this.originalText = el.innerText.trim();
    this.frame = 0;
    this.queue = [];
    this.frameReq = null;
  }

  init() {
    this.queue = [];
    for (let i = 0; i < this.originalText.length; i++) {
      const from = "";
      const to = this.originalText[i];
      const start = Math.floor(Math.random() * 8);
      const end = start + Math.floor(Math.random() * 12);
      this.queue.push({ from, to, start, end, char: "" });
    }

    if (this.frameReq) cancelAnimationFrame(this.frameReq);
    this.frame = 0;
    this.update();
  }

  update() {
    let complete = 0;
    let neonPart = "";
    let devPart = "";
    let simpleOutput = "";

    for (let i = 0; i < this.queue.length; i++) {
      let { to, start, end, char } = this.queue[i];
      let displayChar = "";

      if (this.frame >= end) {
        complete++;
        displayChar = to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = chars[Math.floor(Math.random() * chars.length)];
          this.queue[i].char = char;
        }
        displayChar = `<span style="color: var(--neon-primary); opacity: 0.9;">${char}</span>`;
      }

      if (this.isLogo) {
        if (i < 4) {
          neonPart += displayChar;
        } else {
          devPart += displayChar;
        }
      } else {
        simpleOutput += displayChar;
      }
    }

    if (this.isLogo) {
      this.el.innerHTML = `${neonPart}<span>${devPart}</span>`;
    } else {
      this.el.innerHTML = simpleOutput;
    }

    if (complete !== this.queue.length) {
      this.frameReq = requestAnimationFrame(() => this.update());
      this.frame++;
    } else {
      this.restore();
    }
  }

  restore() {
    if (this.frameReq) cancelAnimationFrame(this.frameReq);
    if (this.isLogo) {
      this.el.innerHTML = `NEON<span>DEV</span>`;
    } else {
      this.el.innerHTML = this.originalHTML;
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const scrambleTargets = document.querySelectorAll(
    ".gradient-text, .page-title span, .logo",
  );

  scrambleTargets.forEach((target) => {
    const scrambler = new TextScramble(target);
    setTimeout(() => {
      scrambler.init();
    }, 300);
  });
});

/* =========================================
   10. რეალური საკონტაქტო ფორმის გაგზავნა (AJAX)
========================================= */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formspreeEndpoint = "https://formspree.io/f/xgaaegqd";
    const formData = new FormData(contactForm);

    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.6";
    formStatus.className = "form-status loading";
    formStatus.textContent =
      currentLang === "ka"
        ? "[UPLOADING...] პაკეტების გაგზავნა სერვერზე..."
        : "[UPLOADING...] Dispatching packet to relay server...";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.className = "form-status success";
        formStatus.textContent =
          currentLang === "ka"
            ? "[STATUS: 200 OK] შეტყობინება წარმატებით გაიგზავნა!"
            : "[STATUS: 200 OK] Message dispatched successfully!";
        contactForm.reset();

        setTimeout(() => {
          formStatus.className = "form-status";
          closeModal(modal);
        }, 2500);
      } else {
        throw new Error();
      }
    } catch (err) {
      formStatus.className = "form-status error";
      formStatus.textContent =
        currentLang === "ka"
          ? "[ERR: 500] გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით."
          : "[ERR: 500] Packet drop. Try again later.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    }
  });
}

/* =========================================
   11. SEAMLESS SPA NAVIGATION ENGINE (NO AUDIO DROP)
========================================= */

async function navigateTo(url, push = true) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to load page");
    const htmlText = await response.text();

    const parser = new DOMParser();
    const newDoc = parser.parseFromString(htmlText, "text/html");

    const currentMain = document.querySelector("main");
    const newMain = newDoc.querySelector("main");

    if (currentMain && newMain) {
      // 1. ცენტრალური კონტენტის ჩანაცვლება
      currentMain.innerHTML = newMain.innerHTML;
      currentMain.className = newMain.className;

      // 2. გვერდის სათაურის (Title) განახლება
      if (newDoc.title) {
        document.title = newDoc.title;
      }

      // 3. ისტორიის (URL) განახლება
      if (push) {
        window.history.pushState({ path: url }, "", url);
      }

      // 4. გვერდის თავში ასქროლვა
      const targetHash = window.location.hash;
      if (targetHash) {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }

      // 5. ინტერაქტიული სისტემების ხელახალი ინიციალიზაცია
      reinitializePageSystems();
    }
  } catch (error) {
    window.location.href = url;
  }
}

// ნავბარის დინამიური სინქრონიზაცია SPA გადასვლების დროს (ტერმინალის გარეშე)
function syncNavbarState() {
  const path = window.location.pathname;
  const isProjects = path.includes("projects.html");
  const navLinksUl = document.getElementById("navLinks");
  if (!navLinksUl) return;

  const homeLink = navLinksUl.querySelector('a[href="index.html"]:not(.logo)');
  const projLink = navLinksUl.querySelector('a[href="projects.html"]');
  let aboutLink = navLinksUl.querySelector('a[href="#about"]');

  // 1. თუ index.html-ზე ვართ და About ლინკი აკლია
  if (!isProjects && !aboutLink) {
    if (homeLink) {
      const li1 = document.createElement("li");
      li1.innerHTML = `<a href="#about" data-i18n="navAbout">${i18nData[currentLang].navAbout}</a>`;
      homeLink.parentElement.after(li1);
      aboutLink = li1.querySelector("a");
    }

    // About ლინკზე ხმის ეფექტების მიბმა
    if (aboutLink) {
      aboutLink.addEventListener("mouseenter", playHoverSound);
      aboutLink.addEventListener("click", playClickSound);
    }
  }

  // 2. ვაკონტროლებთ გამოჩენა/დამალვას და "←" ისარს
  if (isProjects) {
    if (homeLink) homeLink.setAttribute("data-i18n", "navBack");
    if (projLink) projLink.style.color = "var(--neon-primary)";
    if (aboutLink) aboutLink.parentElement.style.display = "none";
  } else {
    if (homeLink) homeLink.setAttribute("data-i18n", "navHome");
    if (projLink) projLink.style.color = "";
    if (aboutLink) aboutLink.parentElement.style.display = "block";
  }

  // 3. თარგმანის გადატარება
  if (typeof applyLanguage === "function") {
    applyLanguage(currentLang);
  }
}

// სისტემების განახლება ახალ გვერდზე გადასვლისას
function reinitializePageSystems() {
  // 1. ნავბარის სინქრონიზაცია (ისრების და ლინკების გასწორება)
  syncNavbarState();

  // 2. 3D Tilt ეფექტის მიბმა ახალ ბარათებზე
  init3DTilt();

  // 3. Scroll Reveal ანიმაციის ხელახალი გაშვება
  initScrollReveal();

  // 4. ხმის ეფექტების (SFX) მიბმა ახალ ღილაკებზე
  document
    .querySelectorAll(".showcase-actions a, .btn-primary, .btn-secondary, .tag")
    .forEach((el) => {
      el.addEventListener("mouseenter", playHoverSound);
      el.addEventListener("click", playClickSound);
    });

  // 5. Hacker Text Scramble ეფექტი სათაურებზე
  const scrambleTargets = document.querySelectorAll(
    ".gradient-text, .page-title span",
  );
  scrambleTargets.forEach((target) => {
    const scrambler = new TextScramble(target);
    setTimeout(() => scrambler.init(), 200);
  });
}

// თავდაპირველი ჩატვირთვისასაც გავუშვათ ნავბარის სინქრონიზაცია
window.addEventListener("DOMContentLoaded", () => {
  syncNavbarState();
});

// შიდა ლინკებზე დაკლიკების დაჭერა
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  if (
    link.target === "_blank" ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return;
  }

  // იმავე გვერდზე ჰეშზე (#about, #terminal) გადასვლა
  if (href.startsWith("#")) {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
    return;
  }

  // გვერდებს შორის გადასვლა (index.html <-> projects.html)
  if (href.includes(".html") || href === "/" || href.includes("#")) {
    e.preventDefault();
    navigateTo(href, true);
  }
});

// ბრაუზერის უკან/წინ ისრებზე (Back/Forward) მხარდაჭერა
window.addEventListener("popstate", () => {
  navigateTo(window.location.href, false);
});

/* =========================================
   12. CYBER HUD TELEMETRY ENGINE (REAL PING & LOC)
========================================= */
async function initCyberHud() {
  const locEl = document.getElementById("hudLoc");
  const pingEl = document.getElementById("hudPing");
  const statusEl = document.getElementById("hudStatus");

  // 1. Online / Offline სტატუსი
  window.addEventListener("online", () => {
    if (statusEl) {
      statusEl.textContent = "ONLINE";
      statusEl.parentElement.style.color = "#00ff66";
    }
  });
  window.addEventListener("offline", () => {
    if (statusEl) {
      statusEl.textContent = "OFFLINE";
      statusEl.parentElement.style.color = "#ff007f";
    }
  });

  // 2. რეალური ლოკაცია IP-ით
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (res.ok) {
      const data = await res.json();
      const city = data.city ? data.city.toUpperCase() : "TBILISI";
      const country = data.country_code
        ? data.country_code.toUpperCase()
        : "GE";
      if (locEl) locEl.textContent = `LOC: ${city} // ${country}`;
    }
  } catch (err) {
    if (locEl) locEl.textContent = "LOC: TBILISI // GE";
  }

  // 3. რეალური Ping-ის გაზომვა
  async function checkPing() {
    if (!pingEl) return;
    const start = performance.now();
    try {
      await fetch("https://1.1.1.1/cdn-cgi/trace", {
        mode: "no-cors",
        cache: "no-store",
      });
      const duration = Math.round(performance.now() - start);
      pingEl.textContent = duration;
    } catch {
      pingEl.textContent = Math.floor(Math.random() * 10) + 12;
    }
  }

  checkPing();
  setInterval(checkPing, 5000);
}

window.addEventListener("DOMContentLoaded", initCyberHud);
