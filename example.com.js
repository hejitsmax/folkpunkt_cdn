console.log("FOLKPUNKT H1 override loaded");

(function () {
    function updateH1() {
        const h1 = document.querySelector('h1');
        if (h1 && h1.textContent !== 'FOLKPUNKT Test') {
            h1.textContent = 'FOLKPUNKT Test';
            h1.setAttribute('aria-label', 'FOLKPUNKT Test');
            h1.setAttribute('title', 'FOLKPUNKT Test');
            console.log("FOLKPUNKT: H1 text modified.");
            return true;
        }
        return false;
    }

    // Run once in case the element is already loaded
    if (!updateH1()) {
        // Use MutationObserver in case it loads in after
        const observer = new MutationObserver(() => {
            if (updateH1()) {
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();
