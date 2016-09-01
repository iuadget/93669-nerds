var popBtn = document.querySelector(".btn-pop-up");
var popUp = document.querySelector(".pop-up");
var popClose = document.querySelector(".pop-up-close");
var login = document.querySelector("#name-id");

popBtn.addEventListener("click", function(event) {
  event.preventDefault();
  popUp.classList.add("pop-up-opened");
  login.focus();
});
popClose.addEventListener("click", function(event) {
  event.preventDefault();
  popUp.classList.remove("pop-up-opened");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popUp.classList.contains("pop-up-opened")) {
      popUp.classList.remove("pop-up-opened");
    }
  }
});
