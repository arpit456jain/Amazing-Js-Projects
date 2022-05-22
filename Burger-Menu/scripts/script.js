let toggle_open = document.getElementById("menu-toggle");
let toggle_close = document.getElementsByClassName("close-button")[0];
let nav = document.getElementById("home");


// The Function below toggles open the menu
toggle_open.addEventListener("click", () => {
    document.getElementsByClassName("phone-menu")[0].style.right = "0";
    document.getElementsByClassName("phone-menu")[0].style.transition = "all 1s ease-out";
})

// The Function below closes the menu
toggle_close.addEventListener("click", () => {
    document.getElementsByClassName("phone-menu")[0].style.right = "-100%";
    document.getElementsByClassName("phone-menu")[0].style.transition = "all 1s ease-in";
})
