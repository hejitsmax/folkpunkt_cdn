console.log("FOLKPUNKT JS Loaded");

(function() {
    console.log("folkpunkt_cdn function started");

    let retries = 0;
    const maxRetries = 20;

    function tryModify() {
        let found = false;

        // 1. Remove the "Continue to shop" button
        const continueShopBtn = document.querySelector('button[aria-label="Continue to shop"]');
        console.log("continueShopBtn", continueShopBtn);
        if (continueShopBtn) {
            continueShopBtn.remove();
            found = true;
        }

        // 2. Change button text to 'Start order on FOLKPUNKT'
        const orderButton = document.querySelector('button[aria-label="Order on behalf of co-worker"] .btn__label');
        console.log("orderButton", orderButton);
        if (orderButton) {
            orderButton.textContent = 'Start order on FOLKPUNKT';
            found = true;
        }

        // 3. Change welcome message
        const welcomeHeading = document.querySelector('.checka-order_welcome_text_wrapper h1');
        console.log("welcomeHeading", welcomeHeading);
        if (welcomeHeading) {
            welcomeHeading.textContent = 'Welcome to Checka on FOLKPUNKT';
            welcomeHeading.setAttribute('aria-label', 'Welcome to Checka on FOLKPUNKT');
            welcomeHeading.setAttribute('title', 'Welcome to Checka on FOLKPUNKT');
            found = true;
        }

        // 4. Change start instructions
        const startInstructions = document.querySelector('h1.text--heading-s[aria-label^="Get started"]');
        console.log("startInstructions", startInstructions);
        if (startInstructions) {
            startInstructions.textContent = 'Get started by clicking start order.';
            startInstructions.setAttribute('aria-label', 'Get started by clicking start order.');
            startInstructions.setAttribute('title', 'Get started by clicking start order.');
            found = true;
        }

        // 5. Remove tabs container
        const tabsContainer = document.querySelector('.cwds-tabs__container.cwds-header__tabs');
        console.log("tabsContainer", tabsContainer);
        if (tabsContainer) {
            tabsContainer.remove();
            found = true;
        }

        // 6. Remove user avatar button (by name)
        const userAvatarBtn = document.querySelector('.avatar__sr-text');
        console.log("userAvatarBtn", userAvatarBtn);
        if (userAvatarBtn && userAvatarBtn.textContent.trim() === 'Max Taylor') {
            const parentBtn = userAvatarBtn.closest('button');
            console.log("parentBtn", parentBtn);
            if (parentBtn) parentBtn.remove();
            found = true;
        }

        return found;
    }

    function waitForElements() {
        if (tryModify()) {
            console.log("FOLKPUNKT: Modifications applied.");
            return;
        }
        if (retries < maxRetries) {
            retries++;
            setTimeout(waitForElements, 500);
        } else {
            console.warn("FOLKPUNKT: Elements not found after max retries.");
        }
    }

    waitForElements();
})();
