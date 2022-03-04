const jokeEl = document.getElementById('joke')
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke(){
    // call the icanhaz API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'


        }
    });

    const joke = await jokeRes.json();

    // set the new joke
    jokeEl.innerHTML = joke.joke;
}

