console.log("FOLKPUNKT JS Loaded");

(function() {
    console.log("folkpunkt_cdn function started");
    function runModifier() {
        console.log("runModifier called");

        // 1. Remove the "Continue to shop" button
        const continueShopBtn = document.querySelector('button.btn--emphasised[aria-label="Continue to shop"]');
        console.log("continueShopBtn", continueShopBtn);
        if (continueShopBtn) continueShopBtn.remove();

        // 2. Change button text to 'Start order on FOLKPUNKT'
        const orderButton = document.querySelector('button.btn--secondary[aria-label="Order on behalf of co-worker"] .btn__label');
        console.log("orderButton", orderButton);
        if (orderButton) orderButton.textContent = 'Start order on FOLKPUNKT';

        // 3. Change welcome message
        const welcomeHeading = document.querySelector('.checka-order_welcome_text_wrapper h1');
        console.log("welcomeHeading", welcomeHeading);
        if (welcomeHeading) {
            welcomeHeading.textContent = 'Welcome to Checka on FOLKPUNKT';
            welcomeHeading.setAttribute('aria-label', 'Welcome to Checka on FOLKPUNKT');
            welcomeHeading.setAttribute('title', 'Welcome to Checka on FOLKPUNKT');
        }

        // 4. Change start instructions
        const startInstructions = document.querySelector('h1.text--heading-s[aria-label^="Get started"]');
        console.log("startInstructions", startInstructions);
        if (startInstructions) {
            startInstructions.textContent = 'Get started by clicking start order.';
            startInstructions.setAttribute('aria-label', 'Get started by clicking start order.');
            startInstructions.setAttribute('title', 'Get started by clicking start order.');
        }

        // 5. Remove tabs container
        const tabsContainer = document.querySelector('.cwds-tabs__container.cwds-header__tabs');
        console.log("tabsContainer", tabsContainer);
        if (tabsContainer) tabsContainer.remove();

        // 6. Remove user avatar button
        const userAvatarBtn = document.querySelector('button.btn--small.btn--plain .avatar__sr-text');
        console.log("userAvatarBtn", userAvatarBtn);
        if (userAvatarBtn && userAvatarBtn.textContent.trim() === 'Max Taylor') {
            const parentBtn = userAvatarBtn.closest('button');
            console.log("parentBtn", parentBtn);
            if (parentBtn) parentBtn.remove();
        }
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runModifier);
    } else {
        runModifier();
    }
})();
