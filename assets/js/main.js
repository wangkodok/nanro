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
      close.classList.remove("active");
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

  // What We Do 아코디언 메뉴
  function accordionList() {
    const list = document.querySelectorAll(".accordion-item");
  
    function updateHeight() {
      list.forEach((item) => {
        const contentArea = item.querySelector(".contents-area");
        if (contentArea.style.visibility === "visible") {
          const height = item.querySelector(".contents-detail").offsetHeight;
          contentArea.style.height = `${height}px`;
        }
      });
    }
  
    list.forEach((item) => {
      item.addEventListener("click", () => {
        list.forEach((el) => {
          el.querySelector(".contents-area").style.height = "0px";
          el.querySelector(".contents-area").style.visibility = "hidden";
          el.classList.remove("active")
          el.setAttribute("aria-expanded", "false");
        });
  
  
        const contentArea = item.querySelector(".contents-area");
        const height = item.querySelector(".contents-detail").offsetHeight;
        contentArea.style.height = `${height}px`;
        contentArea.style.visibility = "visible";
  
        if (contentArea.style.visibility === "visible") {
          item.classList.add("active")
          item.setAttribute("aria-expanded", "true");
        }
      });
    });
  
    window.addEventListener("resize", updateHeight);
  }
  
  accordionList();

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

  // 푸터 영역 버튼 클릭
  const footerCopyButton = document.querySelector(".footer .nanro-info .copy-button");
  const address = document.querySelector(".footer .address-area");
  footerCopyButton.addEventListener("click", () => {
    if (address.classList.contains("active")) {
      footerCopyButton.classList.remove("active");
      address.classList.remove("active");
    } else {
      footerCopyButton.classList.add("active");
      address.classList.add("active");
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  });

  function click() {
    const clickElement = document.querySelector(".footer .language-area");
    clickElement.addEventListener("click", () => {
      if (clickElement.classList.contains("active")) {
        clickElement.classList.remove("active");
      } else {
        clickElement.classList.add("active");
      }
    });
  }

  click();

  // 마우스 커서
  const cursor = document.querySelector(".cursor");
  const cursorMore = document.querySelector(".cursor-more");
  const postItem = this.document.querySelectorAll(".sec-post .post-item .link");
  

  function cursorMouseMove(e) {
    if (e.isTrusted === true) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      // cursor.style.width = "10px";
      // cursor.style.height = "10px";
      // cursor.style.display = "block";
      
      cursor.style.top = (mouseY - document.documentElement.scrollTop) + "px";
      cursor.style.left = (mouseX - document.documentElement.scrollLeft) + "px";

      // cursorMore.style.width = "100px";
      // cursorMore.style.height = "100px";
      // // cursorMore.style.display = "flex";
      // cursorMore.style.top = (mouseY - document.documentElement.scrollTop) + "px";
      // cursorMore.style.left = (mouseX - document.documentElement.scrollLeft) + "px";
    }
  }
  
  document.addEventListener("mousemove", cursorMouseMove);

  for (let i = 0; i < postItem.length; i++) {
    postItem[i].addEventListener("mouseenter", () => {
      // cursorMore.classList.add("active");
      cursor.classList.add("active");
    });
    
    postItem[i].addEventListener("mouseleave", () => {
      // cursorMore.classList.remove("active");
      cursor.classList.remove("active");
    });
  }
});