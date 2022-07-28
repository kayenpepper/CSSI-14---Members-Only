/* Find classes or IDs */
// let clue1 = document.querySelector("");
// let button = document.querySelector("");
// let clue2 = document.querySelector("");

// let page = document.querySelector(".hero");
// let body = document.querySelector("#main-body");

// /* Button for the key - Already done! */
// button.addEventListener("click", (e) => {
//   button.classList.add("hidden");
//   clue2.classList.remove("hidden");
// });

/* Your Code Here */
const keysPressed = [];
const passwordKey = "what";
window.addEventListener("keypress", (e) => {
  // add key pressed into keysPressed array
  keysPressed.push(e.key);
  // console.log(keysPressed);
  //check for password
  let passwordAttempt = keysPressed.slice(-passwordKey.length);
  // console.log(passwordAttempt);
  let passwordAttemptString = passwordAttempt.join("");
  if (passwordAttemptString.toLowerCase() === passwordKey){
    console.log("password submitted");
  }
});