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

  // მხოლოდ ჰორიზონტალურ გადაბრუნებაზე (Orientation Change) განახლება, რომ სქროლმა არ გააფუჭოს
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
   4. CYBERPUNK AMBIENT LO-FI PLAYER
========================================= */
const playToggleBtn = document.getElementById("playToggleBtn");
const playerIcon = document.getElementById("playerIcon");
const audioPlayer = document.getElementById("audioPlayer");

const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
let musicCtx = null;
let isPlaying = false;
let synthTimer = null;

const chords = [
  [130.81, 164.81, 196.0, 246.94],
  [110.0, 130.81, 164.81, 196.0],
  [146.83, 174.61, 220.0, 261.63],
  [98.0, 123.47, 146.83, 196.0],
];
let chordIndex = 0;

function playAmbientChord() {
  if (!isPlaying || !musicCtx) return;

  const currentChord = chords[chordIndex];
  chordIndex = (chordIndex + 1) % chords.length;

  currentChord.forEach((freq) => {
    const osc = musicCtx.createOscillator();
    const gain = musicCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, musicCtx.currentTime);

    gain.gain.setValueAtTime(0.001, musicCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.025, musicCtx.currentTime + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, musicCtx.currentTime + 3.2);

    osc.connect(gain);
    gain.connect(musicCtx.destination);

    osc.start();
    osc.stop(musicCtx.currentTime + 3.3);
  });
}

if (playToggleBtn) {
  playToggleBtn.addEventListener("click", () => {
    if (!musicCtx) musicCtx = new AudioCtxClass();
    if (musicCtx.state === "suspended") musicCtx.resume();

    isPlaying = !isPlaying;

    if (isPlaying) {
      audioPlayer.classList.add("playing");
      playerIcon.innerHTML = "&#10074;&#10074;";
      playAmbientChord();
      synthTimer = setInterval(playAmbientChord, 3200);
    } else {
      audioPlayer.classList.remove("playing");
      playerIcon.innerHTML = "&#9658;";
      clearInterval(synthTimer);
    }
  });
}

/* =========================================
   5. SCI-FI UI SOUND EFFECTS (WEB AUDIO API)
========================================= */
let sfxAudioCtx = null;
let sfxEnabled = true;
const sfxToggleBtn = document.getElementById("sfxToggleBtn");
const sfxIcon = document.getElementById("sfxIcon");

if (sfxToggleBtn) {
  sfxToggleBtn.addEventListener("click", () => {
    sfxEnabled = !sfxEnabled;
    sfxToggleBtn.style.opacity = sfxEnabled ? "1" : "0.4";
    sfxIcon.innerHTML = sfxEnabled ? "&#128266;" : "&#128263;";
  });
}

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
   7. მოდალები, SCROLL & REVEAL
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
    document.body.style.overflow = "hidden"; // მობილურზე ფონის სქროლის დაბლოკვა
  }
}

function closeModal(targetModal) {
  if (targetModal) {
    targetModal.classList.remove("active");
  } else {
    if (modal) modal.classList.remove("active");
    if (resumeModal) resumeModal.classList.remove("active");
  }
  document.body.style.overflow = ""; // სქროლის აღდგენა
}

if (contactBtn) contactBtn.addEventListener("click", () => openModal(modal));
if (mobileConnectBtn) {
  mobileConnectBtn.addEventListener("click", () => {
    // მენიუს დახურვა და მოდალის გახსნა
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

// 3D Tilt ბარათებზე (მხოლოდ Desktop მაუსისთვის)
if (!isTouchDevice) {
  document.querySelectorAll(".card, .showcase-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

// Scroll Reveal
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

  // ეკრანის ცარიელ ადგილზე დაჭერისას მენიუს დახურვა
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
