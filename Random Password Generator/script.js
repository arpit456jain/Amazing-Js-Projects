let pass1 = document.getElementById("password-1");
let pass2 = document.getElementById("password-2");
let pass3 = document.getElementById("password-3");
let pass4 = document.getElementById("password-4");

let arr = [];
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
for (let i = 65 ; i < 123 ; i++ ) {
    arr += String.fromCharCode(i)     // String.fromCharCode is used to generate alphabet from its                                       ascii values
}
console.log(arr[2])
function generate() {
    for (let j = 1; j < 9 ; j++ ) {
    arr1 += arr[Math.floor(Math.random() * 58)]
    arr2 += arr[Math.floor(Math.random() * 58)] 
    arr3 += arr[Math.floor(Math.random() * 58)] 
    arr4 += arr[Math.floor(Math.random() * 58)]   
}
pass1.textContent = arr1;
pass2.textContent = arr2;
pass3.textContent = arr3;
pass4.textContent = arr4;

arr1 = []
arr2 = []
arr3 = []
arr4 = []
}

function copy1() {
        pass1.select();
        navigator.clipboard.writeText((pass1).value);
}
function copy2() {
    pass2.select();
    navigator.clipboard.writeText((pass2).value);
}
function copy3() {
    pass3.select();
    navigator.clipboard.writeText((pass3).value);
}
function copy4() {
    pass4.select();
    navigator.clipboard.writeText((pass4).value);
}