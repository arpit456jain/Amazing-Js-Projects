document.addEventListener('DOMContentLoaded', () => {

    // Side Menu

    let settingsBtn = document.getElementById('settings-menu');
    let closeSettings = document.getElementById('close-menu');
    let settingsDiv = document.getElementById('settings');

    let menuTimeout = 800;

    function manageOpacity() {
        let main = document.querySelector('main');
        let header = document.querySelector('header');

        let lowOpacity = 0.5;

        let decreaseOpacity = `decreaseOpacity ${menuTimeout / 1000}s ease`;
        let increaseOpacity = `increaseOpacity ${menuTimeout / 1000}s ease`;

        if (main.style.opacity === "1" || main.style.opacity === "") {
            main.style.animation = decreaseOpacity;
            header.style.animation = decreaseOpacity;
            main.style.opacity = lowOpacity;
            header.style.opacity = lowOpacity;
        }
        else {
            main.style.animation = increaseOpacity;
            header.style.animation = increaseOpacity;
            main.style.opacity = 1;
            header.style.opacity = 1;
        }

    }

    settingsBtn.addEventListener('click', () => {        
        settingsDiv.style.display = 'block';
        settingsDiv.style.animation = 
            `slideMenuOn ${menuTimeout / 1000}s ease`; 
        manageOpacity();
    });

    closeSettings.addEventListener('click', () => {
        settingsDiv.style.animation = 
            `slideMenuOff ${menuTimeout / 1000}s ease`;
        manageOpacity();
        setTimeout(() => {
            settingsDiv.style.display = 'none';
        }, menuTimeout);
    });

    // Code to manage inputs within menu

    let inputs = 
        document.querySelectorAll('div.settings-container > div input');
    let error = document.getElementById('settings-error');
    let succes = document.getElementById('succes');

    let animations = {
        nodeAnimationTimeout: 1000,
        pointerAnimationTimeout: 800,
        deleteTimeout: 1000
    }; // default values

    setAnimationsTimeOuts(animations);

    document.getElementById('save-settings').addEventListener('click', () => {
        for (let i = 0; i < inputs.length; i++) 
            if (inputs[i].valueAsNumber < 0) {
                succes.innerHTML = null;
                error.innerHTML = 
                    '<i class="fas fa-exclamation-circle"></i>' +
                    'Miliseconds cannot be negative';
                error.firstChild.style.animation = "highlightNode .8s ease";
                return;
            }

        error.innerHTML = null;

        animations.nodeAnimationTimeout = 
            isNaN(inputs[0].valueAsNumber) ?
            1000 : inputs[0].valueAsNumber;

        animations.pointerAnimationTimeout = 
            isNaN(inputs[1].valueAsNumber) ?
            800 : inputs[1].valueAsNumber;

        animations.deleteTimeout = 
            isNaN(inputs[2].valueAsNumber) ?
            1000 : inputs[2].valueAsNumber;

        succes.innerHTML = 
            '<i class="fas fa-check-circle"></i>' + 
            " Saved!";
        succes.firstChild.style.animation = "highlightNode .8s ease";

        setAnimationsTimeOuts(animations);
    });
});