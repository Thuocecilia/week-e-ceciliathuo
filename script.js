// CLOSE BUTTONS
const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const slide = btn.parentElement;
    slide.style.display = "none";
    window.location.hash = "";
  });
});

// HOME BUTTON HIDES ALL SLIDES
const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", () => {
  document.querySelectorAll(".slide").forEach(slide => {
    slide.style.display = "none";
  });
  window.location.hash = "";
});
