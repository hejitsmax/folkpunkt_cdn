console.log("FOLKPUNKT JS Loaded");

(function () {
    console.log("folkpunkt_cdn function started");

    const observer = new MutationObserver(() => {
        const continueBtn = document.querySelector('button[aria-label="Continue to shop"]');
        const orderBtn = document.querySelector('button[aria-label="Order on behalf of co-worker"] .btn__label');
        const welcomeH1 = document.querySelector('.checka-order_welcome_text_wrapper h1');
        const startInstructions = document.querySelector('h1.text--heading-s[aria-label^="Get started"]');
        const tabsContainer = document.querySelector('.cwds-tabs__container.cwds-header__tabs');
        const avatarText = document.querySelector('.avatar__sr-text');
        const locationSelectWrappers = document.querySelectorAll('.label-wrapper--text-input.select--hint');
        
        let anyChange = false;

        if (continueBtn) {
            continueBtn.remove();
            anyChange = true;
        }

        if (orderBtn && orderBtn.textContent !== 'Start order on FOLKPUNKT') {
            orderBtn.textContent = 'Start order on FOLKPUNKT';
            anyChange = true;
        }

        if (welcomeH1 && welcomeH1.textContent !== 'Welcome to Checka on FOLKPUNKT') {
            welcomeH1.textContent = 'Welcome to Checka on FOLKPUNKT';
            welcomeH1.setAttribute('aria-label', welcomeH1.textContent);
            welcomeH1.setAttribute('title', welcomeH1.textContent);
            anyChange = true;
        }

        if (startInstructions && startInstructions.textContent !== 'Get started by clicking start order.') {
            startInstructions.textContent = 'Get started by clicking start order.';
            startInstructions.setAttribute('aria-label', startInstructions.textContent);
            startInstructions.setAttribute('title', startInstructions.textContent);
            anyChange = true;
        }

        if (tabsContainer) {
            tabsContainer.remove();
            anyChange = true;
        }

        if (avatarText?.textContent.trim() === 'sac flkpnkt') {
            const avatarBtn = avatarText.closest('button');
            if (avatarBtn) {
                avatarBtn.remove();
                anyChange = true;
            }
        }

 // Check each wrapper for a <select> with the correct ID
        locationSelectWrappers.forEach(wrapper => {
            const select = wrapper.querySelector('select#admin-locations');
            if (select) {
                wrapper.remove();
                anyChange = true;
            }
        });

        if (anyChange) {
            console.log("FOLKPUNKT: Modifications applied.");
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
