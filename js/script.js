var ButtonWriteUs = document.querySelector(".main-footer-map-button");
var ButtonClose = document.querySelector(".modal-login-close");

var formWriteUs = document.querySelector(".modal-login-form");

ButtonWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    formWriteUs.classList.add("open-popup");
})

ButtonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formWriteUs.classList.remove("open-popup");
})