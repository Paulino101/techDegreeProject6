const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector("a");
const overlay = document.getElementById("overlay");
const ul = document.querySelector("ul");
const heartArray = document.querySelectorAll(".tries img");
const title = document.getElementsByClassName("title");
const WorL = document.querySelector("h2");

// const button = document.querySelectorAll("button");
let missed = 0;
const phrases = [
  "paulino rodriguez",
  "the cow jumped over the moon",
  "curiosity killed the cat",
  "just do it",
  "google it",
  "take me to your leader",
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
  }
}

addPhraseToDisplay(phraseArr);

qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    button.className = "chosen";
    button.setAttribute("disabled", "");
    const letter = button.textContent;
    const letterFound = checkLetter(letter);
    if (letterFound === null) {
      heartArray[missed].src = "images/lostHeart.png";
      missed++;
    }
  }
  checkWin();
});

function checkLetter(button) {
  const letters = document.getElementsByClassName("letter");
  let match = null;
  let matchCounter = 0;
  for (let i = 0; i < letters.length; i++) {
    if (button === letters[i].textContent) {
      letters[i].classList.add("show");
      match = button;
      matchCounter++;
    }
  }
  if (matchCounter > 0) {
    return match;
  } else {
    return null;
  }
}

function checkWin() {
  const classLetter = document.querySelectorAll(".letter");
  const classShow = document.querySelectorAll(".show");
  console.log(classShow.length);
  console.log(classLetter.length);
  if (classLetter.length === classShow.length) {
    overlay.className = "win";
    WorL.textContent = "You Win!";
    overlay.style.display = "flex";
  } else if (missed > 4) {
    overlay.className = "lose";
    WorL.textContent = "You Lose.";
    overlay.style.display = "flex";
  }
}
