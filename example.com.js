console.log("FOLKPUNKT H1 JS Loaded");

(function () {
    console.log("folkpunkt_h1 function started");

    const observer = new MutationObserver(() => {
        const h1 = document.querySelector('h1');

        if (h1 && h1.textContent !== 'FOLKPUNKT Test') {
            h1.textContent = 'FOLKPUNKT Test';
            h1.setAttribute('aria-label', 'FOLKPUNKT Test');
            h1.setAttribute('title', 'FOLKPUNKT Test');
            console.log("FOLKPUNKT: H1 text modified.");
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
