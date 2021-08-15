let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');
let result = document.querySelector('.result');
let sinBtn = document.querySelector('.sin')
let cosBtn = document.querySelector('.cos')
let tanBtn = document.querySelector('.tan')
let logBtn = document.querySelector('.log')
let powBtn = document.querySelector('.pow')
let expBtn = document.querySelector('.exp')
let piBtn = document.querySelector('.pi')
let sqrtBtn = document.querySelector('.sqrt')
let acBtn = document.querySelector('.AC')
let factBtn = document.querySelector('.fact')
let backspaceBtn = document.querySelector('.backspace')


for (i of btn){
    i.addEventListener('click', (e)=>{
        btnText = e.target.innerText;
        if(btnText == 'x'){
            btnText = '*';
        }
        if(btnText == '÷'){
            btnText = '/';
        }
        screen.value += btnText;
        console.log(btnText);
    })
}

result.addEventListener('click', ()=>{
    screen.value = eval(screen.value);
})

sinBtn.addEventListener('click', ()=>{
    screen.value = Math.sin(screen.value).toFixed(10);
})

cosBtn.addEventListener('click', ()=>{
    screen.value = Math.cos(screen.value).toFixed(10);
})

tanBtn.addEventListener('click', ()=>{
    screen.value = Math.tan(screen.value).toFixed(10);
})

logBtn.addEventListener('click', ()=>{
    screen.value = Math.log(screen.value).toFixed(10);
})

sqrtBtn.addEventListener('click', ()=>{
    screen.value = Math.sqrt(screen.value).toFixed(10);
})

expBtn.addEventListener('click', ()=>{
    screen.value = 2.71828182846;
})

piBtn.addEventListener('click', ()=>{
    screen.value = 3.14159265359;
})

acBtn.addEventListener('click', ()=>{
    screen.value = '';
})

factBtn.addEventListener('click', ()=>{

    let fact = 1;
    for(let i=1;i<=screen.value;i++){
        fact = fact * i;
    }
    screen.value = fact;
})

backspaceBtn.addEventListener('click', ()=>{
    screen.value = screen.value.substr(0, screen.value.length-1);
})

powBtn.addEventListener('click', ()=>{
    screen.value = Math.pow(screen.value , 2).toFixed(10);
})



