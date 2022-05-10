import emojiList from "./emojis.json" assert { type: "json" };

const inputElement = document.querySelector("input");
const resultElement = result;

const addToClipBoard = (text) => {
  navigator.clipboard.writeText(`${text}`);
};
const createResultRow = (symbol, title) => {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return `
    <div class="result-row" data-clipboard=${symbol}>
        <span class="title">
            <img src=${src} alt="">
            ${title}
        </span>
        <span class="info">Click to copy</span>
    </div>
    `;
};
const filterFromEmojiList = (text, noOfResults) => {
  return emojiList
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(text.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0, noOfResults);
};
const displayEmojis = () => {
  const text = inputElement.value;
  const emojiResult = filterFromEmojiList(text, 20);
  let value = "";
  emojiResult.forEach((element) => {
    value += createResultRow(element.symbol, element.title);
  });
  resultElement.innerHTML = value;
  document.querySelectorAll(".result-row").forEach((element) => {
    element.addEventListener("click", (e) => {
      addToClipBoard(e.target.closest("[data-clipboard]").dataset.clipboard);
    });
  });
};

inputElement.addEventListener("input", () => {
  displayEmojis();
});

window.addEventListener("load", displayEmojis);
