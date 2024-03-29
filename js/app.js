(() => {
  "use strict";
  let e = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
      );
    },
  };
  let t = !0,
    n = (e = 500) => {
      let n = document.querySelector("body");
      if (t) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    },
    o = (e = 500) => {
      let n = document.querySelector("body");
      if (t) {
        let o = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < o.length; e++) {
          o[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  const r = { inputMaskModule: null, selectModule: null };
  let l = {
    getErrors(e) {
      let t = 0,
        n = e.querySelectorAll("*[data-required]");
      return (
        n.length &&
          n.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`,
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error"),
          );
    },
    formClean(e) {
      e.reset(),
        setTimeout(() => {
          let t = e.querySelectorAll("input,textarea");
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            n.parentElement.classList.remove("_form-focus"),
              n.classList.remove("_form-focus"),
              l.removeError(n),
              (n.value = n.dataset.placeholder);
          }
          let n = e.querySelectorAll(".checkbox__input");
          if (n.length > 0)
            for (let e = 0; e < n.length; e++) {
              n[e].checked = !1;
            }
          if (r.selectModule) {
            let t = e.querySelectorAll(".select");
            if (t.length)
              for (let e = 0; e < t.length; e++) {
                const n = t[e].querySelector("select");
                r.selectModule.selectBuild(n);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  let a = !1;
  setTimeout(() => {
    if (a) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    e.any() &&
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("menu__arrow")) {
          const t = e.target;
          e.target.nextElementSibling.classList.toggle("_open"),
            t.classList.toggle("_active");
        }
      });
  const i = document.querySelector(".search__icon"),
    c = document.querySelector("#search-line"),
    s = document.querySelector(".search"),
    d = document.querySelector(".search__results-list"),
    u = {
      oilChange: { link: "https://example.com/oil-change" },
      brakeReplacement: { link: "https://example.com/brakeReplacement" },
      tireRotation: { link: "https://example.com/tireRotation" },
      engineTuneUp: { link: "https://example.com/engineTuneUp" },
    };
  i &&
    i.addEventListener("click", function (e) {
      s.classList.toggle("_active");
      s.classList.contains("_active")
        ? (setTimeout(function () {
            s.style.overflow = "visible";
          }, 300),
          (d.style.display = "none"))
        : (s.style.overflow = "hidden");
    }),
    c.addEventListener("input", function () {
      let e = this.value.trim().toLowerCase(),
        t = "",
        n = !1;
      if (((d.style.display = "none"), "" !== e)) {
        (d.style.display = "grid"), (n = !0);
        for (let n in u) {
          let o = n.replace(/([A-Z])/g, " $1").trim();
          o.toLowerCase().includes(e) &&
            (t += `<li class="search__item"><a href="${u[n].link}" class="search__link">${o}</a></li>`);
        }
      }
      "" === t &&
        n &&
        (t =
          '<li class="search__item"><p class="search__nothing">Nothing found</p></li>'),
        (d.innerHTML = t);
    });
  const m = document.querySelector(".video-module");
  m &&
    m.addEventListener("click", function (e) {
      m.classList.toggle("_play-video");
      const t = m.querySelector("video");
      m.classList.contains("_play-video") ? t.play() : t.pause();
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    e.any() && document.documentElement.classList.add("touch"),
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add("loaded");
      }, 0);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          t &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? n(e) : o(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
        function t() {
          let e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${e}px`);
        }
        window.addEventListener("resize", t), t();
      }
    })(),
    (function () {
      const e = document.querySelectorAll(
        "input[placeholder],textarea[placeholder]",
      );
      e.length &&
        e.forEach((e) => {
          e.dataset.placeholder = e.placeholder;
        }),
        document.body.addEventListener("focusin", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = ""),
            t.classList.add("_form-focus"),
            t.parentElement.classList.add("_form-focus"),
            l.removeError(t));
        }),
        document.body.addEventListener("focusout", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
            t.classList.remove("_form-focus"),
            t.parentElement.classList.remove("_form-focus"),
            t.hasAttribute("data-validate") && l.validateInput(t));
        });
    })();
})();
