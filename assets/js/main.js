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

  // 스크롤 시 애니메이션
  function scrollAppear() {
    const section = document.querySelectorAll(".sec-word");
    const sectionStart = 360; // 뷰포트 bottom 기준 픽셀 시작 위치
    const screenPosition = window.innerHeight;

    for (let i = 0; i < section.length; i++) {
      const textPosition = section[i].getBoundingClientRect().top + sectionStart;

      if (textPosition < screenPosition) {
        section[i].classList.add("animation");
      } else {
        section[i].classList.remove("animation");
      }
    }

    const accordionItem = document.querySelectorAll(".accordion-item");
    const accordionItemStart = 286; // 뷰포트 bottom 기준 픽셀 시작 위치
    for (let i = 0; i < accordionItem.length; i++) {
      const itemPosition = accordionItem[i].getBoundingClientRect().top + accordionItemStart;

      if (itemPosition < screenPosition) {
        accordionItem[i].classList.add("animation");
      } else {
        accordionItem[i].classList.remove("animation");
      }
    }

    const postItem = document.querySelectorAll(".sec-post .post-item");
    const postItemStart = 100; // 뷰포트 bottom 기준 픽셀 시작 위치
    let time = 200;
    for (let i = 0; i < postItem.length; i++) {
      const itemPosition = postItem[i].getBoundingClientRect().top + postItemStart;
      if (itemPosition < screenPosition) {
        setTimeout(() => {
          postItem[i].classList.add("animation");
        }, time)
      } else {
        postItem[i].classList.remove("animation");
      }
      time = time + 200;
    }
  }

  scrollAppear(); // 해당하는 섹션에서 새로 고침하면 실행
  window.addEventListener("scroll", scrollAppear);

  // 스크롤 시 애니메이션 후 이미지 슬라이더
  function imgWrap(imgElement) {
    const img = document.querySelectorAll(imgElement);
    console.log(img);
    let count = 0;
  
    setInterval(() => {
      console.log(count);
      count = count === 1 ? 0 : count + 1;
    }, 2000);
  
    function moveImage() {
      setTimeout(() => {
        img[1].style.left = "100%";
  
        setTimeout(() => {
          img[1].style.left = "0";
          img[1].style.zIndex = "-2";
  
          if (count === 0) {
            setTimeout(() => {
              img[0].style.left = "100%";
  
              setTimeout(() => {
                img[0].style.left = "0";
                img[0].style.zIndex = "-1";
                img[1].style.left = "0";
                img[1].style.zIndex = "-1";
  
                // 무한 반복을 위해 moveImage() 다시 호출
                moveImage();
              }, 2000);
            }, 2000);
          } else {
            // count가 1일 때도 moveImage() 다시 호출
            moveImage();
          }
        }, 2000);
      }, 2000);
    }
  
    // 무한 반복 시작
    moveImage();
  }

  imgWrap("#img-wrap_1 img");
  imgWrap("#img-wrap_3 img");
  setTimeout(() => {
    imgWrap("#img-wrap_2 img");
    imgWrap("#img-wrap_4 img");
  }, 2000);
});