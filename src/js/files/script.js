// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

if (document.querySelector(".search__icon")) {
  const searchButton = document.querySelector(".search__icon");
  const searchBlock = document.querySelector(".search");
  searchButton.addEventListener("click", function (e) {
    searchBlock.classList.toggle("_active");
  });
}

if (isMobile.any()) {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu__arrow")) {
      const subMenuArrow = e.target;
      const subMenu = e.target.nextElementSibling;
      subMenu.classList.toggle("_open");
      subMenuArrow.classList.toggle("_active");
    }
  });
}
