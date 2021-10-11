const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector("a");
const overlay = document.getElementById("overlay");
const ul = document.querySelector("ul");
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

randomPhrase = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(randomString) {
  for (i = 0; i < randomString.length; i++) {
    createLi = document.createElement("li");
    createLi.textContent = randomString[i];
    ul.append(createLi);
    spaceOrLetter(createLi);
    console.log(createLi);
  }
}

addPhraseToDisplay(randomPhrase);

function checkLetter(randomString) {
  for (i = 0; i < randomString.length; i++) {
    createLi = document.createElement("li");
    createLi.textContent = randomString[i];
    const letter = randomString[i];
    let match = null;
    if (letter === button.textContent) {
      letter.classList.add("show");
      let match = button.textContent;
      return match;
    }
  }
}
checkLetter(randomPhrase);

// qwerty.addEventListener('click', () => {
//     if ()
// })
