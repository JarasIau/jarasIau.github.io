const modal = document.getElementById("modal");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
