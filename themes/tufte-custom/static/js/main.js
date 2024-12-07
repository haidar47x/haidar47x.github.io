class ThemeToggle {
    constructor(options) {
        this.htmlElem = document.documentElement;
        this.style = options.style || "filter: invert(1) contrast(0.9) brightness(0.75) saturate(1) sepia(0.35);";
        this.iconSelector = options.iconSelector || '.appearance img';
        this.toggleButtonSelector = options.toggleButtonSelector || '.appearance';
        this.lightIconSrc = options.lightIconSrc || "/img/sun.png";
        this.darkIconSrc = options.darkIconSrc || "/img/moon.png";

        this.init();
    }

    setMode(mode) {
        const iconElem = document.querySelector(this.iconSelector);

        if (mode === 'dark') {
            this.htmlElem.style.cssText += this.style;
            iconElem.classList.remove('light');
            iconElem.classList.add('dark');
            iconElem.src = this.darkIconSrc;
        } else {
            this.htmlElem.style.cssText = this.htmlElem.style.cssText.replace(this.style, "");
            iconElem.classList.remove('dark');
            iconElem.classList.add('light');
            iconElem.src = this.lightIconSrc;
        }

        localStorage.setItem('mode', mode);
    }

    toggleMode() {
        const currMode = localStorage.getItem('mode') === 'dark' ? 'light' : 'dark';
        this.setMode(currMode);
    }

    init() {
        const toggleBtn = document.querySelector(this.toggleButtonSelector);

        // Detect system's preferred color scheme
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

        // Determine initial mode
        const savedMode = localStorage.getItem('mode');
        if (savedMode) {
            this.setMode(savedMode);
        } else {
            const initialMode = prefersDarkMode.matches ? 'dark' : 'light';
            this.setMode(initialMode);
        }

        // Listen for system preference changes
        prefersDarkMode.addEventListener('change', (event) => {
            const systemMode = event.matches ? 'dark' : 'light';
            const savedMode = localStorage.getItem('mode');
            // Only apply system mode if no manual mode is set
            if (!savedMode) {
                this.setMode(systemMode);
            }
        });

        // Attach toggle button event listener
        if (toggleBtn) {
            toggleBtn.addEventListener("click", () => {
                localStorage.removeItem('mode'); // Clear manual override if toggled
                this.toggleMode();
            });
        }
    }
}

(function() {
    new ThemeToggle({
        style: "filter: invert(1) contrast(0.9) brightness(0.75) saturate(1) sepia(0.35);",
        iconSelector: '.appearance img',
        toggleButtonSelector: '.appearance',
        lightIconSrc: "/img/sun.png",
        darkIconSrc: "/img/moon.png"
    });
})();
