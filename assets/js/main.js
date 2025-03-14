window.addEventListener("load", function () {
  const clickElement = document.querySelector(".button-search");
  const formSearchArea = document.querySelector(".form-search-area");

  clickElement.addEventListener("click", () => {
    if (clickElement.classList.contains("active")) {
      formSearchArea.classList.remove("active");
    } else {
      formSearchArea.classList.add("active");
      close.classList.add("active");
    }
  });

  const close = document.querySelector(".button-close");

  close.addEventListener("click", () => {
    if (!clickElement.classList.contains("active")) {
      formSearchArea.classList.remove("active");
    } else {
      formSearchArea.classList.add("active");
      close.classList.add("active");
    }
  });

  const gnbNav = document.querySelectorAll(".gnb-nav .list .item");

  function lnbList(i) {
    return gnbNav[i].querySelector(".lnb-list")
  };

  for (let i = 0; i < gnbNav.length; i++) {
    const result = lnbList(i);

    gnbNav[i].addEventListener("mouseenter", () => {
      if (result) {
        result.classList.add("active");
        setTimeout(() => {
          result.style.opacity = 1;
        }, 100)
      }
    });

    gnbNav[i].addEventListener("mouseleave", () => {
      if (result) {
        result.classList.remove("active");
        setTimeout(() => {
          result.style.opacity = 0;
        }, 100)
      }
    });
  };
});