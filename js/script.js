document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".main-block__burger");
  var menuBody = document.querySelector(".main-block__menu-body");
  var body = document.body;

  burger.addEventListener("click", function (event) {
    burger.classList.toggle("active");
    menuBody.classList.toggle("active");
    body.classList.toggle("lock");
  });
});
