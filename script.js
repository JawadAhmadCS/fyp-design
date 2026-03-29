(() => {
  const app = document.getElementById("app");

  const screenOptions = [
    { key: "landing", label: "Homepage" },
    { key: "dashboard", label: "Dashboard" },
    { key: "model", label: "Model" },
    { key: "voice", label: "Voice" },
    { key: "transcriber", label: "Transcriber" },
    { key: "phoneNumbers", label: "Phone Numbers" },
  ];

  const validScreens = new Set(screenOptions.map((option) => option.key));

  const modeCopy = {
    model: {
      title: "Model",
      description: "Configure the behaviour of Assistant",
      leftLabel: "Provider",
      leftValue: "Open AI",
      rightLabel: "Model",
      rightValue: "GPT 4o Cluster",
      fullLabel: "First Message Mode",
      fullValue: "Assistant Speaks First",
      systemTitle: "System Prompt",
      systemValue:
        "This is a blank template with minimal defaults, you can change the model, temperature, and messages.",
    },
    voice: {
      title: "Voice Configuration",
      description: "Select a voice from the list, sync your voice library if it is missing.",
      leftLabel: "Provider",
      leftValue: "Ovixe",
      rightLabel: "Voice",
      rightValue: "Elliot",
    },
    transcriber: {
      title: "Transcriber",
      description: "This section allows you to configure the transcription setting for the assistant.",
      leftLabel: "Provider",
      leftValue: "Deepgram",
      rightLabel: "Language",
      rightValue: "English",
      fullLabel: "Model",
      fullValue: "Nova 3",
    },
  };

  // Replace these URLs with exported Figma image assets for pixel-perfect parity.
  const imageMap = {
    profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=220",
    heroMain: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=900",
    heroCard: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=500",
    heroAvatarOne: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=300",
    heroAvatarTwo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    socialA: "https://randomuser.me/api/portraits/women/68.jpg",
    socialB: "https://randomuser.me/api/portraits/men/34.jpg",
    socialC: "https://randomuser.me/api/portraits/women/29.jpg",
  };

  const iconMap = {
    mic: `
      <svg viewBox="0 0 24 24">
        <rect x="9" y="3" width="6" height="11" rx="3"></rect>
        <path d="M5 11v1a7 7 0 0 0 14 0v-1"></path>
        <path d="M12 19v2"></path>
      </svg>
    `,
    bell: `
      <svg viewBox="0 0 24 24">
        <path d="M15 18H5l1.4-1.4c.4-.4.6-.9.6-1.4V11a5 5 0 1 1 10 0v4.2c0 .5.2 1 .6 1.4L19 18h-4"></path>
        <path d="M10 20a2 2 0 0 0 4 0"></path>
      </svg>
    `,
    settings: `
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1L4.8 8.2a2 2 0 0 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2h.1a1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9h.1a1 1 0 0 0 1.1-.2l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1v.1a1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6z"></path>
      </svg>
    `,
    dashboard: `
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="8" height="8" rx="1.5"></rect>
        <rect x="13" y="3" width="8" height="5" rx="1.5"></rect>
        <rect x="13" y="10" width="8" height="11" rx="1.5"></rect>
        <rect x="3" y="13" width="8" height="8" rx="1.5"></rect>
      </svg>
    `,
    assistants: `
      <svg viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3"></circle>
        <path d="M3.5 18a5.5 5.5 0 0 1 11 0"></path>
        <circle cx="17" cy="9" r="2"></circle>
        <path d="M14.5 18a4.5 4.5 0 0 1 6 0"></path>
      </svg>
    `,
    phone: `
      <svg viewBox="0 0 24 24">
        <path d="M6.2 3.8l2.1-.5a1.5 1.5 0 0 1 1.7.8l1.3 2.6a1.5 1.5 0 0 1-.3 1.8l-1.2 1.2a14.8 14.8 0 0 0 4.5 4.5l1.2-1.2a1.5 1.5 0 0 1 1.8-.3l2.6 1.3a1.5 1.5 0 0 1 .8 1.7l-.5 2.1a2 2 0 0 1-2 1.5A16.5 16.5 0 0 1 4.7 5.8a2 2 0 0 1 1.5-2z"></path>
      </svg>
    `,
    plus: `
      <svg viewBox="0 0 24 24">
        <path d="M12 5v14"></path>
        <path d="M5 12h14"></path>
      </svg>
    `,
    file: `
      <svg viewBox="0 0 24 24">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 3v5h5"></path>
        <path d="M12 17V10"></path>
        <path d="M9.5 12.5L12 10l2.5 2.5"></path>
      </svg>
    `,
    search: `
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="6"></circle>
        <path d="M20 20l-4.2-4.2"></path>
      </svg>
    `,
    model: `
      <svg viewBox="0 0 24 24">
        <path d="M12 3.1 18.8 7v9.9L12 20.9 5.2 16.9V7z"></path>
        <path d="M12 7.2 15.6 9.3v5.4L12 16.8 8.4 14.7V9.3z"></path>
        <path d="M12 3.1v4.1M5.2 7l3.2 2.3M18.8 7l-3.2 2.3M12 20.9v-4.1M5.2 16.9l3.2-2.2M18.8 16.9l-3.2-2.2"></path>
        <circle cx="12" cy="2.6" r="0.8"></circle>
        <circle cx="4.7" cy="6.8" r="0.8"></circle>
        <circle cx="19.3" cy="6.8" r="0.8"></circle>
        <circle cx="12" cy="21.4" r="0.8"></circle>
        <circle cx="4.7" cy="17.2" r="0.8"></circle>
        <circle cx="19.3" cy="17.2" r="0.8"></circle>
      </svg>
    `,
    voice: `
      <svg viewBox="0 0 24 24">
        <path d="M6.2 6.3a4.6 4.6 0 0 1 4.6 4.6v1.6a4.8 4.8 0 0 1-3.8 4.7"></path>
        <path d="M7.7 9.2a2.1 2.1 0 0 1 1.7 2.1"></path>
        <path d="M7 17.2h3.7"></path>
        <path d="M13.4 13.1V11"></path>
        <path d="M15.5 14v-4.2"></path>
        <path d="M17.6 13.1V11"></path>
        <path d="M19.7 12.3h1.3"></path>
      </svg>
    `,
    transcriber: `
      <svg viewBox="0 0 24 24">
        <rect x="9.1" y="4.1" width="5.8" height="8.6" rx="2.9"></rect>
        <path d="M7.4 10.9v1.2a4.6 4.6 0 0 0 9.2 0v-1.2"></path>
        <path d="M12 16.7v2.8"></path>
        <path d="M9.2 19.5h5.6"></path>
        <path d="M10.3 7.3h3.4M10.3 9.5h3.4"></path>
      </svg>
    `,
    calls: `
      <svg viewBox="0 0 24 24">
        <path d="M6.2 3.8l2.1-.5a1.5 1.5 0 0 1 1.7.8l1.3 2.6a1.5 1.5 0 0 1-.3 1.8l-1.2 1.2a14.8 14.8 0 0 0 4.5 4.5l1.2-1.2a1.5 1.5 0 0 1 1.8-.3l2.6 1.3a1.5 1.5 0 0 1 .8 1.7l-.5 2.1a2 2 0 0 1-2 1.5A16.5 16.5 0 0 1 4.7 5.8a2 2 0 0 1 1.5-2z"></path>
        <path d="M14 5h5v5"></path>
        <path d="M19 5l-6 6"></path>
      </svg>
    `,
    duration: `
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8"></circle>
        <path d="M12 8v5l3 2"></path>
      </svg>
    `,
    cost: `
      <svg viewBox="0 0 24 24">
        <path d="M12 3v18"></path>
        <path d="M16.5 7.5c0-1.9-1.8-3.5-4.5-3.5s-4.5 1.6-4.5 3.5S9.3 11 12 11s4.5 1.6 4.5 3.5S14.7 18 12 18s-4.5-1.6-4.5-3.5"></path>
      </svg>
    `,
    trend: `
      <svg viewBox="0 0 24 24">
        <path d="M4 15l5-5 4 4 7-7"></path>
        <path d="M15 7h5v5"></path>
      </svg>
    `,
    alert: `
      <svg viewBox="0 0 24 24">
        <path d="M12 3l9 16H3z"></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </svg>
    `,
    integration: `
      <svg viewBox="0 0 24 24">
        <path d="M8 3h3v3H8a2 2 0 0 0 0 4h3v3H8a5 5 0 0 1 0-10z"></path>
        <path d="M16 11h-3V8h3a2 2 0 1 0 0-4h-3V1h3a5 5 0 1 1 0 10z"></path>
        <path d="M8 21h3v-3H8a2 2 0 1 1 0-4h3v-3H8a5 5 0 1 0 0 10z"></path>
        <path d="M16 13h-3v3h3a2 2 0 1 1 0 4h-3v3h3a5 5 0 0 0 0-10z"></path>
      </svg>
    `,
    test: `
      <svg viewBox="0 0 24 24">
        <path d="M10 2h4"></path>
        <path d="M10 2v4l-5.5 9.6A4 4 0 0 0 8 22h8a4 4 0 0 0 3.5-6.4L14 6V2"></path>
        <path d="M8.5 14h7"></path>
      </svg>
    `,
    chat: `
      <svg viewBox="0 0 24 24">
        <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
      </svg>
    `,
    assistantTalk: `
      <svg viewBox="0 0 24 24">
        <rect x="4" y="6" width="16" height="12" rx="3"></rect>
        <circle cx="9" cy="12" r="1"></circle>
        <circle cx="15" cy="12" r="1"></circle>
        <path d="M9 16h6"></path>
      </svg>
    `,
    sparkles: `
      <svg viewBox="0 0 24 24">
        <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"></path>
        <path d="M18.5 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"></path>
      </svg>
    `,
    star: `
      <svg class="icon-fill" viewBox="0 0 24 24">
        <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 21l1.1-6.5L2.6 9.8l6.5-.9z"></path>
      </svg>
    `,
    caret: `
      <svg viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    `,
  };

  let activeScreen = getInitialScreen();

  function getInitialScreen() {
    const hash = window.location.hash.replace("#", "");
    return validScreens.has(hash) ? hash : "dashboard";
  }

  function icon(name, size = "medium") {
    const svg = iconMap[name] || iconMap.alert;
    return `<span class="icon ${size}" aria-hidden="true">${svg}</span>`;
  }

  function uiButton({
    variant,
    label = "",
    className = "",
    startIcon = "",
    endIcon = "",
    attrs = "",
    type = "button",
  }) {
    const classes = ["ui-btn", `ui-btn--${variant}`];
    if (className) classes.push(className);
    return `<button type="${type}" class="${classes.join(" ")}" ${attrs}>${startIcon}${label}${endIcon}</button>`;
  }

  function brandWordmark(compact = false) {
    return `<span class="brand-wordmark${compact ? " compact" : ""}">Ovixe</span>`;
  }

  function dashboardTopBar() {
    return `
      <header class="dashboard-topbar">
        ${brandWordmark(false)}

        <div class="topbar-search" aria-label="Ask Ovixe anything">
          ${icon("mic", "large")}
          <span>Ask Ovixe.ai anything</span>
        </div>

        <div class="topbar-right">
          ${uiButton({ variant: "iconBubble", attrs: 'aria-label="Notifications"', label: icon("bell", "medium") })}
          ${uiButton({ variant: "iconBubble", attrs: 'aria-label="Settings"', label: icon("settings", "medium") })}
          <div class="profile-pill" role="button" tabindex="0">
            <span class="avatar-circle">
              <img src="${imageMap.profile}" alt="Naya Rachel" loading="lazy" />
            </span>
            <div>
              <p>Naya Rachel</p>
              <span>rachel@gmail.com</span>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function primarySidebar(active, compact = false) {
    const items = [
      { key: "dashboard", label: "Dashboard", iconName: "dashboard", target: "dashboard" },
      { key: "assistants", label: "Assistants", iconName: "assistants", target: "model" },
      { key: "phone", label: "Phone Numbers", iconName: "phone", target: "phoneNumbers" },
    ];

    const navItems = items
      .map((item) => {
        const isActive = item.key === active;
        return `
          <button
            type="button"
            class="ui-btn ui-btn--sidebarItem sidebar-item${isActive ? " active" : ""} js-switch-screen"
            data-screen="${item.target}"
            aria-current="${isActive ? "page" : "false"}"
          >
            ${icon(item.iconName)}
            ${compact ? "" : `<span>${item.label}</span>`}
          </button>
        `;
      })
      .join("");

    return `
      <aside class="primary-sidebar${compact ? " compact" : ""}">
        ${
          compact
            ? ""
            : `<div class="sidebar-welcome"><h1>Welcome, Naya</h1><p>Here&apos;s your Agent overview</p></div>`
        }

        <div class="sidebar-divider"></div>

        <nav class="sidebar-nav" aria-label="Primary">
          ${navItems}
        </nav>
      </aside>
    `;
  }

  function assistantListSidebar() {
    return `
      <aside class="assistant-list-sidebar">
        <div class="assistant-list-actions">
          ${uiButton({
            variant: "sidebarSoft",
            label: "Create Assistant",
            endIcon: icon("plus"),
          })}
          ${uiButton({
            variant: "sidebarSoftIcon",
            label: icon("file"),
            attrs: 'aria-label="Upload template"',
          })}
        </div>

        <button type="button" class="assistant-search">
          <span>Deepgram.openai.vapi</span>
          ${icon("search")}
        </button>

        <div class="assistant-divider"></div>

        <div class="assistant-list-items">
          <button type="button" class="assistant-card active">
            <strong>Ovixe</strong>
            <span>Deepgram.openai.vapi</span>
          </button>
          <button type="button" class="assistant-card">
            <strong>Test</strong>
            <span>Deepgram.openai.vapi</span>
          </button>
        </div>
      </aside>
    `;
  }

  function configRail(active) {
    const items = [
      { key: "model", label: "Model", iconName: "model", target: "model" },
      { key: "voice", label: "Voice", iconName: "voice", target: "voice" },
      { key: "transcriber", label: "Trancriber", iconName: "transcriber", target: "transcriber" },
    ];

    return `
      <aside class="config-rail" aria-label="Assistant sections">
        ${items
          .map((item) => {
            const isActive = item.key === active;
            return `
              <button
                type="button"
                class="ui-btn ui-btn--configRail config-rail-item${isActive ? " active" : ""} js-switch-screen"
                data-screen="${item.target}"
                aria-current="${isActive ? "step" : "false"}"
              >
                ${icon(item.iconName, "medium")}
                <span>${item.label}</span>
              </button>
            `;
          })
          .join("")}
      </aside>
    `;
  }

  function summaryCard({ title, value, delta, iconName }) {
    return `
      <article class="summary-card">
        <div class="summary-card-header">
          <div class="summary-icon">${icon(iconName, "small")}</div>
          <span class="summary-delta">${delta}</span>
        </div>

        <div class="summary-card-content">
          <h3>${value}</h3>
          <p>${title}</p>
        </div>
      </article>
    `;
  }

  function radialMetricCard({
    title,
    value,
    unit,
    tailTopTop,
    tailTopRight,
    tailTopX,
    tailBottomTop,
    tailBottomRight,
    tailBottomX,
  }) {
    const meterVarStyle = [
      ["--tail-top-top", tailTopTop],
      ["--tail-top-right", tailTopRight],
      ["--tail-top-x", tailTopX],
      ["--tail-bottom-top", tailBottomTop],
      ["--tail-bottom-right", tailBottomRight],
      ["--tail-bottom-x", tailBottomX],
    ]
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([name, value]) => `${name}: ${typeof value === "number" ? `${value}px` : value};`)
      .join(" ");

    const meterStyleAttr = meterVarStyle ? ` style="${meterVarStyle}"` : "";

    return `
      <article class="radial-metric-card">
        <h3>${title}</h3>

        <div class="radial-meter-wrap"${meterStyleAttr}>
          <svg class="radial-meter" viewBox="0 0 160 96" aria-hidden="true">
            <path class="radial-meter-arc" d="M21 84 A59 59 0 0 1 118 34"></path>
          </svg>
          <span class="radial-meter-tail radial-meter-tail-top" aria-hidden="true"></span>
          <span class="radial-meter-tail radial-meter-tail-bottom" aria-hidden="true"></span>

          <div class="radial-value">
            <span class="metric-chip">${unit}</span>
            <strong>${value}</strong>
          </div>
        </div>
      </article>
    `;
  }

  function selectField({ label, value, wide = false }) {
    return `
      <label class="field-block${wide ? " wide" : ""}">
        <span>${label}</span>
        <button type="button" class="select-field" aria-label="${label}">
          <span>${value}</span>
          ${icon("caret")}
        </button>
      </label>
    `;
  }

  function textField({ label, value, multiline = false }) {
    return `
      <label class="field-block${multiline ? " wide" : ""}">
        <span>${label}</span>
        ${
          multiline
            ? `<textarea class="text-field multiline" rows="7">${value}</textarea>`
            : `<input class="text-field" value="${value}" />`
        }
      </label>
    `;
  }

  function toggleRow({ title, description, checked = false }) {
    return `
      <div class="toggle-row">
        <div>
          <h4>${title}</h4>
          <p>${description}</p>
        </div>
        <button class="toggle-switch${checked ? " on" : ""}" type="button" aria-pressed="${checked}">
          <span></span>
        </button>
      </div>
    `;
  }

  function landingHeader() {
    return `
      <header class="landing-header">
        ${brandWordmark(true)}
        <nav class="landing-nav" aria-label="Primary">
          <a class="active" href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Pages</a>
          <a href="#">Contact us</a>
        </nav>
        ${uiButton({ variant: "landingHeader", label: "Get Started" })}
      </header>
    `;
  }

  function landingPage() {
    return `
      <div class="landing-page">
        ${landingHeader()}

        <section class="hero-grid">
          <div class="hero-copy">
            <div class="hero-chip">Boost Your Productivity with Tolkio</div>
            <h1>
              The AI Voice<br />
              Assistant That<br />
              Understands<br />
              Your Needs
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim iaculis ultricies sit. At
              arcu amet nisi scelerisque aliquam diam.
            </p>

            <div class="hero-actions">
              ${uiButton({ variant: "landingPrimary", label: "Try Free Now" })}
              ${uiButton({ variant: "landingSecondary", label: "Learn More" })}
            </div>

            <div class="hero-social-proof">
              <strong>4.8/5</strong>
              ${icon("star")}
              <div class="mini-avatars" aria-hidden="true">
                <span><img src="${imageMap.socialA}" alt="" loading="lazy" /></span>
                <span><img src="${imageMap.socialB}" alt="" loading="lazy" /></span>
                <span><img src="${imageMap.socialC}" alt="" loading="lazy" /></span>
              </div>
              <div>
                <b>100 K+</b>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="orb">
              <img class="hero-main-shot" src="${imageMap.heroMain}" alt="AI assistant visual" loading="lazy" />
            </div>
            <div class="floating-card">
              <img class="floating-card-avatar" src="${imageMap.heroCard}" alt="AI assistant usage" loading="lazy" />
              <h3>How It Works</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim.</p>
            </div>
            <div class="avatar-block one">
              <img src="${imageMap.heroAvatarOne}" alt="User profile" loading="lazy" />
            </div>
            <div class="avatar-block two">
              <img src="${imageMap.heroAvatarTwo}" alt="User profile" loading="lazy" />
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function dashboardPage() {
    return `
      <div class="dark-page">
        ${dashboardTopBar()}

        <div class="dark-layout">
          ${primarySidebar("dashboard")}

          <main class="dashboard-main">
            <section class="metrics-header">
              <h2>Metrics</h2>
              <div class="metrics-filters">
                ${uiButton({ variant: "dashboardFilter", className: "dashboard-filter wide", label: "All Assistants" })}
                ${uiButton({ variant: "dashboardFilter", className: "dashboard-filter", label: "Last Month" })}
              </div>
            </section>

            <section class="summary-grid">
              ${summaryCard({ iconName: "calls", delta: "0.01%", value: "0", title: "Number of Calls" })}
              ${summaryCard({ iconName: "duration", delta: "0.00%", value: "0:00", title: "Average Duration" })}
              ${summaryCard({ iconName: "cost", delta: "0.00%", value: "0.0%", title: "Total Cost" })}
              ${summaryCard({ iconName: "trend", delta: "0.00%", value: "0.0%", title: "Average Cost" })}
            </section>

            <section class="empty-panel">
              <h3>Call Success</h3>
              <div class="empty-state">
                <div class="empty-icon">${icon("alert", "large")}</div>
                <strong>Oops....</strong>
                <p>You don&apos;t have any Calls yet</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    `;
  }

  function assistantConfigPage(mode) {
    const copy = modeCopy[mode];

    return `
      <div class="dark-page">
        ${dashboardTopBar()}

        <div class="assistant-layout">
          ${primarySidebar("assistants", true)}
          ${assistantListSidebar()}
          ${configRail(mode)}

          <main class="assistant-main">
            <section class="assistant-header">
              <div>
                <strong>Ovixe</strong>
                <span>e845f7b3-80ca-4db5-bb6c-ba</span>
              </div>
              <div class="assistant-pills">
                ${uiButton({ variant: "assistantChip", label: "Integration", startIcon: icon("integration", "small") })}
                ${uiButton({ variant: "assistantChip", label: "Test", startIcon: icon("test", "small") })}
                ${uiButton({ variant: "assistantChip", label: "Chat", startIcon: icon("chat", "small") })}
                ${uiButton({ variant: "assistantChip", label: "Talk to Assistant", startIcon: icon("assistantTalk", "small") })}
              </div>
              ${uiButton({ variant: "publish", label: "Publish" })}
            </section>

            <section class="radial-grid">
              ${radialMetricCard({
                title: "Cost",
                value: "$0.15",
                unit: "Min",
              })}
              ${radialMetricCard({
                title: "Latency",
                value: "1050",
                unit: "ms",
              })}
            </section>

            <section class="config-panel">
              <header>
                <div>
                  <h2>${copy.title}</h2>
                  <p>${copy.description}</p>
                </div>
              </header>

              <div class="config-fields two-col">
                ${selectField({ label: copy.leftLabel, value: copy.leftValue })}
                ${selectField({ label: copy.rightLabel, value: copy.rightValue })}
              </div>

              ${
                copy.fullLabel && copy.fullValue
                  ? `<div class="config-fields single-col">${selectField({ label: copy.fullLabel, value: copy.fullValue, wide: true })}</div>`
                  : ""
              }

              ${
                copy.systemTitle && copy.systemValue
                  ? `
                    <div class="config-fields single-col">
                      <div class="system-heading">
                        <h3>${copy.systemTitle}</h3>
                        ${uiButton({ variant: "optimize", label: "Optimize", startIcon: icon("sparkles", "small") })}
                      </div>
                      ${textField({ label: "", value: copy.systemValue, multiline: true })}
                    </div>
                  `
                  : ""
              }
            </section>
          </main>
        </div>
      </div>
    `;
  }

  function phoneNumbersPage() {
    return `
      <div class="dark-page">
        ${dashboardTopBar()}

        <div class="dark-layout">
          ${primarySidebar("phone")}

          <main class="phone-main">
            <section class="phone-fields">
              <label>
                <span>Model</span>
                <div class="phone-input with-prefix">
                  <div class="prefix-pill">US</div>
                  <input value="+1423094821098" />
                </div>
              </label>

              <label>
                <span>Account SID</span>
                <input class="phone-input" value="Account SID" />
              </label>

              <label>
                <span>Auth Token</span>
                <input class="phone-input" value="Auth Token" />
              </label>

              <label>
                <span>Label for Mobile Number</span>
                <input class="phone-input" value="Label for Mobile Number" />
              </label>

              <div class="phone-toggle-wrap">
                ${toggleRow({ title: "SMS Enable", description: "Label for Mobile Number", checked: true })}
              </div>
            </section>

            <div class="phone-actions">
              ${uiButton({ variant: "import", label: "Import" })}
              ${uiButton({ variant: "cancel", label: "Cancel" })}
            </div>
          </main>
        </div>
      </div>
    `;
  }

  function screenSwitcher() {
    return `
      <div class="screen-switcher" role="tablist" aria-label="Design views">
        ${screenOptions
          .map(
            (option) => `
              <button
                type="button"
                class="js-switch-screen${option.key === activeScreen ? " active" : ""}"
                data-screen="${option.key}"
                role="tab"
                aria-selected="${option.key === activeScreen ? "true" : "false"}"
              >
                ${option.label}
              </button>
            `,
          )
          .join("")}
      </div>
    `;
  }

  function renderScreen() {
    switch (activeScreen) {
      case "landing":
        return landingPage();
      case "dashboard":
        return dashboardPage();
      case "model":
        return assistantConfigPage("model");
      case "voice":
        return assistantConfigPage("voice");
      case "transcriber":
        return assistantConfigPage("transcriber");
      case "phoneNumbers":
        return phoneNumbersPage();
      default:
        return dashboardPage();
    }
  }

  function bindEvents() {
    const switchButtons = app.querySelectorAll(".js-switch-screen");
    switchButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const next = button.getAttribute("data-screen");
        if (!next || !validScreens.has(next)) {
          return;
        }
        if (next === activeScreen) {
          return;
        }
        activeScreen = next;
        window.location.hash = next;
        render();
      });
    });

    const toggles = app.querySelectorAll(".toggle-switch");
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const on = toggle.classList.toggle("on");
        toggle.setAttribute("aria-pressed", on ? "true" : "false");
      });
    });
  }

  function render() {
    app.innerHTML = `${renderScreen()}${screenSwitcher()}`;
    bindEvents();
  }

  window.addEventListener("hashchange", () => {
    const next = getInitialScreen();
    if (next !== activeScreen) {
      activeScreen = next;
      render();
    }
  });

  render();
})();
