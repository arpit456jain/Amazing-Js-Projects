const btn = document.querySelector(`#btn`);
const h1 = document.querySelector( `h1`);
function randomColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const newcolor = `rgb(${r}, ${g}, ${b})`;
    return newcolor;
}

btn.addEventListener('click', function(){
    const newcolor = randomColor();
    document.body.style.backgroundColor = newcolor;
    h1.innerText = newcolor;
})