// Return Promise
const catchPokemonHelper = (catch_rate, max_catch_rate) => {
  return new Promise(resolve => {
    const randomSleepTime = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    setTimeout(() => {
      const randomCatch = Math.random() <= catch_rate / max_catch_rate;
      resolve(randomCatch);
    }, randomSleepTime * 1000);
  });
};

export default catchPokemonHelper;
