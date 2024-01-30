// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

if (document.querySelector(".search__icon")) {
  const searchButton = document.querySelector(".search__icon");
  const searchBlock = document.querySelector(".search");
  searchButton.addEventListener("click", function (e) {
    searchBlock.classList.toggle("_active");
  });
}
