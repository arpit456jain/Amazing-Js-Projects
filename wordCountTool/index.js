textArea = document.querySelector("textarea");

const countWord = () => {
  const text = textArea.value.replace(/\h+/g, " "); //squeeze multiple spaces
  const wordArray = text.split(" ");
  const lenWord = wordArray.filter((element) => element != "").length;
  word.innerText = lenWord;
  const lenCharWithSpace = textArea.value.length;
  charWithSpace.innerText = lenCharWithSpace;
  const lenCharWithoutSpace = wordArray
    .filter((element) => element != "" && element != "\n")
    .join("").length;
  charWithoutSpace.innerText = lenCharWithoutSpace;
  const lenSentence = text
    .split(/[.?!]/)
    .filter((element) => element != "" && element != "\n").length;
  sentence.innerText = lenSentence;
  const lenParagraph = text
    .split(/\n\n/)
    .filter((element) => element != "").length;
  paragraph.innerText = lenParagraph;
};

textArea.addEventListener("input", countWord);
