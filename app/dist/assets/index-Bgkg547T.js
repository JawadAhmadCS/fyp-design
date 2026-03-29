(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))b(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&b(c)}).observe(document,{childList:!0,subtree:!0});function p(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function b(i){if(i.ep)return;i.ep=!0;const t=p(i);fetch(i.href,t)}})();(()=>{const u=document.getElementById("app"),o=[{key:"landing",label:"Homepage"},{key:"dashboard",label:"Dashboard"},{key:"model",label:"Model"},{key:"voice",label:"Voice"},{key:"transcriber",label:"Transcriber"},{key:"phoneNumbers",label:"Phone Numbers"}],p=new Set(o.map(e=>e.key)),b={model:{title:"Model",description:"Configure the behaviour of Assistant",leftLabel:"Provider",leftValue:"Open AI",rightLabel:"Model",rightValue:"GPT 4o Cluster",fullLabel:"First Message Mode",fullValue:"Assistant Speaks First",systemTitle:"System Prompt",systemValue:"This is a blank template with minimal defaults, you can change the model, temperature, and messages."},voice:{title:"Voice Configuration",description:"Select a voice from the list, sync your voice library if it is missing.",leftLabel:"Provider",leftValue:"Ovixe",rightLabel:"Voice",rightValue:"Elliot"},transcriber:{title:"Transcriber",description:"This section allows you to configure the transcription setting for the assistant.",leftLabel:"Provider",leftValue:"Deepgram",rightLabel:"Language",rightValue:"English",fullLabel:"Model",fullValue:"Nova 3"}},i={mic:"MIC",bell:"BEL",settings:"SET",dashboard:"DB",assistants:"AS",phone:"PH",plus:"+",file:"UP",search:"SR",model:"ML",voice:"VO",transcriber:"TR",calls:"CL",duration:"TM",cost:"$$",trend:"UP",alert:"!",integration:"IN",test:"TS",chat:"CH",assistantTalk:"TL",sparkles:"AI",star:"*",caret:"v"};let t=c();function c(){const e=window.location.hash.replace("#","");return p.has(e)?e:"dashboard"}function n(e,a="medium"){const s=i[e]||"-";return`<span class="icon ${a}" aria-hidden="true">${s}</span>`}function r({variant:e,label:a="",className:s="",startIcon:l="",endIcon:d="",attrs:h="",type:E="button"}){const N=["ui-btn",`ui-btn--${e}`];return s&&N.push(s),`<button type="${E}" class="${N.join(" ")}" ${h}>${l}${a}${d}</button>`}function w(e=!1){return`<span class="brand-wordmark${e?" compact":""}">Ovixe</span>`}function m(){return`
      <header class="dashboard-topbar">
        ${w(!1)}

        <div class="topbar-search" aria-label="Ask Ovixe anything">
          ${n("mic","large")}
          <span>Ask Ovixe.ai anything</span>
        </div>

        <div class="topbar-right">
          ${r({variant:"iconBubble",attrs:'aria-label="Notifications"',label:n("bell","medium")})}
          ${r({variant:"iconBubble",attrs:'aria-label="Settings"',label:n("settings","medium")})}
          <div class="profile-pill" role="button" tabindex="0">
            <span class="avatar-circle">NR</span>
            <div>
              <p>Naya Rachel</p>
              <span>rachel@gmail.com</span>
            </div>
          </div>
        </div>
      </header>
    `}function f(e,a=!1){const l=[{key:"dashboard",label:"Dashboard",iconName:"dashboard",target:"dashboard"},{key:"assistants",label:"Assistants",iconName:"assistants",target:"model"},{key:"phone",label:"Phone Numbers",iconName:"phone",target:"phoneNumbers"}].map(d=>{const h=d.key===e;return`
          <button
            type="button"
            class="ui-btn ui-btn--sidebarItem sidebar-item${h?" active":""} js-switch-screen"
            data-screen="${d.target}"
            aria-current="${h?"page":"false"}"
          >
            ${n(d.iconName)}
            ${a?"":`<span>${d.label}</span>`}
          </button>
        `}).join("");return`
      <aside class="primary-sidebar${a?" compact":""}">
        ${a?"":'<div class="sidebar-welcome"><h1>Welcome, Naya</h1><p>Here&apos;s your Agent overview</p></div>'}

        <div class="sidebar-divider"></div>

        <nav class="sidebar-nav" aria-label="Primary">
          ${l}
        </nav>
      </aside>
    `}function A(){return`
      <aside class="assistant-list-sidebar">
        <div class="assistant-list-actions">
          ${r({variant:"sidebarSoft",label:"Create Assistant",endIcon:n("plus")})}
          ${r({variant:"sidebarSoftIcon",label:n("file"),attrs:'aria-label="Upload template"'})}
        </div>

        <button type="button" class="assistant-search">
          <span>Deepgram.openai.vapi</span>
          ${n("search")}
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
    `}function S(e){return`
      <aside class="config-rail" aria-label="Assistant sections">
        ${[{key:"model",label:"Model",iconName:"model",target:"model"},{key:"voice",label:"Voice",iconName:"voice",target:"voice"},{key:"transcriber",label:"Transcriber",iconName:"transcriber",target:"transcriber"}].map(s=>{const l=s.key===e;return`
              <button
                type="button"
                class="ui-btn ui-btn--configRail config-rail-item${l?" active":""} js-switch-screen"
                data-screen="${s.target}"
                aria-current="${l?"step":"false"}"
              >
                ${n(s.iconName)}
                <span>${s.label}</span>
              </button>
            `}).join("")}
      </aside>
    `}function v({title:e,value:a,delta:s,iconName:l}){return`
      <article class="summary-card">
        <div class="summary-card-header">
          <div class="summary-icon">${n(l,"small")}</div>
          <span class="summary-delta">${s}</span>
        </div>

        <div class="summary-card-content">
          <h3>${a}</h3>
          <p>${e}</p>
        </div>
      </article>
    `}function k({title:e,value:a,unit:s}){return`
      <article class="radial-metric-card">
        <h3>${e}</h3>

        <div class="radial-meter-wrap">
          <div class="radial-meter" aria-hidden="true">
            <div class="radial-meter-hole"></div>
          </div>

          <div class="radial-value">
            <span class="metric-chip">${s}</span>
            <strong>${a}</strong>
          </div>
        </div>
      </article>
    `}function g({label:e,value:a,wide:s=!1}){return`
      <label class="field-block${s?" wide":""}">
        <span>${e}</span>
        <button type="button" class="select-field" aria-label="${e}">
          <span>${a}</span>
          ${n("caret")}
        </button>
      </label>
    `}function T({label:e,value:a,multiline:s=!1}){return`
      <label class="field-block${s?" wide":""}">
        <span>${e}</span>
        ${s?`<textarea class="text-field multiline" rows="7">${a}</textarea>`:`<input class="text-field" value="${a}" />`}
      </label>
    `}function C({title:e,description:a,checked:s=!1}){return`
      <div class="toggle-row">
        <div>
          <h4>${e}</h4>
          <p>${a}</p>
        </div>
        <button class="toggle-switch${s?" on":""}" type="button" aria-pressed="${s}">
          <span></span>
        </button>
      </div>
    `}function P(){return`
      <header class="landing-header">
        ${w(!0)}
        <nav class="landing-nav" aria-label="Primary">
          <a class="active" href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Pages</a>
          <a href="#">Contact us</a>
        </nav>
        ${r({variant:"landingHeader",label:"Get Started"})}
      </header>
    `}function M(){return`
      <div class="landing-page">
        ${P()}

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
              ${r({variant:"landingPrimary",label:"Try Free Now"})}
              ${r({variant:"landingSecondary",label:"Learn More"})}
            </div>

            <div class="hero-social-proof">
              <strong>4.8/5</strong>
              ${n("star")}
              <div class="mini-avatars" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                <b>100 K+</b>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="orb"></div>
            <div class="floating-card">
              <h3>How It Works</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim.</p>
            </div>
            <div class="avatar-block one"></div>
            <div class="avatar-block two"></div>
          </div>
        </section>
      </div>
    `}function L(){return`
      <div class="dark-page">
        ${m()}

        <div class="dark-layout">
          ${f("dashboard")}

          <main class="dashboard-main">
            <section class="metrics-header">
              <h2>Metrics</h2>
              <div class="metrics-filters">
                ${r({variant:"dashboardFilter",className:"dashboard-filter wide",label:"All Assistants"})}
                ${r({variant:"dashboardFilter",className:"dashboard-filter",label:"Last Month"})}
              </div>
            </section>

            <section class="summary-grid">
              ${v({iconName:"calls",delta:"0.01%",value:"0",title:"Number of Calls"})}
              ${v({iconName:"duration",delta:"0.00%",value:"0:00",title:"Average Duration"})}
              ${v({iconName:"cost",delta:"0.00%",value:"0.0%",title:"Total Cost"})}
              ${v({iconName:"trend",delta:"0.00%",value:"0.0%",title:"Average Cost"})}
            </section>

            <section class="empty-panel">
              <h3>Call Success</h3>
              <div class="empty-state">
                <div class="empty-icon">${n("alert","large")}</div>
                <strong>Oops....</strong>
                <p>You don&apos;t have any Calls yet</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    `}function $(e){const a=b[e];return`
      <div class="dark-page">
        ${m()}

        <div class="assistant-layout">
          ${f("assistants",!0)}
          ${A()}
          ${S(e)}

          <main class="assistant-main">
            <section class="assistant-header">
              <div>
                <strong>Ovixe</strong>
                <span>e845f7b3-80ca-4db5-bb6c-ba</span>
              </div>
              <div class="assistant-pills">
                ${r({variant:"assistantChip",label:"Integration",startIcon:n("integration","small")})}
                ${r({variant:"assistantChip",label:"Test",startIcon:n("test","small")})}
                ${r({variant:"assistantChip",label:"Chat",startIcon:n("chat","small")})}
                ${r({variant:"assistantChip",label:"Talk to Assistant",startIcon:n("assistantTalk","small")})}
              </div>
              ${r({variant:"publish",label:"Publish"})}
            </section>

            <section class="radial-grid">
              ${k({title:"Cost",value:"$0.15",unit:"Min"})}
              ${k({title:"Latency",value:"1050",unit:"ms"})}
            </section>

            <section class="config-panel">
              <header>
                <div>
                  <h2>${a.title}</h2>
                  <p>${a.description}</p>
                </div>
              </header>

              <div class="config-fields two-col">
                ${g({label:a.leftLabel,value:a.leftValue})}
                ${g({label:a.rightLabel,value:a.rightValue})}
              </div>

              ${a.fullLabel&&a.fullValue?`<div class="config-fields single-col">${g({label:a.fullLabel,value:a.fullValue,wide:!0})}</div>`:""}

              ${a.systemTitle&&a.systemValue?`
                    <div class="config-fields single-col">
                      <div class="system-heading">
                        <h3>${a.systemTitle}</h3>
                        ${r({variant:"optimize",label:"Optimize",startIcon:n("sparkles","small")})}
                      </div>
                      ${T({label:"",value:a.systemValue,multiline:!0})}
                    </div>
                  `:""}
            </section>
          </main>
        </div>
      </div>
    `}function I(){return`
      <div class="dark-page">
        ${m()}

        <div class="dark-layout">
          ${f("phone")}

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
                ${C({title:"SMS Enable",description:"Label for Mobile Number",checked:!0})}
              </div>
            </section>

            <div class="phone-actions">
              ${r({variant:"import",label:"Import"})}
              ${r({variant:"cancel",label:"Cancel"})}
            </div>
          </main>
        </div>
      </div>
    `}function V(){return`
      <div class="screen-switcher" role="tablist" aria-label="Design views">
        ${o.map(e=>`
              <button
                type="button"
                class="js-switch-screen${e.key===t?" active":""}"
                data-screen="${e.key}"
                role="tab"
                aria-selected="${e.key===t?"true":"false"}"
              >
                ${e.label}
              </button>
            `).join("")}
      </div>
    `}function O(){switch(t){case"landing":return M();case"dashboard":return L();case"model":return $("model");case"voice":return $("voice");case"transcriber":return $("transcriber");case"phoneNumbers":return I();default:return L()}}function x(){u.querySelectorAll(".js-switch-screen").forEach(s=>{s.addEventListener("click",()=>{const l=s.getAttribute("data-screen");!l||!p.has(l)||l!==t&&(t=l,window.location.hash=l,y())})}),u.querySelectorAll(".toggle-switch").forEach(s=>{s.addEventListener("click",()=>{const l=s.classList.toggle("on");s.setAttribute("aria-pressed",l?"true":"false")})})}function y(){u.innerHTML=`${O()}${V()}`,x()}window.addEventListener("hashchange",()=>{const e=c();e!==t&&(t=e,y())}),y()})();
