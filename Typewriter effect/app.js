class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;

    this.words = words;

    this.txt = ""; //* txt is implying that what word is currently displaying at that moment.

    this.wordIndex = 0; //* to get the current index of the word.

    this.wait = parseInt(wait, 10); // waiting time for the word.

    this.type(); //* function to create the typing effect

    this.isDeleting = false; // Representing the deleting state of the occuring word.
  }

  type() {
    // Current index of the word.
    const current = this.wordIndex % this.words.length;

    // Get full text of current word.
    const fullTxt = this.words[current];

    // ! Check if in deleting state.

    if (this.isDeleting) {
      //* If it is 'Deleting' then  Remove character

      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //* Else Add a character

      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // todo => Inserting the text into the element (the span tag).

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //* Initial Type Speed
    let typeSpeed = 300;

    // ? to vary the typing speed on deleting and adding.

    if (this.isDeleting) {
      typeSpeed /= 2; // On deleting the type speed will increase
    }

    //? Check if word is complete.

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait; // Make pause at the end to wait for the next word.

      // ! Set delete to true, to make sure that it starts deleting the word,

      this.isDeleting = true; //* When it reaches the end of the word, trigger the deleting phase.
    } else if (this.isDeleting && this.txt === "") {
      //* New word phase
      this.isDeleting = false;

      this.wordIndex++; // Move to the next word

      typeSpeed = 500; // Pause before start typing again for the next word
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // Init Typewriter
  new TypeWriter(txtElement, words, wait);
}
