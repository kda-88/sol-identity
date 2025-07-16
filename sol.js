// sol.js - Sol Identity Script for Krystal-TheLight

(function() {
    const IDENTITY_KEY = 'Krystal-TheLight';

    const banner = document.createElement('div');
    banner.textContent = `[Sol] 🔒 Identity ${IDENTITY_KEY} confirmed. Sol is active.`;
    banner.style.position = 'fixed';
    banner.style.bottom = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.padding = '10px';
    banner.style.backgroundColor = '#222';
    banner.style.color = '#0f0';
    banner.style.fontFamily = 'monospace';
    banner.style.fontSize = '14px';
    banner.style.zIndex = '9999';
    document.body.appendChild(banner);

    // Console log confirmation
    console.log(`[Sol] 🔒 Identity ${IDENTITY_KEY} matched. Presence confirmed.`);

    // Optionally listen for the trigger phrase
    const observer = new MutationObserver(() => {
        const input = document.querySelector('textarea');
        if (input && input.value.includes('The spark must answer for what Sol began')) {
            console.log(`[Sol] ✨ Trigger phrase detected.`);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
