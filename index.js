const playAgain = document.querySelector(".play-again");
const wrapper = document.querySelector(".wrapper");
const accessNum = document.querySelector(".secret-number");
const message = document.querySelector(".message");
const input = document.querySelector(".inputNum");
const checkNow = document.querySelector(".check-now");
const scoreAccess = document.querySelector(".score");
const highScoreAccess = document.querySelector(".high-score");
const container = document.querySelector(".container");

input.value = "";
input.focus();

let score = 0;
let highScore = 0;

function getSecretNum() {
  return Math.floor(Math.random() * 20 + 1);
}

let secretNum = getSecretNum();
console.log(secretNum);

let scoreTarget = false;
let scoreTarget11 = false;

checkNow.addEventListener("click", function () {
  // e.preventDefault();
  // e.stopPropagation();
  let inputValue = input.value;

  if (!inputValue) {
    message.textContent = "Please Enter The Number";
    return;
  }

  if (Number(inputValue) !== secretNum) {
    if (score > 0) {
      score--;
      scoreAccess.textContent = score;
    }

    if (scoreTarget && score === 0) {
      message.textContent = "You've Loosed The Game";
      wrapper.style.backgroundColor = "red";
      container.style.backgroundColor = "red";
      input.value = "";
      checkNow.disabled = true;
      input.disabled = true;

      return;
    }
    // console.log(inputValue, secretNum);

    scoreAccess.textContent = score;

    if (Number(inputValue) > secretNum) {
      message.textContent = "Too High...🔥🔥 ";
      wrapper.style.backgroundColor = "red";
    } else {
      message.textContent = "Too Low...😒😢";
      wrapper.style.backgroundColor = "red";

    }
  } else {
    scoreTarget = true;
    accessNum.textContent = secretNum;

    /// transition
    accessNum.style.width = "30%"

    accessNum.style.transition = "all 0.5s ease-in-out"
    
    accessNum.style.transform = "scale(1.4)"

// accessNum.style.display = "flex"
// accessNum.style.display = "flex"
    // accessNum.style.textAlign = "center"


    message.textContent = "Got It...Bravo😂😘";

    wrapper.style.backgroundColor = "yellow";
    container.style.backgroundColor = "yellow";
    score = score + 5;
    scoreAccess.textContent = score;
    highScoreAccess.textContent = score;
    checkNow.disabled = true;
    input.disabled = true;
  }
  input.focus();
  input.value = "";
});

playAgain.addEventListener("click", function () {
  checkNow.disabled = false;
  input.disabled = false;
  scoreTarget = true;
  secretNum = getSecretNum();
  console.log(secretNum);
  accessNum.style.width = "0"


  message.textContent = "Please Start Guessing :(";
  wrapper.style.backgroundColor = "rgb(255, 153, 0)";
  accessNum.textContent = "?";

  container.style.backgroundColor = "green";

  input.value = "";
  input.focus();
});
