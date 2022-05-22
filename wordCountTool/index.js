textArea = document.querySelector("textarea");

const countWord = () => {
  const text = textArea.value.replaceAll(/\ +/g, " "); //squeeze multiple spaces
  const wordArray = text.split(/[ \n]/);
  const lenWord = wordArray.filter((element) => element != "").length;
  word.innerText = lenWord;
  const lenCharWithSpace = textArea.value.replaceAll('\n','').length;
  charWithSpace.innerText = lenCharWithSpace;
  const lenCharWithoutSpace = wordArray
    .filter((element) => element != "" && element != "\n")
    .join("").length;
  charWithoutSpace.innerText = lenCharWithoutSpace;
  const lenSentence = text
    .split(/[.?!]/)
    .filter((element) => element != "" && element != "\n" && element != " ").length;
  sentence.innerText = lenSentence;
  const lenParagraph = text
    .split(/\n+/) 
    .filter((element) => element != "" && element != "\n" && element != " ").length;
  paragraph.innerText = lenParagraph;
};

textArea.addEventListener("input", countWord);
