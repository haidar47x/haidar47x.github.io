function toggleStyle(mode = null) {
    const htmlElem = document.documentElement;
    const style = "filter: invert(1) contrast(0.9) brightness(0.75) saturate(1) sepia(0.35);";

    if (mode === null) {
        mode = localStorage.getItem('mode') === 'dark' ? 'light' : 'dark';
    }

    if (mode === 'dark') {
        htmlElem.style.cssText += style;
        document.querySelector('.appearance img').classList.replace('light', 'dark');
        document.querySelector('.appearance img').src = "img/moon.png"
    } else {
        htmlElem.style.cssText = htmlElem.style.cssText.replace(style, "");
        document.querySelector('.appearance img').classList.replace('dark', 'light');
        document.querySelector('.appearance img').src = "img/sun.png"
    }

    localStorage.setItem('mode', mode);
}

document.querySelector(".appearance").addEventListener("click", () => {
    toggleStyle();
});

(function() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        toggleStyle(savedMode);
    }
})();
