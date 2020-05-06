let buttons = document.querySelectorAll("button");

buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.classList.toggle("turnGreen");
  })
);
