// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

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

const searchButton = document.querySelector(".search__icon");
const searchLine = document.querySelector("#search-line");
const searchBlock = document.querySelector(".search");
const searchResultList = document.querySelector(".search__results-list");

const items = {
  oilChange: {
    link: "https://example.com/oil-change",
  },
  brakeReplacement: {
    link: "https://example.com/brakeReplacement",
  },
  tireRotation: {
    link: "https://example.com/tireRotation",
  },
  engineTuneUp: {
    link: "https://example.com/engineTuneUp",
  },
};

if (searchButton) {
  searchButton.addEventListener("click", function (e) {
    searchBlock.classList.toggle("_active");
    const isActive = searchBlock.classList.contains("_active");

    if (isActive) {
      setTimeout(function () {
        searchBlock.style.overflow = "visible";
      }, 300);

      searchResultList.style.display = "none";
    } else {
      searchBlock.style.overflow = "hidden";
    }
  });
}

searchLine.addEventListener("input", function () {
  let value = this.value.trim().toLowerCase();
  let searchResultsHTML = "";
  let valueInput = false;
  searchResultList.style.display = "none";
  if (value !== "") {
    searchResultList.style.display = "grid";
    valueInput = true;
    for (let key in items) {
      let formattedKey = key.replace(/([A-Z])/g, " $1").trim();

      if (formattedKey.toLowerCase().includes(value)) {
        searchResultsHTML += `<li class="search__item"><a href="${items[key].link}" class="search__link">${formattedKey}</a></li>`;
      }
    }
  }

  if (searchResultsHTML === "" && valueInput) {
    searchResultsHTML = `<li class="search__item"><p class="search__nothing">Nothing found</p></li>`;
  }

  searchResultList.innerHTML = searchResultsHTML;
});
