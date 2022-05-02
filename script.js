const btn = document.querySelector('button');
const body = document.body

function randomColorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor
}

const Id = setInterval(() => {
    let randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;

    btn.addEventListener('click', () => {
        btn.textContent = randomColor
        clearInterval(Id);
    })
}, 1000)