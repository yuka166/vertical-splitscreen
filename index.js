const text = document.querySelector('.text-wrap');
const white = document.querySelector('.white');

window.addEventListener('mousemove', (e) => {
    text.style.backgroundImage = `linear-gradient(to right, white ${e.pageX}px, black 0)`;
    white.style.width = `${e.pageX}px`;
});