const lapse = 4000;
const pageLoader = document.getElementById('pageLoader');

addEventListener('DOMContentLoaded', () => {
    pageLoader.classList.add("hidden");
});

window.setInterval(function () {
    pageLoader.classList.add('display');
}, lapse);