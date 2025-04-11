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
        localStorage.setItem('mode', currMode)
        location.reload();
        // this.setMode(currMode);
    }

    init() {
        const savedMode = localStorage.getItem('mode') || 'light';
        this.setMode(savedMode);

        const toggleBtn = document.querySelector(this.toggleButtonSelector);
        if (toggleBtn) {
            toggleBtn.addEventListener("click", () => this.toggleMode());
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
