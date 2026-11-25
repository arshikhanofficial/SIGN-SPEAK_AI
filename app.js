const WAITING_TEXT = "Waiting for sign...";
const WAITING_RESPONSE = "Response will appear here.";
const CUSTOM_RESPONSES_KEY = "signspeak-custom-responses";
const COMMUNITY_SIGNS_KEY = "signspeak-community-signs";
const PRACTICED_SIGNS_KEY = "signspeak-practiced-signs";
const CONTACT_NAME = "Arshi Khan";
const FEEDBACK_EMAIL = "arshisaleem089@gmail.com";
const CONTACT_PHONE = "9424678050";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FEEDBACK_EMAIL}`;

const signs = [
  {
    name: "Hello",
    category: "Greeting",
    shape: "Open palm (spread)",
    tip: "Open all 5 fingers wide and face your palm upright toward the camera.",
    response: "Hello, I would like to communicate.",
    detectable: true
  },
  {
    name: "Yes",
    category: "Answer",
    shape: "Closed fist",
    tip: "Fold all fingers into a steady closed fist.",
    response: "Yes.",
    detectable: true
  },
  {
    name: "No",
    category: "Answer",
    shape: "Two fingers together",
    tip: "Extend index and middle fingers pressed together, thumb tucked.",
    response: "No.",
    detectable: true
  },
  {
    name: "Help",
    category: "Safety",
    shape: "Thumb up",
    tip: "Make a fist with your thumb raised straight up.",
    response: "I need help, please.",
    detectable: true
  },
  {
    name: "Water",
    category: "Need",
    shape: "W hand",
    tip: "Extend index, middle, and ring fingers upward while folding pinky and thumb.",
    response: "I need water, please.",
    detectable: true
  },
  {
    name: "Food",
    category: "Need",
    shape: "Pinch upright",
    tip: "Bring your thumb and fingertips together pointing upward.",
    response: "I need food, please.",
    detectable: true
  },
  {
    name: "Thank You",
    category: "Social",
    shape: "Flat hand (thumb tucked)",
    tip: "Hold 4 fingers pressed together pointing up with your thumb tucked across the palm.",
    response: "Thank you.",
    detectable: true
  },
  {
    name: "Please",
    category: "Social",
    shape: "Open hand circle",
    tip: "Hold an open or flat hand and move it in a steady circle.",
    response: "Please.",
    detectable: true
  },
  {
    name: "Sorry",
    category: "Social",
    shape: "Closed fist circle",
    tip: "Make a closed fist and move it in a steady circle.",
    response: "I am sorry.",
    detectable: true
  },
  {
    name: "More",
    category: "Need",
    shape: "Pinch sideways",
    tip: "Bring your thumb and fingertips together and turn your hand sideways.",
    response: "I want more, please.",
    detectable: true
  },
  {
    name: "Stop",
    category: "Safety",
    shape: "Flat hand (thumb out)",
    tip: "Press 4 fingers tightly together pointing up with your thumb extended out.",
    response: "Please stop.",
    detectable: true
  },
  {
    name: "Bathroom",
    category: "Care",
    shape: "Fist shake / T hand",
    tip: "Make a fist (or tuck thumb between index and middle) and shake gently side to side.",
    response: "I need to use the bathroom.",
    detectable: true
  },
  {
    name: "Pain",
    category: "Health",
    shape: "Index finger pointing",
    tip: "Extend only your index finger upright or to the side.",
    response: "I am in pain.",
    detectable: true
  },
  {
    name: "Medicine",
    category: "Health",
    shape: "Middle finger to thumb",
    tip: "Bend or touch your middle finger to your thumb while keeping index, ring, and pinky extended.",
    response: "I need my medicine, please.",
    detectable: true
  },
  {
    name: "Doctor",
    category: "Health",
    shape: "Three fingers (Thumb + 2)",
    tip: "Extend your thumb, index, and middle fingers upright with ring and pinky folded.",
    response: "I need a doctor.",
    detectable: true
  },
  {
    name: "Emergency",
    category: "Safety",
    shape: "Urgent waving hand",
    tip: "Wave an open hand quickly side to side or raise it near the top of the frame.",
    response: "This is an emergency. I need help now.",
    detectable: true
  },
  {
    name: "Happy",
    category: "Feeling",
    shape: "V / Peace sign",
    tip: "Extend index and middle fingers spread wide into a V, thumb tucked.",
    response: "I feel happy.",
    detectable: true
  },
  {
    name: "Sad",
    category: "Feeling",
    shape: "Index pointing down",
    tip: "Point only your index finger straight downward.",
    response: "I feel sad.",
    detectable: true
  },
  {
    name: "Tired",
    category: "Feeling",
    shape: "Two fingers down",
    tip: "Point your index and middle fingers downward.",
    response: "I am tired and need rest.",
    detectable: true
  },
  {
    name: "Home",
    category: "Place",
    shape: "L hand",
    tip: "Extend your thumb and index finger in an L shape.",
    response: "I want to go home.",
    detectable: true
  },
  {
    name: "Family",
    category: "People",
    shape: "F / OK hand",
    tip: "Touch your thumb and index fingertips into a circle while extending the other three fingers.",
    response: "I want my family.",
    detectable: true
  },
  {
    name: "Phone",
    category: "Care",
    shape: "Call hand",
    tip: "Extend your thumb and pinky finger while folding the middle three fingers.",
    response: "Please call someone for me.",
    detectable: true
  },
  {
    name: "Sleep",
    category: "Need",
    shape: "Pinky extended",
    tip: "Extend only your pinky finger with all other fingers and thumb folded.",
    response: "I want to sleep.",
    detectable: true
  },
  {
    name: "Good",
    category: "Feeling",
    shape: "Flat hand sideways",
    tip: "Hold 4 fingers pressed together and point your flat hand sideways.",
    response: "That is good.",
    detectable: true
  },
  {
    name: "Bad",
    category: "Feeling",
    shape: "Thumb or hand down",
    tip: "Give a thumbs down or point your flat hand straight downward.",
    response: "That is bad or uncomfortable.",
    detectable: true
  },
  {
    name: "Finished",
    category: "Action",
    shape: "Spread hand sideways",
    tip: "Spread all fingers open and turn your hand horizontally sideways.",
    response: "I am finished.",
    detectable: true
  },
  {
    name: "Again",
    category: "Action",
    shape: "Curved C hand",
    tip: "Curve your fingers and thumb into an upright C shape.",
    response: "Please do that again.",
    detectable: true
  },
  {
    name: "I Love You",
    category: "Social",
    shape: "ILY hand",
    tip: "Extend your thumb, index, and pinky fingers while folding middle and ring.",
    response: "I love you.",
    detectable: true
  },
  {
    name: "Wait",
    category: "Action",
    shape: "Three fingers sideways",
    tip: "Extend thumb, index, and middle fingers turned horizontally sideways.",
    response: "Please wait a moment.",
    detectable: true
  },
  {
    name: "Cold",
    category: "Feeling",
    shape: "Four fingers spread",
    tip: "Spread 4 fingers wide upright with your thumb tucked across your palm.",
    response: "I feel cold.",
    detectable: true
  },
  {
    name: "Hot",
    category: "Feeling",
    shape: "W hand sideways",
    tip: "Extend index, middle, and ring fingers turned sideways.",
    response: "It is too hot.",
    detectable: true
  },
  {
    name: "Name",
    category: "People",
    shape: "H hand (two sideways)",
    tip: "Extend index and middle fingers together pointing horizontally sideways.",
    response: "What is your name?",
    detectable: true
  },
  {
    name: "Hungry",
    category: "Need",
    shape: "C hand sideways",
    tip: "Curve your fingers into a C shape turned horizontally sideways.",
    response: "I am hungry.",
    detectable: true
  }
];

const detectableSigns = signs.filter((sign) => sign.detectable);

const refs = {};
const state = {
  stream: null,
  detector: null,
  detectorReady: false,
  cameraActive: false,
  processingFrame: false,
  frameRequest: null,
  videoFrameRequest: null,
  lastVideoTime: -1,
  canvasCtx: null,
  selectedPractice: "Hello",
  practiceFilter: "All",
  practicedSigns: new Set(),
  practiceStreak: 0,
  lastMatchedPractice: "",
  autoAdvanceTimer: null,
  currentBaseSign: null,
  currentSign: null,
  currentResponse: null,
  customResponses: [],
  communitySigns: [],
  recentSigns: [],
  motionHistories: {},
  nullFrames: 0,
  lastRenderedKey: "",
  libraryFilter: "All",
  libraryQuery: "",
  lastSpokenText: "",
  lastSpokenAt: 0,
  lastError: ""
};

document.addEventListener("DOMContentLoaded", () => {
  bindRefs();
  state.customResponses = loadCustomResponses();
  state.communitySigns = loadCommunitySigns();
  state.practicedSigns = loadPracticedSigns();
  renderPracticeFilters();
  renderPracticePicker();
  updatePracticeStats();
  renderLibraryFilters();
  renderSignLibrary();
  renderCustomControls();
  renderCommunitySigns();
  setupTheme();
  setupEvents();
  prepareHandModel();
  updatePracticeResult(null);
  refs.speakButton.disabled = !canSpeak();
});

function bindRefs() {
  refs.themeToggle = document.querySelector("#themeToggle");
  refs.startCamera = document.querySelector("#startCamera");
  refs.stopCamera = document.querySelector("#stopCamera");
  refs.cameraPreview = document.querySelector("#cameraPreview");
  refs.landmarkCanvas = document.querySelector("#landmarkCanvas");
  refs.cameraEmptyState = document.querySelector("#cameraEmptyState");
  refs.cameraStatus = document.querySelector("#cameraStatus");
  refs.modelStatus = document.querySelector("#modelStatus");
  refs.trackingStatus = document.querySelector("#trackingStatus");
  refs.detectedText = document.querySelector("#detectedText");
  refs.responseText = document.querySelector("#responseText");
  refs.sourceShapeText = document.querySelector("#sourceShapeText");
  refs.confidenceText = document.querySelector("#confidenceText");
  refs.speakButton = document.querySelector("#speakButton");
  refs.autoSpeak = document.querySelector("#autoSpeak");
  refs.practiceFilters = document.querySelector("#practiceFilters");
  refs.practiceProgress = document.querySelector("#practiceProgress");
  refs.practiceStreak = document.querySelector("#practiceStreak");
  refs.resetPracticeBtn = document.querySelector("#resetPracticeBtn");
  refs.practicePicker = document.querySelector("#practicePicker");
  refs.practiceButtons = [];
  refs.selectedPractice = document.querySelector("#selectedPractice");
  refs.practiceHint = document.querySelector("#practiceHint");
  refs.practiceResult = document.querySelector("#practiceResult");
  refs.practiceLiveDetected = document.querySelector("#practiceLiveDetected");
  refs.nextPracticeBtn = document.querySelector("#nextPracticeBtn");
  refs.randomPracticeBtn = document.querySelector("#randomPracticeBtn");
  refs.speakPracticeBtn = document.querySelector("#speakPracticeBtn");
  refs.autoAdvancePractice = document.querySelector("#autoAdvancePractice");
  refs.practiceCard = document.querySelector(".practice-result");
  refs.libraryFilters = document.querySelector("#libraryFilters");
  refs.librarySearch = document.querySelector("#librarySearch");
  refs.signLibrary = document.querySelector("#signLibrary");
  refs.customSignForm = document.querySelector("#customSignForm");
  refs.detectedShapeSelect = document.querySelector("#detectedShapeSelect");
  refs.customSignName = document.querySelector("#customSignName");
  refs.customSignResponse = document.querySelector("#customSignResponse");
  refs.customSignStatus = document.querySelector("#customSignStatus");
  refs.customSignList = document.querySelector("#customSignList");
  refs.publicSignForm = document.querySelector("#publicSignForm");
  refs.publicSubmitBtn = document.querySelector("#publicSubmitBtn");
  refs.publicNameInput = document.querySelector("#publicNameInput");
  refs.publicEmailInput = document.querySelector("#publicEmailInput");
  refs.publicSignName = document.querySelector("#publicSignName");
  refs.publicSignCategory = document.querySelector("#publicSignCategory");
  refs.publicSignMeaning = document.querySelector("#publicSignMeaning");
  refs.publicSignDescription = document.querySelector("#publicSignDescription");
  refs.publicSignStatus = document.querySelector("#publicSignStatus");
  refs.communitySignList = document.querySelector("#communitySignList");
  refs.feedbackForm = document.querySelector("#feedbackForm");
  refs.feedbackSubmitBtn = document.querySelector("#feedbackSubmitBtn");
  refs.feedbackStatus = document.querySelector("#feedbackStatus");
  refs.nameInput = document.querySelector("#nameInput");
  refs.emailInput = document.querySelector("#emailInput");
  refs.messageInput = document.querySelector("#messageInput");
}

function setupTheme() {
  const savedTheme = localStorage.getItem("signspeak-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  setTheme(theme);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  refs.themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  refs.themeToggle.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem("signspeak-theme", theme);
}

function setupEvents() {
  refs.themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  refs.startCamera.addEventListener("click", startCamera);
  refs.stopCamera.addEventListener("click", stopCamera);
  refs.speakButton.addEventListener("click", () => speakText(state.currentResponse));

  refs.practicePicker.addEventListener("click", (event) => {
    const button = event.target.closest("[data-practice-sign]");
    if (!button) {
      return;
    }
    selectPracticeSign(button.dataset.practiceSign);
  });

  if (refs.practiceFilters) {
    refs.practiceFilters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-practice-category]");
      if (!button) {
        return;
      }
      state.practiceFilter = button.dataset.practiceCategory;
      renderPracticeFilters();
      renderPracticePicker();
    });
  }

  if (refs.nextPracticeBtn) {
    refs.nextPracticeBtn.addEventListener("click", nextPracticeSign);
  }
  if (refs.randomPracticeBtn) {
    refs.randomPracticeBtn.addEventListener("click", randomPracticeSign);
  }
  if (refs.speakPracticeBtn) {
    refs.speakPracticeBtn.addEventListener("click", () => {
      const sign = findSign(state.selectedPractice);
      if (sign) {
        speakText(sign.response);
      }
    });
  }
  if (refs.resetPracticeBtn) {
    refs.resetPracticeBtn.addEventListener("click", resetPracticeProgress);
  }

  if (refs.libraryFilters) {
    refs.libraryFilters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-library-category]");
      if (!button) {
        return;
      }
      state.libraryFilter = button.dataset.libraryCategory;
      renderLibraryFilters();
      renderSignLibrary();
    });
  }

  if (refs.librarySearch) {
    refs.librarySearch.addEventListener("input", (event) => {
      state.libraryQuery = event.target.value.trim().toLowerCase();
      renderSignLibrary();
    });
  }

  refs.signLibrary.addEventListener("click", (event) => {
    const button = event.target.closest("[data-practice-jump]");
    if (!button) {
      return;
    }
    state.practiceFilter = "All";
    renderPracticeFilters();
    renderPracticePicker();
    selectPracticeSign(button.dataset.practiceJump);
    document.querySelector("#practice")?.scrollIntoView({ behavior: "smooth" });
  });

  refs.customSignForm.addEventListener("submit", saveCustomResponse);
  refs.publicSignForm.addEventListener("submit", registerPublicSign);
  refs.customSignList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-custom]");
    if (!button) {
      return;
    }

    removeCustomResponse(button.dataset.removeCustom);
  });

  refs.feedbackForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = refs.nameInput.value.trim();
    const email = refs.emailInput.value.trim();
    const message = refs.messageInput.value.trim();

    if (!name) {
      refs.feedbackStatus.textContent = "Please add your name before sending.";
      refs.nameInput.focus();
      return;
    }
    if (!email || !email.includes("@")) {
      refs.feedbackStatus.textContent = "Please add a valid email address before sending.";
      refs.emailInput.focus();
      return;
    }
    if (!message) {
      refs.feedbackStatus.textContent = "Please add a short message before sending.";
      refs.messageInput.focus();
      return;
    }

    const fallbackBody = [
      "New SignSpeak AI feedback",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message
    ].join("\n");

    await sendEmailSubmission({
      form: refs.feedbackForm,
      submitButton: refs.feedbackSubmitBtn,
      statusEl: refs.feedbackStatus,
      subject: `SignSpeak AI Feedback from ${name}`,
      fields: {
        name,
        email,
        message
      },
      fallbackBody,
      successMessage: `Thank you, ${name}. Your message was automatically sent to ${CONTACT_NAME} (${FEEDBACK_EMAIL}).`
    });
  });

  window.addEventListener("beforeunload", stopCamera);
}

function selectPracticeSign(signName) {
  if (!findSign(signName)) {
    return;
  }
  if (state.autoAdvanceTimer) {
    clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }
  state.selectedPractice = signName;
  state.lastMatchedPractice = "";
  refs.practiceButtons.forEach((item) => {
    const selected = item.dataset.practiceSign === signName;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  refs.selectedPractice.textContent = state.selectedPractice;
  updatePracticeHint();
  updatePracticeResult(state.currentBaseSign);
}

function getFilteredPracticeSigns() {
  return detectableSigns.filter(
    (sign) => state.practiceFilter === "All" || sign.category === state.practiceFilter
  );
}

function nextPracticeSign() {
  const pool = getFilteredPracticeSigns();
  if (!pool.length) {
    return;
  }
  const idx = pool.findIndex((s) => s.name === state.selectedPractice);
  const next = pool[(idx + 1) % pool.length];
  selectPracticeSign(next.name);
}

function randomPracticeSign() {
  const pool = getFilteredPracticeSigns();
  if (!pool.length) {
    return;
  }
  const choices = pool.length > 1 ? pool.filter((s) => s.name !== state.selectedPractice) : pool;
  const pick = choices[Math.floor(Math.random() * choices.length)];
  selectPracticeSign(pick.name);
}

function updatePracticeStats() {
  if (refs.practiceProgress) {
    refs.practiceProgress.textContent = `Practiced: ${state.practicedSigns.size} / ${detectableSigns.length}`;
  }
  if (refs.practiceStreak) {
    refs.practiceStreak.textContent = `Streak: ${state.practiceStreak}`;
  }
}

function markSignPracticed(signName) {
  if (!signName) {
    return;
  }
  if (!state.practicedSigns.has(signName)) {
    state.practicedSigns.add(signName);
    persistPracticedSigns();
    renderPracticePicker();
  }
  if (state.lastMatchedPractice !== signName) {
    state.lastMatchedPractice = signName;
    state.practiceStreak += 1;
  }
  updatePracticeStats();
}

function resetPracticeProgress() {
  state.practicedSigns = new Set();
  state.practiceStreak = 0;
  state.lastMatchedPractice = "";
  persistPracticedSigns();
  renderPracticePicker();
  updatePracticeStats();
  updatePracticeResult(state.currentBaseSign);
}

function loadPracticedSigns() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PRACTICED_SIGNS_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch (error) {
    console.warn("Could not load practiced signs", error);
    return new Set();
  }
}

function persistPracticedSigns() {
  localStorage.setItem(PRACTICED_SIGNS_KEY, JSON.stringify(Array.from(state.practicedSigns)));
}

function updatePracticeHint() {
  if (!refs.practiceHint) {
    return;
  }
  const sign = findSign(state.selectedPractice);
  refs.practiceHint.textContent = sign ? `${sign.shape}: ${sign.tip}` : "";
}

function renderPracticeFilters() {
  if (!refs.practiceFilters) {
    return;
  }
  const categories = ["All", ...new Set(detectableSigns.map((sign) => sign.category))];
  refs.practiceFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-chip${state.practiceFilter === category ? " is-selected" : ""}"
          type="button"
          data-practice-category="${escapeHtml(category)}"
          aria-pressed="${state.practiceFilter === category}"
        >
          ${escapeHtml(category)}
        </button>
      `
    )
    .join("");
}

function renderLibraryFilters() {
  if (!refs.libraryFilters) {
    return;
  }
  const categories = ["All", ...new Set(signs.map((sign) => sign.category))];
  refs.libraryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-chip${state.libraryFilter === category ? " is-selected" : ""}"
          type="button"
          data-library-category="${escapeHtml(category)}"
          aria-pressed="${state.libraryFilter === category}"
        >
          ${escapeHtml(category)}
        </button>
      `
    )
    .join("");
}

function renderPracticePicker() {
  const pool = getFilteredPracticeSigns();
  if (pool.length && !pool.some((s) => s.name === state.selectedPractice)) {
    state.selectedPractice = pool[0].name;
    refs.selectedPractice.textContent = state.selectedPractice;
  }

  refs.practicePicker.innerHTML = pool
    .map((sign) => {
      const selected = sign.name === state.selectedPractice;
      const practiced = state.practicedSigns.has(sign.name);
      return `
        <button
          class="practice-chip${selected ? " is-selected" : ""}${practiced ? " is-practiced" : ""}"
          type="button"
          data-practice-sign="${escapeHtml(sign.name)}"
          aria-pressed="${selected}"
        >
          ${practiced ? "✓ " : ""}${escapeHtml(sign.name)}
        </button>
      `;
    })
    .join("");
  refs.practiceButtons = Array.from(refs.practicePicker.querySelectorAll("[data-practice-sign]"));
  updatePracticeHint();
}

function renderSignLibrary() {
  const filtered = signs.filter((sign) => {
    const matchesCategory = state.libraryFilter === "All" || sign.category === state.libraryFilter;
    const matchesQuery =
      !state.libraryQuery ||
      sign.name.toLowerCase().includes(state.libraryQuery) ||
      sign.shape.toLowerCase().includes(state.libraryQuery) ||
      sign.response.toLowerCase().includes(state.libraryQuery) ||
      sign.category.toLowerCase().includes(state.libraryQuery);
    return matchesCategory && matchesQuery;
  });

  if (!filtered.length) {
    refs.signLibrary.innerHTML = `
      <p class="empty-custom">No matching signs found. Clear the filter or search to see all ${signs.length} signs.</p>
    `;
    return;
  }

  refs.signLibrary.innerHTML = filtered
    .map(
      (sign) => `
        <article class="sign-card${sign.detectable ? " detectable" : ""}">
          <span class="card-meta">${escapeHtml(sign.category)}</span>
          <h3>${escapeHtml(sign.name)}</h3>
          <span class="hand-shape">${escapeHtml(sign.shape)}</span>
          <p>${escapeHtml(sign.tip)}</p>
          <p class="response-line"><strong>Response:</strong> ${escapeHtml(sign.response)}</p>
          <div class="card-footer">
            <span class="library-badge${sign.detectable ? " detectable" : ""}">
              ${sign.detectable ? "Detectable now" : "Library response"}
            </span>
            <button
              class="practice-link-btn"
              type="button"
              data-practice-jump="${escapeHtml(sign.name)}"
            >
              Practice
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCustomControls() {
  refs.detectedShapeSelect.innerHTML = detectableSigns
    .map(
      (sign) => `
        <option value="${escapeHtml(sign.name)}">
          ${escapeHtml(sign.name)} - ${escapeHtml(sign.shape)}
        </option>
      `
    )
    .join("");
  renderCustomResponses();
}

function renderCustomResponses() {
  if (!state.customResponses.length) {
    refs.customSignList.innerHTML = `
      <p class="empty-custom">No personal responses yet. Save one to make a detected hand shape speak your own words.</p>
    `;
    return;
  }

  refs.customSignList.innerHTML = state.customResponses
    .map((item) => {
      const source = findSign(item.sourceSign);
      const shape = source ? source.shape : item.sourceSign;
      return `
        <article class="custom-card">
          <span class="hand-shape">Detected: ${escapeHtml(shape)}</span>
          <strong>${escapeHtml(item.name)}</strong>
          <p>${escapeHtml(item.response)}</p>
          <button class="remove-custom" type="button" data-remove-custom="${escapeHtml(item.sourceSign)}">
            Remove
          </button>
        </article>
      `;
    })
    .join("");
}

function saveCustomResponse(event) {
  event.preventDefault();
  const sourceSign = refs.detectedShapeSelect.value;
  const name = refs.customSignName.value.trim();
  const response = refs.customSignResponse.value.trim();

  if (!name || !response) {
    refs.customSignStatus.textContent = "Add both a sign name and a response.";
    return;
  }

  const nextItem = {
    sourceSign,
    name,
    response,
    updatedAt: new Date().toISOString()
  };

  state.customResponses = state.customResponses
    .filter((item) => item.sourceSign !== sourceSign)
    .concat(nextItem);
  persistCustomResponses();
  refs.customSignForm.reset();
  refs.customSignStatus.textContent = `Saved. When ${sourceSign} is detected, SignSpeak AI will say: ${response}`;
  renderCustomResponses();

  if (state.currentBaseSign === sourceSign) {
    updateDetectedSign({ label: sourceSign, confidence: 0.85 });
  }
}

function removeCustomResponse(sourceSign) {
  state.customResponses = state.customResponses.filter((item) => item.sourceSign !== sourceSign);
  persistCustomResponses();
  renderCustomResponses();
  refs.customSignStatus.textContent = "Personal response removed.";

  if (state.currentBaseSign === sourceSign) {
    updateDetectedSign({ label: sourceSign, confidence: 0.85 });
  }
}

function loadCustomResponses() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CUSTOM_RESPONSES_KEY) || "[]");
    return Array.isArray(parsed)
      ? parsed.filter((item) => item.sourceSign && item.name && item.response)
      : [];
  } catch (error) {
    console.warn("Could not load custom responses", error);
    return [];
  }
}

function persistCustomResponses() {
  localStorage.setItem(CUSTOM_RESPONSES_KEY, JSON.stringify(state.customResponses));
}

async function registerPublicSign(event) {
  event.preventDefault();
  const sign = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: refs.publicSignName.value.trim(),
    category: refs.publicSignCategory.value,
    meaning: refs.publicSignMeaning.value.trim(),
    description: refs.publicSignDescription.value.trim(),
    contributor: refs.publicNameInput.value.trim() || "Anonymous",
    email: refs.publicEmailInput.value.trim() || "Not provided",
    createdAt: new Date().toISOString()
  };

  if (!sign.name || !sign.meaning || !sign.description) {
    refs.publicSignStatus.textContent =
      "Please add the sign name, meaning, and how to show the sign.";
    return;
  }

  state.communitySigns = [sign, ...state.communitySigns].slice(0, 12);
  persistCommunitySigns();
  renderCommunitySigns();

  await sendEmailSubmission({
    form: refs.publicSignForm,
    submitButton: refs.publicSubmitBtn,
    statusEl: refs.publicSignStatus,
    subject: `New sign registration: ${sign.name}`,
    fields: {
      name: sign.contributor,
      email: sign.email,
      sign_name: sign.name,
      category: sign.category,
      meaning: sign.meaning,
      how_to_show: sign.description
    },
    fallbackBody: formatPublicSignEmail(sign),
    successMessage: `Saved locally and automatically sent to ${CONTACT_NAME} (${FEEDBACK_EMAIL}).`
  });
}

async function sendEmailSubmission({
  form,
  submitButton,
  statusEl,
  subject,
  fields,
  fallbackBody,
  successMessage
}) {
  const originalLabel = submitButton ? submitButton.textContent : "";
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  }
  statusEl.textContent = `Sending automatically to ${FEEDBACK_EMAIL}...`;

  const payload = {
    ...fields,
    _subject: subject,
    _template: "table",
    _captcha: "false"
  };
  if (fields.email && fields.email !== "Not provided") {
    payload._replyto = fields.email;
  }

  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));
    if (response.ok && (data.success === true || data.success === "true")) {
      form.reset();
      const extraNote =
        data.message && data.message.toLowerCase().includes("activate")
          ? ` (${data.message})`
          : "";
      statusEl.textContent = `${successMessage}${extraNote}`;
      return;
    }

    throw new Error(data.message || `HTTP ${response.status}`);
  } catch (error) {
    console.warn("Auto-email request fell back to mail draft:", error);
    openMailDraft(subject, fallbackBody);
    form.reset();
    statusEl.textContent = `Direct send unavailable right now; opened an email draft to ${FEEDBACK_EMAIL}.`;
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  }
}

function loadCommunitySigns() {
  try {
    const parsed = JSON.parse(localStorage.getItem(COMMUNITY_SIGNS_KEY) || "[]");
    return Array.isArray(parsed)
      ? parsed.filter((item) => item.name && item.meaning && item.description)
      : [];
  } catch (error) {
    console.warn("Could not load community sign ideas", error);
    return [];
  }
}

function persistCommunitySigns() {
  localStorage.setItem(COMMUNITY_SIGNS_KEY, JSON.stringify(state.communitySigns));
}

function renderCommunitySigns() {
  if (!state.communitySigns.length) {
    refs.communitySignList.innerHTML = `
      <p class="empty-custom">No public sign ideas registered on this device yet.</p>
    `;
    return;
  }

  refs.communitySignList.innerHTML = state.communitySigns
    .map(
      (sign) => `
        <article class="community-card">
          <span class="card-meta">${escapeHtml(sign.category)}</span>
          <h4>${escapeHtml(sign.name)}</h4>
          <p><strong>Response:</strong> ${escapeHtml(sign.meaning)}</p>
          <p><strong>How to show:</strong> ${escapeHtml(sign.description)}</p>
          <p><strong>By:</strong> ${escapeHtml(sign.contributor)}</p>
        </article>
      `
    )
    .join("");
}

function formatPublicSignEmail(sign) {
  return [
    "New public sign registration for SignSpeak AI",
    "",
    `Sign name: ${sign.name}`,
    `Category: ${sign.category}`,
    `Meaning / response: ${sign.meaning}`,
    "",
    "How to show the sign:",
    sign.description,
    "",
    `Submitted by: ${sign.contributor}`,
    `Email: ${sign.email}`,
    `Submitted at: ${new Date(sign.createdAt).toLocaleString()}`
  ].join("\n");
}

function openMailDraft(subject, body) {
  const href = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const link = document.createElement("a");
  link.href = href;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function prepareHandModel() {
  if (!window.Hands) {
    setModelStatus("Model unavailable", "error");
    state.lastError =
      "Hand-tracking script could not load. Check your internet connection, then refresh.";
    return;
  }

  try {
    refs.modelStatus.textContent = "Loading hand model";
    const detector = new window.Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    detector.setOptions({
      maxNumHands: 2,
      modelComplexity: 0,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6
    });

    detector.onResults(handleHandResults);
    if (typeof detector.initialize === "function") {
      await detector.initialize();
    }
    state.detector = detector;
    state.detectorReady = true;
    setModelStatus("Model ready", "ready");
  } catch (error) {
    console.error(error);
    setModelStatus("Model error", "error");
    state.lastError =
      "Hand tracking could not start. The camera preview can still work, but signs cannot be detected.";
  }
}

function setModelStatus(text, mode) {
  refs.modelStatus.textContent = text;
  refs.modelStatus.classList.toggle("ready", mode === "ready");
  refs.modelStatus.classList.toggle("error", mode === "error");
}

async function startCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setCameraStatus("This browser does not support camera access.", true);
    return;
  }

  refs.startCamera.disabled = true;
  refs.stopCamera.disabled = true;
  setCameraStatus("Requesting camera permission...", false);

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: "user",
        width: { ideal: 640 },
        height: { ideal: 480 },
        frameRate: { ideal: 30, max: 30 }
      }
    });

    state.stream = stream;
    state.cameraActive = true;
    state.lastVideoTime = -1;
    state.motionHistories = {};
    state.recentSigns = [];
    state.nullFrames = 0;
    state.lastRenderedKey = "";
    refs.cameraPreview.srcObject = stream;
    await refs.cameraPreview.play();

    refs.cameraPreview.classList.add("is-active");
    refs.cameraEmptyState.classList.add("is-hidden");
    refs.stopCamera.disabled = false;
    setCameraStatus("Camera is on. Show a sign with one or both hands.", false);
    setTrackingStatus("Watching", "ready");
    updateDetectedSign(null);
    startDetectionLoop();
  } catch (error) {
    if (isCameraPermissionError(error)) {
      console.warn("Camera permission was not granted.");
    } else {
      console.error(error);
    }
    refs.startCamera.disabled = false;
    refs.stopCamera.disabled = true;
    handleCameraError(error);
  }
}

function isCameraPermissionError(error) {
  const name = error && error.name ? error.name : "";
  return name === "NotAllowedError" || name === "PermissionDeniedError";
}

function handleCameraError(error) {
  const name = error && error.name ? error.name : "";
  if (name === "NotAllowedError" || name === "PermissionDeniedError") {
    setCameraStatus(
      "Camera permission was denied. Allow camera access in your browser settings and try again.",
      true
    );
    return;
  }

  if (name === "NotFoundError" || name === "DevicesNotFoundError") {
    setCameraStatus("No camera was found on this device.", true);
    return;
  }

  if (name === "NotReadableError") {
    setCameraStatus("The camera is already in use by another app or tab.", true);
    return;
  }

  setCameraStatus("Camera could not start. Please refresh and try again.", true);
}

function stopCamera() {
  if (state.frameRequest) {
    cancelAnimationFrame(state.frameRequest);
    state.frameRequest = null;
  }

  if (
    state.videoFrameRequest !== null &&
    typeof refs.cameraPreview.cancelVideoFrameCallback === "function"
  ) {
    refs.cameraPreview.cancelVideoFrameCallback(state.videoFrameRequest);
    state.videoFrameRequest = null;
  }

  if (state.stream) {
    state.stream.getTracks().forEach((track) => track.stop());
    state.stream = null;
  }

  state.cameraActive = false;
  state.processingFrame = false;
  state.lastVideoTime = -1;
  state.motionHistories = {};
  state.recentSigns = [];
  state.nullFrames = 0;
  state.lastRenderedKey = "";
  refs.cameraPreview.pause();
  refs.cameraPreview.srcObject = null;
  refs.cameraPreview.classList.remove("is-active");
  refs.cameraEmptyState.classList.remove("is-hidden");
  refs.startCamera.disabled = false;
  refs.stopCamera.disabled = true;
  clearCanvas();
  updateDetectedSign(null);
  setTrackingStatus("Waiting", "soft");
  setCameraStatus("Camera is off.", false);
}

function setCameraStatus(message, isError) {
  refs.cameraStatus.textContent = message;
  refs.cameraStatus.style.color = isError ? "var(--error)" : "var(--muted)";
}

function setTrackingStatus(text, mode) {
  refs.trackingStatus.textContent = text;
  refs.trackingStatus.classList.toggle("ready", mode === "ready");
  refs.trackingStatus.classList.toggle("error", mode === "error");
  refs.trackingStatus.classList.toggle("soft", mode === "soft");
}

function startDetectionLoop() {
  const video = refs.cameraPreview;
  const useVideoFrameCallback = typeof video.requestVideoFrameCallback === "function";

  const processIfReady = async () => {
    if (!state.cameraActive) {
      return;
    }

    if (state.detectorReady && state.detector && video.readyState >= 2) {
      if (video.currentTime !== state.lastVideoTime && !state.processingFrame) {
        state.lastVideoTime = video.currentTime;
        await sendVideoFrame();
      }
    } else if (state.lastError) {
      setTrackingStatus("Model unavailable", "error");
      refs.confidenceText.textContent = state.lastError;
    }

    scheduleNextFrame();
  };

  const scheduleNextFrame = () => {
    if (!state.cameraActive) {
      return;
    }
    if (useVideoFrameCallback) {
      state.videoFrameRequest = video.requestVideoFrameCallback(() => {
        processIfReady();
      });
    } else {
      state.frameRequest = requestAnimationFrame(processIfReady);
    }
  };

  scheduleNextFrame();
}

async function sendVideoFrame() {
  if (state.processingFrame) {
    return;
  }

  state.processingFrame = true;
  try {
    await state.detector.send({ image: refs.cameraPreview });
  } catch (error) {
    console.error(error);
    setTrackingStatus("Tracking paused", "error");
    refs.confidenceText.textContent = "Hand tracking paused. Stop and restart the camera.";
  } finally {
    state.processingFrame = false;
  }
}

function getCanvasCtx() {
  if (!state.canvasCtx) {
    state.canvasCtx = refs.landmarkCanvas.getContext("2d");
  }
  return state.canvasCtx;
}

function handleHandResults(results) {
  resizeCanvas();
  const ctx = getCanvasCtx();
  ctx.clearRect(0, 0, refs.landmarkCanvas.width, refs.landmarkCanvas.height);

  const allHands = results.multiHandLandmarks || [];
  if (!allHands.length) {
    state.motionHistories = {};
    const sign = smoothSign(null);
    updateDetectedSign(sign);
    return;
  }

  const handedness = results.multiHandedness || [];
  const activeKeys = new Set();

  for (let i = 0; i < allHands.length; i += 1) {
    const slotKey = `hand-${i}`;
    activeKeys.add(slotKey);
    drawLandmarkOverlay(ctx, allHands[i], i);
  }

  for (const key of Object.keys(state.motionHistories)) {
    if (!activeKeys.has(key)) {
      delete state.motionHistories[key];
    }
  }

  const rawSign = classifyHands(allHands, handedness);
  const sign = smoothSign(rawSign);
  updateDetectedSign(sign);
}

function resizeCanvas() {
  const video = refs.cameraPreview;
  const canvas = refs.landmarkCanvas;
  const width = video.videoWidth || canvas.clientWidth || 640;
  const height = video.videoHeight || canvas.clientHeight || 480;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function drawLandmarkOverlay(ctx, landmarks, handIndex = 0) {
  const connectorColor = handIndex === 0 ? "#4ed3c7" : "#f4cc64";
  const dotColor = handIndex === 0 ? "#ff8a7f" : "#4ed3c7";

  if (window.drawConnectors && window.drawLandmarks && window.HAND_CONNECTIONS) {
    window.drawConnectors(ctx, landmarks, window.HAND_CONNECTIONS, {
      color: connectorColor,
      lineWidth: 3
    });
    window.drawLandmarks(ctx, landmarks, {
      color: dotColor,
      lineWidth: 1.5,
      radius: 3.5
    });
    return;
  }

  ctx.fillStyle = connectorColor;
  for (let i = 0; i < landmarks.length; i += 1) {
    const point = landmarks[i];
    ctx.beginPath();
    ctx.arc(point.x * ctx.canvas.width, point.y * ctx.canvas.height, 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function recordMotionPoint(handKey, wrist, palm) {
  const now = performance.now();
  if (!state.motionHistories[handKey]) {
    state.motionHistories[handKey] = [];
  }
  const history = state.motionHistories[handKey];
  history.push({ x: wrist.x, y: wrist.y, palm, t: now });
  while (history.length > 16 || (history.length && now - history[0].t > 650)) {
    history.shift();
  }
  return history;
}

function analyzeMotion(history) {
  if (history.length < 6) {
    return { isCircling: false, isShaking: false, isWavingFast: false };
  }

  const span = history[history.length - 1].t - history[0].t;
  if (span < 200) {
    return { isCircling: false, isShaking: false, isWavingFast: false };
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let sumX = 0;
  let sumY = 0;
  let sumPalm = 0;

  for (let i = 0; i < history.length; i += 1) {
    const p = history[i];
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
    sumX += p.x;
    sumY += p.y;
    sumPalm += p.palm;
  }

  const avgPalm = Math.max(sumPalm / history.length, 0.04);
  const dxRange = (maxX - minX) / avgPalm;
  const dyRange = (maxY - minY) / avgPalm;

  let reversals = 0;
  let lastDir = 0;
  for (let i = 1; i < history.length; i += 1) {
    const dx = history[i].x - history[i - 1].x;
    if (Math.abs(dx) < avgPalm * 0.05) {
      continue;
    }
    const dir = dx > 0 ? 1 : -1;
    if (lastDir !== 0 && dir !== lastDir) {
      reversals += 1;
    }
    lastDir = dir;
  }

  const isShaking = span >= 230 && dxRange > 0.32 && reversals >= 2;

  let isCircling = false;
  if (history.length >= 8 && span >= 260 && dxRange > 0.26 && dyRange > 0.26) {
    const cx = sumX / history.length;
    const cy = sumY / history.length;
    let crossSum = 0;
    for (let i = 0; i < history.length - 1; i += 1) {
      const ax = history[i].x - cx;
      const ay = history[i].y - cy;
      const bx = history[i + 1].x - cx;
      const by = history[i + 1].y - cy;
      crossSum += ax * by - ay * bx;
    }
    isCircling = Math.abs(crossSum) / (avgPalm * avgPalm) > 0.25;
  }

  const isWavingFast =
    !isCircling && dxRange > Math.max(0.72, dyRange * 1.45) && reversals >= 2;

  return { isCircling, isShaking, isWavingFast };
}

function analyzeHandFeatures(landmarks, handKey = "hand-0") {
  const wrist = landmarks[0];
  const palm = Math.max(dist2D(wrist, landmarks[9]), 0.04);
  const history = recordMotionPoint(handKey, wrist, palm);
  const motion = analyzeMotion(history);

  const extended = {
    thumb: isThumbExtended(landmarks, palm),
    index: isFingerExtended(landmarks, 8, 6, 5),
    middle: isFingerExtended(landmarks, 12, 10, 9),
    ring: isFingerExtended(landmarks, 16, 14, 13),
    pinky: isFingerExtended(landmarks, 20, 18, 17)
  };

  const fingersUp = [extended.index, extended.middle, extended.ring, extended.pinky].filter(Boolean).length;

  const palmVecX = landmarks[9].x - wrist.x;
  const palmVecY = landmarks[9].y - wrist.y;
  const pointingDown = palmVecY > Math.abs(palmVecX) * 0.85;
  const pointingSideways = Math.abs(palmVecX) > Math.abs(palmVecY) * 1.1;

  const thumbIndexGap = dist2D(landmarks[4], landmarks[8]) / palm;
  const thumbMiddleGap = dist2D(landmarks[4], landmarks[12]) / palm;
  const thumbRingGap = dist2D(landmarks[4], landmarks[16]) / palm;
  const thumbPinkyGap = dist2D(landmarks[4], landmarks[20]) / palm;

  const indexMiddleGap = dist2D(landmarks[8], landmarks[12]) / palm;
  const middleRingGap = dist2D(landmarks[12], landmarks[16]) / palm;
  const ringPinkyGap = dist2D(landmarks[16], landmarks[20]) / palm;
  const avg4Gap = (indexMiddleGap + middleRingGap + ringPinkyGap) / 3;

  const thumbRaisedUp =
    dist2D(landmarks[4], landmarks[5]) > palm * 0.45 &&
    landmarks[4].y < landmarks[2].y - palm * 0.3 &&
    landmarks[4].y < landmarks[5].y - palm * 0.12;
  const thumbPointingDown =
    dist2D(landmarks[4], landmarks[5]) > palm * 0.45 &&
    landmarks[4].y > landmarks[2].y + palm * 0.3 &&
    landmarks[4].y > landmarks[5].y + palm * 0.12;
  const thumbTuckedBetween =
    dist2D(landmarks[4], landmarks[6]) / palm < 0.28 &&
    dist2D(landmarks[4], landmarks[10]) / palm < 0.35 &&
    landmarks[4].y < landmarks[6].y + palm * 0.08;

  const tipsOutFromPalm =
    dist2D(landmarks[8], wrist) > dist2D(landmarks[5], wrist) * 0.92 &&
    dist2D(landmarks[12], wrist) > dist2D(landmarks[9], wrist) * 0.92;
  const allFingertipsNearThumb =
    tipsOutFromPalm &&
    [thumbIndexGap, thumbMiddleGap, thumbRingGap, thumbPinkyGap].filter((gap) => gap < 0.6).length >= 3 &&
    indexMiddleGap < 0.48;

  const avgTipToWrist =
    (dist2D(landmarks[8], wrist) +
      dist2D(landmarks[12], wrist) +
      dist2D(landmarks[16], wrist) +
      dist2D(landmarks[20], wrist)) /
    (4 * palm);
  const isCurvedC =
    fingersUp === 0 &&
    !allFingertipsNearThumb &&
    avgTipToWrist > 1.08 &&
    thumbIndexGap > 0.44 &&
    thumbIndexGap < 1.45 &&
    indexMiddleGap < 0.55;

  return {
    landmarks,
    wrist,
    palm,
    motion,
    extended,
    fingersUp,
    pointingDown,
    pointingSideways,
    thumbIndexGap,
    thumbMiddleGap,
    indexMiddleGap,
    avg4Gap,
    thumbRaisedUp,
    thumbPointingDown,
    thumbTuckedBetween,
    allFingertipsNearThumb,
    isCurvedC
  };
}

function classifyFromFeatures(f) {
  const {
    landmarks,
    motion,
    extended,
    fingersUp,
    pointingDown,
    pointingSideways,
    thumbIndexGap,
    thumbMiddleGap,
    indexMiddleGap,
    avg4Gap,
    thumbRaisedUp,
    thumbPointingDown,
    thumbTuckedBetween,
    allFingertipsNearThumb,
    isCurvedC
  } = f;

  // 1. Urgent / motion signs
  if (fingersUp >= 4 && (motion.isWavingFast || landmarks[12].y < 0.09)) {
    return { label: "Emergency", confidence: 0.89 };
  }

  if (fingersUp >= 4 && motion.isCircling) {
    return { label: "Please", confidence: 0.86 };
  }

  if (fingersUp === 0 && !thumbRaisedUp && !thumbPointingDown) {
    if (motion.isCircling) {
      return { label: "Sorry", confidence: 0.86 };
    }
    if (motion.isShaking || thumbTuckedBetween) {
      return { label: "Bathroom", confidence: 0.85 };
    }
  }

  // 2. Specific pinch / contact signs
  if (!extended.index && thumbIndexGap < 0.48 && extended.middle && extended.ring) {
    return { label: "Family", confidence: 0.87 };
  }

  if (
    extended.index &&
    !extended.middle &&
    (extended.ring || extended.pinky) &&
    ((extended.ring && extended.pinky) ||
      (thumbMiddleGap < 0.44 && dist2D(landmarks[12], wrist) > dist2D(landmarks[9], wrist) * 0.92))
  ) {
    return { label: "Medicine", confidence: 0.84 };
  }

  if (allFingertipsNearThumb && fingersUp <= 2) {
    if (pointingSideways) {
      return { label: "More", confidence: 0.85 };
    }
    return { label: "Food", confidence: 0.86 };
  }

  // 3. Distinct multi-finger handshapes
  if (extended.index && !extended.middle && !extended.ring && extended.pinky) {
    return { label: "I Love You", confidence: 0.9 };
  }

  if (!extended.index && !extended.middle && !extended.ring && extended.pinky) {
    if (extended.thumb) {
      return { label: "Phone", confidence: 0.88 };
    }
    return { label: "Sleep", confidence: 0.85 };
  }

  if (extended.index && extended.middle && extended.ring && !extended.pinky) {
    if (pointingSideways) {
      return { label: "Hot", confidence: 0.84 };
    }
    return { label: "Water", confidence: 0.87 };
  }

  if (extended.index && extended.middle && !extended.ring && !extended.pinky) {
    if (pointingDown) {
      return { label: "Tired", confidence: 0.85 };
    }
    if (extended.thumb) {
      if (pointingSideways) {
        return { label: "Wait", confidence: 0.85 };
      }
      return { label: "Doctor", confidence: 0.86 };
    }
    if (indexMiddleGap >= 0.28) {
      return { label: "Happy", confidence: 0.88 };
    }
    if (pointingSideways) {
      return { label: "Name", confidence: 0.85 };
    }
    return { label: "No", confidence: 0.85 };
  }

  if (extended.index && !extended.middle && !extended.ring && !extended.pinky) {
    if (pointingDown) {
      return { label: "Sad", confidence: 0.86 };
    }
    if (extended.thumb) {
      return { label: "Home", confidence: 0.88 };
    }
    return { label: "Pain", confidence: 0.87 };
  }

  // 4. Open / flat 4-5 finger shapes
  if (fingersUp >= 4) {
    if (pointingDown) {
      return { label: "Bad", confidence: 0.85 };
    }
    if (pointingSideways) {
      if (avg4Gap >= 0.28) {
        return { label: "Finished", confidence: 0.85 };
      }
      return { label: "Good", confidence: 0.85 };
    }
    if (extended.thumb) {
      if (avg4Gap >= 0.28) {
        return { label: "Hello", confidence: 0.9 };
      }
      return { label: "Stop", confidence: 0.87 };
    }
    if (avg4Gap >= 0.28) {
      return { label: "Cold", confidence: 0.85 };
    }
    return { label: "Thank You", confidence: 0.85 };
  }

  // 5. Fist / thumb / curved C shapes
  if (fingersUp === 0) {
    if (thumbRaisedUp) {
      return { label: "Help", confidence: 0.88 };
    }
    if (thumbPointingDown) {
      return { label: "Bad", confidence: 0.88 };
    }
    if (isCurvedC) {
      if (pointingSideways) {
        return { label: "Hungry", confidence: 0.83 };
      }
      return { label: "Again", confidence: 0.84 };
    }
    return { label: "Yes", confidence: 0.85 };
  }

  return null;
}

function classifySign(landmarks, handKey = "hand-0") {
  const features = analyzeHandFeatures(landmarks, handKey);
  const res = classifyFromFeatures(features);
  return res ? { ...res, handCount: 1 } : null;
}

function classifyTwoHandSign(fA, fB, sA, sB) {
  const avgPalm = Math.max((fA.palm + fB.palm) / 2, 0.04);
  const a = fA.landmarks;
  const b = fB.landmarks;

  // Two-hand Emergency: both hands raised high or waving
  if (
    fA.fingersUp >= 4 &&
    fB.fingersUp >= 4 &&
    (fA.motion.isWavingFast || fB.motion.isWavingFast || (a[12].y < 0.14 && b[12].y < 0.14))
  ) {
    return { label: "Emergency", confidence: 0.94, handCount: 2 };
  }

  // Two-hand More: both hands pinched with fingertips touching / close together
  if (fA.allFingertipsNearThumb && fB.allFingertipsNearThumb && dist2D(a[8], b[8]) < avgPalm * 0.95) {
    return { label: "More", confidence: 0.93, handCount: 2 };
  }

  // Two-hand Help: thumbs-up resting on/above flat palm
  if (
    (sA?.label === "Help" && fB.fingersUp >= 4 && dist2D(fA.wrist, b[9]) < avgPalm * 1.65) ||
    (sB?.label === "Help" && fA.fingersUp >= 4 && dist2D(fB.wrist, a[9]) < avgPalm * 1.65)
  ) {
    return { label: "Help", confidence: 0.93, handCount: 2 };
  }

  // Two-hand Doctor: index/middle fingers touching the other hand's wrist
  if (
    (fA.extended.index && !fA.extended.ring && !fA.extended.pinky && dist2D(a[8], b[0]) < avgPalm * 0.78) ||
    (fB.extended.index && !fB.extended.ring && !fB.extended.pinky && dist2D(b[8], a[0]) < avgPalm * 0.78)
  ) {
    return { label: "Doctor", confidence: 0.92, handCount: 2 };
  }

  // Two-hand Medicine: middle finger touching the other hand's palm center
  if (
    (fB.fingersUp >= 4 && dist2D(a[12], b[9]) < avgPalm * 0.58) ||
    (fA.fingersUp >= 4 && dist2D(b[12], a[9]) < avgPalm * 0.58)
  ) {
    return { label: "Medicine", confidence: 0.91, handCount: 2 };
  }

  // Two-hand Again: curved C hand touching/pointing into the other flat palm
  if (
    (fA.isCurvedC && fB.fingersUp >= 4 && dist2D(a[8], b[9]) < avgPalm * 0.9) ||
    (fB.isCurvedC && fA.fingersUp >= 4 && dist2D(b[8], a[9]) < avgPalm * 0.9)
  ) {
    return { label: "Again", confidence: 0.91, handCount: 2 };
  }

  // Two-hand Family: both hands in F / OK shape
  if (sA?.label === "Family" && sB?.label === "Family") {
    return { label: "Family", confidence: 0.94, handCount: 2 };
  }

  // Two-hand Finished: both hands open spread turned outward/sideways
  if (
    fA.fingersUp >= 4 &&
    fB.fingersUp >= 4 &&
    fA.avg4Gap >= 0.31 &&
    fB.avg4Gap >= 0.31 &&
    (fA.pointingSideways || fB.pointingSideways)
  ) {
    return { label: "Finished", confidence: 0.92, handCount: 2 };
  }

  return null;
}

function classifyHands(allHands, handedness = []) {
  if (allHands.length === 1) {
    return classifySign(allHands[0], "hand-0");
  }

  const f0 = analyzeHandFeatures(allHands[0], "hand-0");
  const f1 = analyzeHandFeatures(allHands[1], "hand-1");
  const s0 = classifyFromFeatures(f0);
  const s1 = classifyFromFeatures(f1);

  const twoHand = classifyTwoHandSign(f0, f1, s0, s1);
  if (twoHand) {
    return twoHand;
  }

  if (s0 && s1) {
    if (s0.label === s1.label) {
      return {
        label: s0.label,
        confidence: Math.min(0.95, Math.max(s0.confidence, s1.confidence) + 0.04),
        handCount: 2
      };
    }
    // If one hand is just resting as a closed fist ("Yes") while the other signs actively, prefer the active sign
    if (s0.label === "Yes" && s1.label !== "Yes") {
      return { ...s1, handCount: 2 };
    }
    if (s1.label === "Yes" && s0.label !== "Yes") {
      return { ...s0, handCount: 2 };
    }
    return s0.confidence >= s1.confidence
      ? { ...s0, handCount: 2 }
      : { ...s1, handCount: 2 };
  }

  if (s0) {
    return { ...s0, handCount: 2 };
  }
  if (s1) {
    return { ...s1, handCount: 2 };
  }
  return null;
}

function isFingerExtended(landmarks, tipIndex, pipIndex, mcpIndex) {
  const wrist = landmarks[0];
  const tip = landmarks[tipIndex];
  const pip = landmarks[pipIndex];
  const mcp = landmarks[mcpIndex];

  const tipWrist = dist2D(tip, wrist);
  const pipWrist = dist2D(pip, wrist);
  const tipMcp = dist2D(tip, mcp);
  const pipMcp = dist2D(pip, mcp);

  const v1x = pip.x - mcp.x;
  const v1y = pip.y - mcp.y;
  const v2x = tip.x - pip.x;
  const v2y = tip.y - pip.y;
  const len1 = Math.hypot(v1x, v1y) || 0.0001;
  const len2 = Math.hypot(v2x, v2y) || 0.0001;
  const cosPip = (v1x * v2x + v1y * v2y) / (len1 * len2);

  return tipWrist > pipWrist * 1.02 && tipMcp > pipMcp * 1.06 && cosPip > 0.38;
}

function isThumbExtended(landmarks, palm) {
  const thumbTip = landmarks[4];
  const thumbIp = landmarks[3];
  const thumbMcp = landmarks[2];
  const indexBase = landmarks[5];
  const pinkyBase = landmarks[17];

  const palmWidth = Math.max(dist2D(indexBase, pinkyBase), 0.04);
  const spreadFromIndex = dist2D(thumbTip, indexBase) / palmWidth;
  const spreadFromPinky = dist2D(thumbTip, pinkyBase) / palmWidth;
  const thumbLength = dist2D(thumbTip, thumbMcp) / palm;

  const v1x = thumbIp.x - thumbMcp.x;
  const v1y = thumbIp.y - thumbMcp.y;
  const v2x = thumbTip.x - thumbIp.x;
  const v2y = thumbTip.y - thumbIp.y;
  const len1 = Math.hypot(v1x, v1y) || 0.0001;
  const len2 = Math.hypot(v2x, v2y) || 0.0001;
  const cosThumb = (v1x * v2x + v1y * v2y) / (len1 * len2);

  return thumbLength > 0.36 && spreadFromIndex > 0.48 && spreadFromPinky > 0.78 && cosThumb > 0.32;
}

function dist2D(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function smoothSign(sign) {
  if (!sign) {
    state.nullFrames += 1;
    if (state.nullFrames >= 3) {
      state.recentSigns = [];
      return null;
    }
    return state.currentBaseSign
      ? { label: state.currentBaseSign, confidence: 0.78, handCount: 1 }
      : null;
  }

  state.nullFrames = 0;
  state.recentSigns.push(sign.label);
  if (state.recentSigns.length > 4) {
    state.recentSigns.shift();
  }

  const counts = {};
  for (let i = 0; i < state.recentSigns.length; i += 1) {
    const label = state.recentSigns[i];
    counts[label] = (counts[label] || 0) + 1;
  }

  let bestLabel = sign.label;
  let bestCount = 0;
  for (const [label, count] of Object.entries(counts)) {
    if (count > bestCount) {
      bestLabel = label;
      bestCount = count;
    }
  }

  if (bestCount >= 2) {
    return bestLabel === sign.label
      ? sign
      : { label: bestLabel, confidence: 0.8, handCount: sign.handCount || 1 };
  }

  return state.currentBaseSign
    ? { label: state.currentBaseSign, confidence: 0.78, handCount: sign.handCount || 1 }
    : sign;
}

function updateDetectedSign(sign) {
  const baseLabel = sign ? sign.label : null;
  const confidencePct = sign ? Math.round(sign.confidence * 100) : 0;
  const handCount = sign && sign.handCount ? sign.handCount : 0;
  const message = baseLabel ? getResponseForSign(baseLabel) : null;
  const nextSignName = message ? message.name : null;
  const nextResponse = message ? message.response : null;
  const renderKey = `${baseLabel || ""}|${nextSignName || ""}|${nextResponse || ""}|${confidencePct}|${handCount}|${state.cameraActive}`;

  if (renderKey === state.lastRenderedKey) {
    return;
  }
  state.lastRenderedKey = renderKey;

  state.currentBaseSign = baseLabel;
  state.currentSign = nextSignName;
  state.currentResponse = nextResponse;
  refs.detectedText.textContent = state.currentSign || WAITING_TEXT;
  refs.responseText.textContent = state.currentResponse || WAITING_RESPONSE;
  refs.sourceShapeText.textContent = message
    ? `Detected hand shape: ${message.shape}${handCount === 2 ? " (2 hands)" : ""}`
    : "Hand shape will appear here.";
  refs.speakButton.disabled = !state.currentResponse || !canSpeak();

  if (!sign) {
    refs.confidenceText.textContent = state.cameraActive
      ? "Keep one or both hands centered and hold a clear sign."
      : "Confidence will appear here.";
    setTrackingStatus("Waiting", "soft");
    updatePracticeResult(null);
    return;
  }

  refs.confidenceText.textContent = `Estimated confidence: ${confidencePct}%${handCount === 2 ? " · Both hands tracked" : ""}`;
  setTrackingStatus("Detected", "ready");
  updatePracticeResult(state.currentBaseSign);

  if (refs.autoSpeak.checked) {
    speakText(state.currentResponse, true);
  }
}

function getResponseForSign(baseSign) {
  const custom = state.customResponses.find((item) => item.sourceSign === baseSign);
  const sign = findSign(baseSign);

  if (custom) {
    return {
      name: custom.name,
      response: custom.response,
      shape: sign ? sign.shape : baseSign
    };
  }

  if (sign) {
    return sign;
  }

  return {
    name: baseSign,
    response: baseSign,
    shape: baseSign
  };
}

function findSign(name) {
  return signs.find((sign) => sign.name === name);
}

function updatePracticeResult(detectedSign) {
  refs.practiceCard.classList.remove("correct", "try-again");

  if (refs.practiceLiveDetected) {
    if (!state.cameraActive) {
      refs.practiceLiveDetected.textContent = "Live camera: Off (supports all 33 signs with 1 or 2 hands)";
    } else if (detectedSign) {
      const liveMsg = getResponseForSign(detectedSign);
      refs.practiceLiveDetected.textContent = `Live camera sees: ${liveMsg.name} — "${liveMsg.response}"`;
    } else {
      refs.practiceLiveDetected.textContent = "Live camera: Waiting for any of the 33 signs...";
    }
  }

  if (!state.cameraActive) {
    refs.practiceResult.textContent = `Start the camera and show ${state.selectedPractice}.`;
    return;
  }

  if (!detectedSign) {
    refs.practiceResult.textContent = `Show ${state.selectedPractice}.`;
    return;
  }

  if (detectedSign === state.selectedPractice) {
    refs.practiceCard.classList.add("correct");
    refs.practiceResult.textContent = "Correct!";
    markSignPracticed(detectedSign);
    if (refs.autoAdvancePractice && refs.autoAdvancePractice.checked && !state.autoAdvanceTimer) {
      state.autoAdvanceTimer = setTimeout(() => {
        state.autoAdvanceTimer = null;
        nextPracticeSign();
      }, 900);
    }
    return;
  }

  refs.practiceCard.classList.add("try-again");
  refs.practiceResult.textContent = `Showing ${detectedSign} live — keep trying for ${state.selectedPractice}.`;
}

function canSpeak() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function speakText(text, fromAutoSpeak = false) {
  if (!text || !canSpeak()) {
    refs.confidenceText.textContent = "Speech is not supported in this browser.";
    return;
  }

  const now = Date.now();
  if (fromAutoSpeak && text === state.lastSpokenText && now - state.lastSpokenAt < 3500) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  state.lastSpokenText = text;
  state.lastSpokenAt = now;
}

function clearCanvas() {
  const canvas = refs.landmarkCanvas;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
