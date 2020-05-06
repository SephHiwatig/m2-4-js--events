let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("turnGreen");
  });

  let pixelValue = 800;

  let top = Math.ceil(Math.random() * pixelValue);
  let left = Math.ceil(Math.random() * pixelValue);

  btn.style.position = "absolute";
  btn.style.top = top + "px";
  btn.style.left = left + "px";
  // btn.style.bottom = bottom + "px";
});
