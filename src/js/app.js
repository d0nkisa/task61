import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    var hotPriceItems = document.querySelectorAll('.hot');
    hotPriceItems.forEach(hotItem => {
        hotItem.insertAdjacentHTML('afterbegin', '🔥');
    });
});