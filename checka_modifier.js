console.log("FOLKPUNKT JS Loaded");

(function () {
    console.log("folkpunkt_cdn function started");

    function modifyElements() {
        let modified = false;

        // 1. Remove the "Continue to shop" button
        const continueShopBtn = document.querySelector('button[aria-label="Continue to shop"]');
        if (continueShopBtn) {
            continueShopBtn.remove();
            modified = true;
        }

        // 2. Change button text to 'Start order on FOLKPUNKT'
        const orderButton = document.querySelector('button[aria-label="Order on behalf of co-worker"] .btn__label');
        if (orderButton) {
            orderButton.textContent = 'Start order on FOLKPUNKT';
            modified = true;
        }

        // 3. Change welcome message
        const welcomeHeading = document.querySelector('.checka-order_welcome_text_wrapper h1');
        if (welcomeHeading) {
            welcomeHeading.textContent = 'Welcome to Checka on FOLKPUNKT';
            welcomeHeading.setAttribute('aria-label', 'Welcome to Checka on FOLKPUNKT');
            welcomeHeading.setAttribute('title', 'Welcome to Checka on FOLKPUNKT');
            modified = true;
        }

        // 4. Change start instructions
        const startInstructions = document.querySelector('h1.text--heading-s[aria-label^="Get started"]');
        if (startInstructions) {
            startInstructions.textContent = 'Get started by clicking start order.';
            startInstructions.setAttribute('aria-label', 'Get started by clicking start order.');
            startInstructions.setAttribute('title', 'Get started by clicking start order.');
            modified = true;
        }

        // 5. Remove tabs container
        const tabsContainer = document.querySelector('.cwds-tabs__container.cwds-header__tabs');
        if (tabsContainer) {
            tabsContainer.remove();
            modified = true;
        }

        // 6. Remove user avatar button
        const userAvatarBtn = document.querySelector('.avatar__sr-text');
        if (userAvatarBtn && userAvatarBtn.textContent.trim() === 'Max Taylor') {
            const parentBtn = userAvatarBtn.closest('button');
            if (parentBtn) {
                parentBtn.remove();
                modified = true;
            }
        }

        if (modified) console.log("FOLKPUNKT: Modifications applied.");
    }

    // Run once immediately
    modifyElements();

    // Observe DOM changes and re-apply modifications as needed
    const observer = new MutationObserver(() => {
        modifyElements();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

})();
