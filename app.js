const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector("a");
const overlay = document.getElementById("overlay");
const ul = document.querySelector("ul");

// const button = document.querySelectorAll("button");
let missed = 0;
const phrases = [
  "Paulino Jair",
  "Koda Beans",
  "Alexa Rodriguez",
  "Rosa Cordova",
  "Juan Manuel",
  "Yolanda Hernandez",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function spaceOrLetter(test) {
  if (test.textContent === " ") {
    test.classList.add("space");
  } else {
    test.classList.add("letter");
  }
}
startGame.addEventListener("click", () => {
  overlay.style.display = "none";
});

function getRandomPhraseAsArray(arr) {
  let i = getRandomInt(phrases.length);
  return arr[i];
}

const phraseArr = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(randomString) {
  for (i = 0; i < randomString.length; i++) {
    createLi = document.createElement("li");
    createLi.textContent = randomString[i];
    ul.append(createLi);
    spaceOrLetter(createLi);
    console.log(createLi);
  }
}

addPhraseToDisplay(phraseArr);

function checkLetter(button) {
  let letters = document.getElementsByClassName("letter");
  let match = null;
  for (let i = 0; i > letters.length; i++) {
    if (letters[i].textContent === button.textContent) {
      letters[i].classList.add("show");
      let match = button.textContent;
    }
  }
  return match;
}

qwerty.addEventListener("click", (e) => {
  if (e.target != button || e.target.classList === "chosen") {
  } else {
    e.target.classList.add("chosen");
    let check = checkLetter(button);
  }
});
