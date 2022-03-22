const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resetButton = document.getElementById('reset-btn')
const easy = document.getElementById('easy')
const hard = document.getElementById('hard')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
resetButton.addEventListener('click', endGame)
function endGame() {
  resetState()
  questionContainerElement.classList.add('hide')
  startButton.classList.remove('hide')
  resetButton.classList.add('hide')
}
function startGame() {
  startButton.classList.add('hide')
  easy.classList.remove('hide')
  hard.classList.remove('hide')
  easy.addEventListener('click', start1)
  hard.addEventListener('click', start2)
}
function start1(){
  easy.classList.add('hide')
  hard.classList.add('hide')
  shuffledQuestions = equestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  resetButton.classList.remove('hide')
  setNextQuestion()
}

function start2(){
  easy.classList.add('hide')
  hard.classList.add('hide')
  shuffledQuestions = hquestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  resetButton.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    resetButton.innerText = 'Restart'
    
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const equestions = [
  {
    question: 'What is the material with which Captain America Shield is made of?',
    answers: [
      { text: 'Vibranium', correct: true },
      { text: 'Adamantium', correct: false },
      { text: 'Steel', correct: false},
      { text: 'Uru Metal', correct: false}
    ]
  },
  {
    question: 'Complete the quote: "Thats my secret, Cap. Im always..."',
    answers: [
      { text: 'Sad', correct: false },
      { text: 'High', correct: false },
      { text: 'Angry', correct: true },
      { text: 'Confused', correct: false }
    ]
  },
  {
    question: 'Real Name of Hawkeye is:',
    answers: [
      { text: 'Natasha Romanoff', correct: false },
      { text: 'Clint Barton', correct: true },
      { text: 'Jeremy Renner', correct: false },
      { text: 'Steve Rogers', correct: false }
    ]
  },
  {
    question: 'Who is the first Black Captain America?',
    answers: [
      { text: 'Miles Morales', correct: false },
      { text: 'Isiah Bradley', correct: true },
      { text: 'Sam Wilson', correct: false },
      { text: 'T Challa', correct: false }
    ]
  }
]
const hquestions = [
  {
    question: 'What is the full form of S.W.O.R.D. (MCU)?',
    answers: [
      { text: 'Sentient World Observation and Response Department', correct: false },
      { text: 'Sentient Weapon Observation and Response Department', correct: true },
      { text: 'Sentient World Observation and Responsible Department', correct: false},
      { text: 'Sentient World Observation and Response Development', correct: false}
    ]
  },
  {
    question: 'THOR: THE DARK WORLD: Where do Sif and Volstagg hide the Reality Stone at the end of the movie?',
    answers: [
      { text: 'On Vormir', correct: false },
      { text: 'In a Vault in Asgard', correct: false },
      { text: 'In the Sword of Sif', correct: false },
      { text: 'To the Collector', correct: true }
    ]
  },
  {
    question: 'GUARDIANS OF THE GALAXY: What were the three items Rocket claims he needs in order to escape the prison?',
    answers: [
      { text: 'A security card, a fork, and an ankle monitor', correct: false },
      { text: 'A security band, a battery, and a prosthetic leg', correct: true },
      { text: 'A pair of binoculars, a detonator, and a prosthetic leg', correct: false },
      { text: 'A knife, cable wires, and Peters mixtape', correct: false }
    ]
  },
  {
    question: 'DOCTOR STRANGE: What type of doctor is Stephen Strange?',
    answers: [
      { text: 'Plastic Surgeon', correct: false },
      { text: 'Neuro Surgeon', correct: true },
      { text: 'Trauma Surgeon', correct: false },
      { text: 'Cardiothoracic Surgeon', correct: false },
    ]
  }
]