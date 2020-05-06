let buttons = document.querySelectorAll("button");

buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    btn.style.backgroundColor = "green";
  })
);
