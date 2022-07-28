/* Find classes or IDs */
let clue1 = document.querySelector("#clue-1");
let button = document.querySelector("#button");
let clue2 = document.querySelector("#clue-2");
let clue3 = document.querySelector("#clue-3");
let gif = document.querySelector(".modal");
let closeButton = document.querySelector("#closeButton");
let input = document.querySelector(".input");

let page = document.querySelector(".hero");
let body = document.querySelector("#main-body");

/* Button for the key - Already done! */
button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

/* Your Code Here */
const keysPressed = [];
const secretCode = "what";
const secretNum = "732";
const secretRiddle = "candle";
input.addEventListener("keypress", (e) => {
  // add key pressed into keysPressed array
  keysPressed.push(e.key);
  //check for password
  let passwordAttempt = keysPressed.slice(-secretCode.length);
  let passwordAttemptString = passwordAttempt.join("");
  if (passwordAttemptString.toLowerCase() === secretCode) {
    button.classList.remove("hidden");
    clue1.classList.add("hidden");
  };

  // check for number code
  let numberAttempt = keysPressed.slice(-secretNum.length);
  let numberAttemptString = numberAttempt.join("");
  if (numberAttemptString === secretNum) {
    clue2.classList.add("hidden");
    clue3.classList.remove("hidden");
  };

  // check for riddle answer
  let riddleAttempt = keysPressed.slice(-secretRiddle.length);
  let riddleAttemptString = riddleAttempt.join("");
  if (riddleAttemptString.toLowerCase() === secretRiddle){
    clue3.classList.add("hidden");
    gif.classList.add("is-active");
      
      // `<iframe src="https://giphy.com/embed/IWOEH2zDGka88" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ride-sidewalk-IWOEH2zDGka88">via GIPHY</a></p>`;
  };
});

// https://giphy.com/embed/IWOEH2zDGka88
closeButton.addEventListener("click", (e) => {
  gif.classList.remove("is-active");
});