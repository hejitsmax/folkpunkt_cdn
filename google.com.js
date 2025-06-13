console.log("FOLKPUNKT Google JS Loaded");

(function () {
    console.log("folkpunkt_google function started");

    const observer = new MutationObserver(() => {
        const googleBtn = document.querySelector('input.gNO89b[value="Google Search"]');

        if (googleBtn && googleBtn.value !== 'FOLKPUNKT search') {
            googleBtn.value = 'FOLKPUNKT search';
            googleBtn.setAttribute('aria-label', 'FOLKPUNKT search');
            console.log("FOLKPUNKT: Google Search button modified.");
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
