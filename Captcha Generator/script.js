const captcha = document.querySelector(".captcha-txt"),
    refresh = document.querySelector(".refresh"),
    inputField = document.querySelector(".captcha-input input"),
    check = document.querySelector(".check"),
    result = document.querySelector(".result h2"),
    card = document.querySelector(".card2");

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += `${randomChar}`;
    }
}

getCaptcha();
refresh.addEventListener("click", () => {
    captcha.innerText = " ";
    inputField.value = "";
    card.style.background = "#05595B";
    result.innerText = "";
    getCaptcha();
})

check.addEventListener("click", e => {
    e.preventDefault();
    result.style.display = "block";
    let inputVal = inputField.value;
    if (inputVal == captcha.innerText) {
        card.style.background = "green";

        result.innerText = "Captcha verified";
        setTimeout(() => {

            inputField.value = "";
            captcha.innerText = "";
            result.innerText = "";
            card.style.background = "#05595B";
            getCaptcha();
        }, 4000)
    } else {
        card.style.background = "#DA1212";

        result.innerText = " Please try again";
    }
});