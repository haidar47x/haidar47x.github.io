function toggleStyle() {
    let mode = localStorage.getItem('mode') || 'light';

    const htmlElem = document.documentElement;
    const style = "filter: invert(1) contrast(0.95) brightness(0.55) saturate(1) sepia(0.35);"
    if (mode === 'light') {
        htmlElem.style.cssText += style;
        localStorage.setItem('mode', 'dark');
    } else {
        htmlElem.style.cssText = htmlElem.style.cssText.replace(style, "");
        localStorage.setItem('mode', 'light');
    }
}

document.querySelector(".appearance button").addEventListener("click", () => {
    toggleStyle();
});

(function() {
    toggleStyle();
})();