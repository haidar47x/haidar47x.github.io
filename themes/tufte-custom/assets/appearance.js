document.querySelector(".appearance button").addEventListener("click", () => {
    const htmlElem = document.documentElement;
    const style = "filter: invert(1) contrast(0.95) brightness(0.55) saturate(1) sepia(0.35);"
    if (htmlElem.style.cssText.includes(style)) {
        htmlElem.style.cssText = htmlElem.style.cssText.replace(style, "");
    } else {
        htmlElem.style.cssText += style;
    }
});