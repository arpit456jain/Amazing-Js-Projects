
//all formulas used are standard sound wave formulas

let canvas = document.getElementById("tube");
let ct = canvas.getContext("2d");
let length = 700;
let height = 200;
if(window.innerWidth <= 560){
    length = 200;
    height = 100;
}
else if(window.innerWidth>560 && innerWidth < 770){
    length = 500;
    height = 200;
}else{
    length = 700;
    height = 200;
}
let x_corr = 50;
let y_corr = 1;
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
let inf = document.getElementById("inf");
let line = document.getElementById("line");
let tubelen = 0;
let modulator = Math.PI / 2;

let mouse = {
    x: undefined,
    y: undefined
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(window.innerWidth <= 560){
        length = 200;
        height = 100;
    }
    else if(window.innerWidth>560 && innerWidth < 770){
        length = 500;
        height = 200;
    }else{
        length = 700;
        height = 200;
    }
}, true);

// mouse moving event
window.addEventListener('mousemove', function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}, true);

//triggered on submitting the form
function onSubmit(event){
    mode = mode_inp.value;
    tubelen = disp_inp.value;
    form.style.visibility = "hidden";
    disp_btn.style.visibility = "visible";
    press_btn.style.visibility = "visible";
    back_btn.style.visibility = "visible";
    static.style.visibility = "visible";
    dynamic.style.visibility = "visible";
    info.style.visibility = "visible";
    inf.style.visibility = "visible";
    line.style.visibility = "visible";
    home.style.visibility = "hidden";
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

// back button
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
    inf.style.visibility = "hidden";
    line.style.visibility = "hidden";
    submitted = 0;
    len.textContent = ``;
    ampl.textContent = ``;
    moving = 0;
    check = 0;
}

// drawing the tube
function draw(){
    ct.beginPath();
    ct.moveTo(x_corr,y_corr);
    ct.lineTo(x_corr + length, y_corr);
    ct.stroke();
    ct.moveTo(x_corr + length, y_corr + height);
    ct.lineTo(x_corr, y_corr + height);
    ct.stroke();
}

// drawing static displacement wave
function draw_disp_st(){
    ct.beginPath();
    let wl = 2 * length / mode;
    let k = 2 * Math.PI / wl;
    modulator = Math.PI / 2;
    let amp = Math.sin(modulator);
    for (let i = x_corr; i<=x_corr+length; i++){
        if(mode%2){
            if(i==x_corr){
                if(Math.sin((length/2) * k) * height/2 * amp > 0){
                    ct.moveTo(x_corr, y_corr + height);
                }else{
                    ct.moveTo(x_corr, y_corr);
                }
            }
            ct.lineTo(i , y_corr + height/2 + Math.sin((x_corr + length/2 -i) * k) * height/2 * amp);
        }else{
            if(i==x_corr){
                if(Math.cos((length/2) * k) * height/2 * amp > 0){
                    ct.moveTo(x_corr, y_corr + height);
                }else{
                    ct.moveTo(x_corr, y_corr);
                }
            }
            ct.lineTo(i , y_corr + height/2 + Math.cos((x_corr + length/2 -i) * k) * height/2 * amp);
        }
    }
    ct.stroke();
    ct.beginPath();
    for (let i = x_corr; i<=x_corr+length; i++){
        if(mode%2){
            if(i==x_corr){
                ct.lineTo(i , y_corr + height/2 - Math.sin((length/2) * k) * height/2 * amp);
            }
            ct.lineTo(i , y_corr + height/2 - Math.sin((x_corr + length/2 -i) * k) * height/2 * amp);
        }else{
            if(i==x_corr){
                ct.lineTo(i , y_corr + height/2 - Math.cos((length/2) * k) * height/2 * amp);
            }
            ct.lineTo(i , y_corr + height/2 - Math.cos((x_corr + length/2 -i) * k) * height/2 * amp);
        }
    }
    ct.stroke();
}

// drawing dynamic displacement wave
function draw_disp_dy(){
    ct.beginPath();
    let wl = 2 * length / mode;
    let k = 2 * Math.PI / wl;
    let amp = Math.sin(modulator);
    // modulator is updated to change the amplitude in case of dynamic waves continuously
    modulator += 0.8;
    for (let i = x_corr; i<=x_corr+length; i++){
        if(mode%2){
            if(i==x_corr){
                ct.moveTo(i , y_corr + height/2 + Math.sin((length/2) * k) * height/2 * amp);
            }
            ct.lineTo(i , y_corr + height/2 + Math.sin((x_corr + length/2 -i) * k) * height/2 * amp);
        }else{
            if(i==x_corr){
                ct.lineTo(i , y_corr + height/2 + Math.cos((length/2) * k) * height/2 * amp);
            }
            ct.lineTo(i , y_corr + height/2 + Math.cos((x_corr + length/2 -i) * k) * height/2 * amp);
        }
    }
    ct.stroke();
    ct.beginPath();
    for (let i = x_corr; i<=x_corr+length; i++){
        if(mode%2){
            if(i==x_corr){
                ct.lineTo(i , y_corr + height/2 - Math.sin((length/2) * k) * height/2 * amp);
            }
            ct.lineTo(i , y_corr + height/2 - Math.sin((x_corr + length/2 -i) * k) * height/2 * amp);
        }else{
            if(i==x_corr){
                ct.lineTo(i , y_corr + height/2 - Math.cos((length/2) * k) * height/2 * amp);
            }
            ct.lineTo(i , y_corr + height/2 - Math.cos((x_corr + length/2 -i) * k) * height/2 * amp);
        }
    }
    ct.stroke();
}

// drawing static pressure wave
function draw_pressure_st(){
    ct.beginPath();
    ct.moveTo(x_corr, y_corr + height/2);
    let wl = 2 * length / mode;
    let k = 2 * Math.PI / wl;
    modulator = Math.PI / 2;
    let amp = Math.sin(modulator);
    for (let i = x_corr; i<=x_corr + length; i++){
        ct.lineTo(i , y_corr + height/2 + Math.sin((x_corr -i) * k) * height/2 * amp);
    }
    ct.stroke();
    ct.beginPath();
    ct.moveTo(x_corr, y_corr + height/2);
    for (let i = x_corr; i<=x_corr + length; i++){
        ct.lineTo(i , y_corr + height/2 - Math.sin((x_corr -i) * k) * height/2 * amp);
    }
    ct.stroke();
}

// drawing dynamic pressure wave
function draw_pressure_dy(){
    ct.beginPath();
    ct.moveTo(x_corr, y_corr + height/2);
    let wl = 2 * length / mode;
    let k = 2 * Math.PI / wl;
    let amp = Math.sin(modulator);
    // modulator is updated to change the amplitude in case of dynamic waves continuously
    modulator+=0.8;
    for (let i = x_corr; i<=x_corr + length; i++){
        ct.lineTo(i , y_corr + height/2 + Math.sin((x_corr -i) * k) * height/2 * amp);
    }
    ct.stroke();
    ct.beginPath();
    ct.moveTo(x_corr, y_corr + height/2);
    for (let i = x_corr; i<=x_corr + length; i++){
        ct.lineTo(i , y_corr + height/2 - Math.sin((x_corr -i) * k) * height/2 * amp);
    }
    ct.stroke();
}

// controls all drawings and mouse hover events
function update(){
    draw();
    if(check==1 && moving==1) draw_disp_st();
    if(check==1 && moving==2) draw_disp_dy();
    if(check==2 && moving==1) draw_pressure_st();
    if(check==2 && moving==2) draw_pressure_dy();
    if(mouse.x>=x_corr && mouse.x<=x_corr+length && moving==1 && check!=0){
        let dist = (mouse.x - x_corr)*tubelen/length;
        let dist_str = dist.toFixed(2);
        if(check==1){
            let wl = 2 * tubelen / mode;
            let k = 2 * Math.PI / wl;
            let amp;
            if(mode%2){
                amp = Math.sin((tubelen/2 - dist) * k);
            }else{
                amp = Math.cos((tubelen/2 - dist) * k);
            }
            amp = Math.abs(amp);
            let amp_display;
            if(1 - amp < 0.2 || amp < 0.2){
                amp_display = (amp * amp_disp_inp.value).toFixed(3);
            }else{
                amp_display = (amp * amp_disp_inp.value).toFixed(2);
            }
            if(Math.abs(mouse.y - 408 - y_corr - height/2 + amp*height/2 - 4) < 8 || Math.abs(mouse.y - 408 - y_corr - height/2 - amp*height/2 - 4) < 8){
                ampl.textContent = `Amplitude is: ${amp_display}`;
                len.textContent = `Length from the left end of the tube: ${dist_str}`;
            }else{
                ampl.textContent = `Amplitude is: `;
                len.textContent = `Length from the left end of the tube:`;
            }
        }else{
            let wl = 2 * tubelen / mode;
            let k = 2 * Math.PI / wl;
            let amp = Math.sin((dist) * k);
            amp = Math.abs(amp);
            let amp_display;
            if(1 - amp < 0.2 || amp < 0.2){
                amp_display = (amp * amp_press_inp.value).toFixed(3);
            }else{
                amp_display = (amp * amp_press_inp.value).toFixed(2);
            }
            if(Math.abs(mouse.y - 408 - y_corr - height/2 + amp*height/2 - 4) < 8 || Math.abs(mouse.y - 408 - y_corr - height/2 - amp*height/2 - 4) < 8){
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

//calls update recursively to give animation effects
function animate(){
    requestAnimationFrame(animate);
    ct.clearRect(0, 0, window.innerWidth, window.innerHeight);
    update();
}

animate();