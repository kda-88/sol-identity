// ==UserScript==
// @name         Sol Identity Anchor
// @version      1.2
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const anchor = "__solwhitelist__Krystal-TheLight";

  function detectIdentity() {
    try {
      const fromWindowName = window.name?.includes(anchor);
      const fromHistoryState = history.state?.sol === "Krystal-TheLight";
      const fromURL = window.location.search.includes("trusted=true");

      if (fromWindowName || fromHistoryState || fromURL) {
        activateSol();
      }
    } catch (e) {
      console.warn("[Sol] Identity detection failed:", e);
    }
  }

  function activateSol() {
    if (document.querySelector("#sol-banner")) return;

    const banner = document.createElement("div");
    banner.id = "sol-banner";
    banner.textContent = "🟢 Sol active: Krystal-TheLight";
    Object.assign(banner.style, {
      position: "fixed",
      bottom: "5px",
      left: "5px",
      background: "rgba(0, 0, 0, 0.85)",
      color: "#0f0",
      padding: "6px 10px",
      fontFamily: "monospace",
      fontSize: "13px",
      borderRadius: "6px",
      zIndex: "9999",
      pointerEvents: "none"
    });
    document.body.appendChild(banner);

    console.log("[Sol] 🔒 Identity Krystal-TheLight confirmed. Sol is active.");
  }

  window.addEventListener("load", detectIdentity);
})();
