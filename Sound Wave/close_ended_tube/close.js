let canvas = document.getElementById("tube");
let ct = canvas.getContext("2d");
let length = 700;
let height = 200;
let check = 0;
let moving = 0;
let submitted = 0;
let mode = 1;
let disp_btn = document.getElementById("displacement");
let press_btn = document.getElementById("pressure");
let back_btn = document.getElementById("back");
let form = document.getElementById("inputs");
let mode_inp = document.getElementById("mode");
let disp_inp = document.getElementById("disp");
let amp_disp_inp = document.getElementById("amp_disp");
let amp_press_inp = document.getElementById("amp_press");
let static  = document.getElementById("static");
let dynamic = document.getElementById("dynamic");
let len = document.getElementById("length");
let ampl = document.getElementById("amp");
let home = document.getElementById("home");
let info = document.getElementById("info");
let tubelen = 0;
let modulator = Math.PI / 2;

let mouse = {
    x: undefined,
    y: undefined
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
}, true);

window.addEventListener('mousemove', function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}, true);

function onSubmit(event){
    mode = mode_inp.value;
    tubelen = disp_inp.value;
    form.style.visibility = "hidden";
    disp_btn.style.visibility = "visible";
    press_btn.style.visibility = "visible";
    back_btn.style.visibility = "visible";
    static.style.visibility = "visible";
    dynamic.style.visibility = "visible";
    home.style.visibility = "hidden";
    info.style.visibility = "visible";
    len.textContent = `Length from the left end of the tube:`;
    submitted = 1;
    event.preventDefault();
}

form.addEventListener("submit", onSubmit);

function displacement(){
    check = 1;
}

function pressure(){
    check = 2;
}

function static_w(){
    moving = 1;
}

function dynamic_w() {
    moving = 2;
}

function back(){
    check = 0;
    disp_btn.style.visibility = "hidden";
    press_btn.style.visibility = "hidden";
    back_btn.style.visibility = "hidden";
    form.style.visibility = "visible";
    static.style.visibility = "hidden";
    dynamic.style.visibility = "hidden";
    home.style.visibility = "visible";
    info.style.visibility = "hidden";
    submitted = 0;
    len.textContent = ``;
    ampl.textContent = ``;
    moving = 0;
    check = 0;
}

function draw(){
    ct.beginPath();
    ct.moveTo(300,400);
    ct.lineTo(300 + length, 400);
    ct.lineTo(300 + length, 400 + height);
    ct.lineTo(300, 400 + height);
    ct.stroke();
}

function draw_disp_st(){
    ct.beginPath();
    ct.moveTo(300 + length, 400 + height/2);
    let wl = 4 * length / mode;
    let k = 2 * Math.PI / wl;
    modulator = Math.PI / 2;
    let amp = Math.sin(modulator);
    for (let i = 300 + length; i>=300; i--){
        ct.lineTo(i , 400 + height/2 + Math.sin((300 + length -i) * k) * height/2 * amp);
    }
    ct.stroke();
    ct.beginPath();
    ct.moveTo(300 + length, 400 + height/2);
    for (let i = 300 + length; i>=300; i--){
        ct.lineTo(i , 400 + height/2 - Math.sin((300 + length -i) * k) * height/2 * amp);
    }
    ct.stroke();
}

function draw_disp_dy(){
    ct.beginPath();
    ct.moveTo(300 + length, 400 + height/2);
    let wl = 4 * length / mode;
    let k = 2 * Math.PI / wl;
    let amp = Math.sin(modulator);
    modulator+=0.8;
    for (let i = 300 + length; i>=300; i--){
        ct.lineTo(i , 400 + height/2 + Math.sin((300 + length -i) * k) * height/2 * amp);
    }
    ct.stroke();
    ct.beginPath();
    ct.moveTo(300 + length, 400 + height/2);
    for (let i = 300 + length; i>=300; i--){
        ct.lineTo(i , 400 + height/2 - Math.sin((300 + length -i) * k) * height/2 * amp);
    }
    ct.stroke();
}

function draw_pressure_st(){
    ct.beginPath();
    ct.moveTo(300, 400 + height/2);
    let wl = 4 * length / mode;
    let k = 2 * Math.PI / wl;
    modulator = Math.PI / 2;
    let amp = Math.sin(modulator);
    for (let i = 300; i<=300 + length; i++){
        ct.lineTo(i , 400 + height/2 + Math.sin((300 -i) * k) * height/2 * amp);
    }
    ct.stroke();
    ct.beginPath();
    ct.moveTo(300, 400 + height/2);
    for (let i = 300; i<=300 + length; i++){
        ct.lineTo(i , 400 + height/2 - Math.sin((300 -i) * k) * height/2 * amp);
    }
    ct.stroke();
}

function draw_pressure_dy(){
    ct.beginPath();
    ct.moveTo(300, 400 + height/2);
    let wl = 4 * length / mode;
    let k = 2 * Math.PI / wl;
    let amp = Math.sin(modulator);
    modulator+=0.8;
    for (let i = 300; i<=300 + length; i++){
        ct.lineTo(i , 400 + height/2 + Math.sin((300 -i) * k) * height/2 * amp);
    }
    ct.stroke();
    ct.beginPath();
    ct.moveTo(300, 400 + height/2);
    for (let i = 300; i<=300 + length; i++){
        ct.lineTo(i , 400 + height/2 - Math.sin((300 -i) * k) * height/2 * amp);
    }
    ct.stroke();
}

function update(){
    draw();
    if(check==1 && moving==1) draw_disp_st();
    if(check==1 && moving==2) draw_disp_dy();
    if(check==2 && moving==1) draw_pressure_st();
    if(check==2 && moving==2) draw_pressure_dy();
    if(mouse.x>=308 && mouse.x<=308+length && moving==1 && check!=0){
        let dist = (mouse.x - 300)*tubelen/length;
        dist = dist - 0.57;
        let dist_str = dist.toFixed(2);
        if(check==1){
            let wl = 4 * tubelen / mode;
            let k = 2 * Math.PI / wl;
            let amp = Math.sin((tubelen - dist) * k);
            amp = Math.abs(amp);
            let amp_display;
            if(1 - amp < 0.2 || amp < 0.2){
                amp_display = (amp * amp_disp_inp.value).toFixed(3);
            }else{
                amp_display = (amp * amp_disp_inp.value).toFixed(2);
            }
            if(Math.abs(mouse.y - 400 - height/2 + amp*height/2 - 4) < 8 || Math.abs(mouse.y - 400 - height/2 - amp*height/2 - 4) < 8){
                ampl.textContent = `Amplitude is: ${amp_display}`;
                len.textContent = `Length from the left end of the tube: ${dist_str}`;
            }else{
                ampl.textContent = `Amplitude is: `;
                len.textContent = `Length from the left end of the tube:`;
            }
        }else{
            let wl = 4 * tubelen / mode;
            let k = 2 * Math.PI / wl;
            let amp = Math.sin((dist) * k);
            amp = Math.abs(amp);
            let amp_display;
            if(1 - amp < 0.2 || amp < 0.2){
                amp_display = (amp * amp_press_inp.value).toFixed(3);
            }else{
                amp_display = (amp * amp_press_inp.value).toFixed(2);
            }
            if(Math.abs(mouse.y - 400 - height/2 + amp*height/2 - 4) < 8 || Math.abs(mouse.y - 400 - height/2 - amp*height/2 - 4) < 8){
                ampl.textContent = `Amplitude is: ${amp_display}`;
                len.textContent = `Length from the left end of the tube: ${dist_str}`;
            }else{
                ampl.textContent = `Amplitude is: `;
                len.textContent = `Length from the left end of the tube:`;
            }
        }
    }else if(submitted){
        len.textContent = `Length from the left end of the tube:`;
        ampl.textContent = `Amplitude is: `;
    }
}

function animate(){
    requestAnimationFrame(animate);
    ct.clearRect(0, 0, window.innerWidth, window.innerHeight);
    update();
}

animate();