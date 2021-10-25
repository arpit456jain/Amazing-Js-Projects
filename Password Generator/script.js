const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const pLength = document.getElementById('plength');
const upperCase = document.getElementById('puppercase');
const lowerCase = document.getElementById('plowercase');
const pNumber = document.getElementById('pnumber');
const pSymbol = document.getElementById('psymbol');
const submit = document.getElementById('submit');
const password = document.getElementById('pwd');

submit.addEventListener('click', ()=>{
    let initPwd = empty;
    (upperCase.checked) ? initPwd += uCase : "";
    (lowerCase.checked) ? initPwd += lCase : "";
    (pNumber.checked) ? initPwd += number : "";
    (pSymbol.checked) ? initPwd += symbol : "";

    password.value = generatePwd(pLength.value,initPwd);
});

// generate password
function generatePwd(l, initPwd){
    let pass = "";
    for (let i=0;i<l;i++){
        pass += initPwd.charAt(Math.floor(Math.random() * initPwd.length));
    }
    return pass;
}

// copy button
const copy = document.getElementById('copy');
copy.addEventListener('click', ()=> {
    if(password.value == ""){
        alert("Please generate a password!");
    }else{
        password.select();
        document.execCommand("copy");
        alert("Password has been copied.");
    }
});