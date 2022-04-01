document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Switcher

    let theme = document.getElementById('theme-switcher');
    let settingsMenu = document.getElementById('settings-menu');
    let darkColor = "rgb(25, 25, 25)";
    let lightColor = "#f9f9f9";

    theme.addEventListener('click', () => {
        let bg = document.body;
        let h1 = document.querySelector("header h1");
        let inputs = document.querySelector('.operations').getElementsByTagName('input');

        // Change dark theme to white theme

        if (bg.style.backgroundColor === "" || bg.style.backgroundColor === darkColor) {
            bg.style.backgroundColor = lightColor;
            h1.style.color = darkColor;
            theme.style.color = darkColor;
            settingsMenu.style.color = darkColor;
            for (let i = 0; i < inputs.length; i++)
                inputs[i].style.backgroundColor = "#d4d4d4";
        }

        // Change white theme to dark theme

        else {
            bg.style.backgroundColor = darkColor;
			h1.style.color = lightColor;
			theme.style.color = lightColor;
			settingsMenu.style.color = lightColor;
			for (let i = 0; i < inputs.length; i++)
				inputs[i].style.backgroundColor = "#fff";
        }
    });
});