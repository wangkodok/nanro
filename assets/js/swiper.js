window.addEventListener("DOMContentLoaded", () => {
  new Swiper("#slider-visual", {
    loop: true,
    speed: 800,
    keyboard: true,
    mousewheel: false,
    resistance: true,
    resistanceRatio: 0,
    threshold: 20,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (current) {
        return current;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        const swiper = this;
        const nextBtn = document.querySelector(".swiper-button-next");
        const prevBtn = document.querySelector(".swiper-button-prev");

        // 버튼 클릭 중복 방지
        const delay = 1000;
        let isNavigating = false;

        nextBtn.addEventListener("click", function (e) {
          if (isNavigating || swiper.animating) {
            e.preventDefault();
            return;
          };
          isNavigating = true;
          setTimeout(() => isNavigating = false, delay);
        });

        prevBtn.addEventListener("click", function (e) {
          if (isNavigating || swiper.animating) {
            e.preventDefault();
            return;
          };
          isNavigating = true;
          setTimeout(() => isNavigating = false, delay);
        });
      },

      slideChangeTransitionStart: function () {
        // 슬라이드 전환 중에는 터치로 넘기지 못하게 막기
        this.allowTouchMove = false;
      },

      slideChangeTransitionEnd: function () {
        // 전환 끝나면 터치 다시 허용
        this.allowTouchMove = true;
      },

      progress: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          const slide = swiper.slides[i];
          const progress = slide.progress;
          const translateX = progress * (0.8 * swiper.width);

          const slideInner = slide.querySelector(".img-wrap") || slide.querySelector(".slide-inner");
          if (slideInner) {
            slideInner.style.transform = `translate3d(${translateX}px, 0, 0)`;
          };

          const titleArea = slide.querySelector(".title-area");
          if (titleArea) {
            titleArea.style.transform = `translate3d(${translateX}px, 0, 0)`;
          };
        };
      },

      touchStart: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        };
      },

      setTransition: function (speed) {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          const slide = swiper.slides[i];
          slide.style.transition = `${speed}ms`;

          const slideInner = slide.querySelector(".img-wrap") || slide.querySelector(".slide-inner");
          if (slideInner) {
            slideInner.style.transition = `${speed}ms`;
          };

          const titleArea = slide.querySelector(".title-area");
          if (titleArea) {
            titleArea.style.transition = `${speed}ms`;
          };
        };
      },
    },
  });
});