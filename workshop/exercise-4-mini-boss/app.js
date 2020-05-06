let timer = 10;
let playerWon = true;
let startBtn = document.querySelector(".startBtn");
let playButtons;

// get the container element for the buttons
let container = document.querySelector(".container");
let maxContainerWidth = container.clientWidth;
let maxContainerHeight = container.clientHeight;

// Add click event listener to start button
startBtn.addEventListener("click", () => {
  // Call Create buttons function when start is clicked
  createButtons();

  // Set 11 second timeout until player loses
  // offset by 1 second because interval start after 1 second
  setTimeout(() => {
    playButtons = document.querySelectorAll(".playButton");
    playButtons.forEach((btn) => btn.removeEventListener("click", click));

    let buttonsLeft = [...playButtons].filter(
      (btn) => ![...btn.classList].includes("clicked")
    ).length;
    if (buttonsLeft === 1) {
      let trollButton = document.querySelector(".playButton:not(.clicked)");
      trollButton.onmouseover = undefined;
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://i.kym-cdn.com/entries/icons/facebook/000/000/091/TrollFace.jpg"
      );
      img.setAttribute("alt", "troll");
      img.style.maxHeight = "35px";
      img.style.maxWidth = "35px";
      img.style.borderRadius = "4px";
      trollButton.innerText = "";
      trollButton.appendChild(img);
    }

    let youLost = document.createElement("h1");
    youLost.innerText = "You Lost!";
    let header = document.querySelector(".header");
    header.prepend(youLost);
  }, 11000);

  // Start countdown
  let interval = setInterval(() => {
    let span = document.querySelector("#time");
    span.innerText = timer;
    if (timer === 0) {
      clearInterval(interval);
    }
    timer--;
  }, 1000);

  // Remove start button
  startBtn.remove();
});

function createButtons() {
  // Create a random number of buttons
  let randomButtonsCount = Math.floor(Math.random() * 5 + 5);

  // loop the amount of buttons to be created
  for (i = 0; i < randomButtonsCount; i++) {
    // Create the button, add events/classes
    let newButton = document.createElement("button");
    newButton.innerText = "Click me!";
    newButton.classList.add("playButton");
    newButton.addEventListener("click", click);

    // position the buttons randomly inside container
    let top = Math.ceil(Math.random() * maxContainerHeight);
    let left = Math.ceil(Math.random() * maxContainerWidth);

    newButton.style.position = "absolute";
    newButton.style.top = top + "px";
    newButton.style.left = left + "px";

    container.appendChild(newButton);

    // Buttons can go out of bounds of the container when maxContainer gets maximum value
    // because it will add the height and width of the button
    // this fix needs to be applied after appendChild because newButton.clientWidth is 0
    // before the append
    let leftFix = +newButton.style.left.replace("px", "");
    if (leftFix > maxContainerWidth - newButton.clientWidth) {
      newButton.style.left = maxContainerWidth - newButton.clientWidth + "px";
    }

    let topFix = +newButton.style.top.replace("px", "");
    if (topFix > maxContainerHeight - newButton.clientHeight) {
      newButton.style.top = maxContainerHeight - newButton.clientHeight + "px";
    }
  }
}

function click(event) {
  let trollWords = [
    "Over here!",
    "Not There. Here!",
    "LOL",
    "LMAO",
    "Too Slow",
    ":)",
  ];
  event.target.classList.toggle("clicked");
  let playButtons = [...document.querySelectorAll(".playButton")];
  let buttonsLeft = playButtons.filter(
    (btn) => ![...btn.classList].includes("clicked")
  ).length;
  if (buttonsLeft === 1) {
    let btn = playButtons.find(
      (btn) => ![...btn.classList].includes("clicked")
    );
    btn.removeEventListener("click", click);
    btn.onmouseover = () => {
      // position the buttons randomly inside container
      let top = Math.ceil(Math.random() * maxContainerHeight);
      let left = Math.ceil(Math.random() * maxContainerWidth);
      btn.style.top = top + "px";
      btn.style.left = left + "px";

      let leftFix = +btn.style.left.replace("px", "");
      if (leftFix > maxContainerWidth - btn.clientWidth) {
        btn.style.left = maxContainerWidth - btn.clientWidth + "px";
      }

      let topFix = +btn.style.top.replace("px", "");
      if (topFix > maxContainerHeight - btn.clientHeight) {
        btn.style.top = maxContainerHeight - btn.clientHeight + "px";
      }

      let pickAword = Math.floor(Math.random() * 6);
      btn.innerText = trollWords[pickAword];
    };
  }
}
