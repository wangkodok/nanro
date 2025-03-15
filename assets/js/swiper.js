    
window.addEventListener("DOMContentLoaded", () => {
  var mainSwiper = new Swiper(".main_slide", {
    parallax: true,
    // grabCursor: true,
    loop: true,
    effect: "slide",
    direction: "horizontal",
    allowTouchMove: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    a11y : false,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // renderBullet: function (index, className) {
      //   console.log(index, className);
      //   // return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
      //   return `
      //     <button class="${className}">슬라이드${index}번</button>
      //   `;
      // },
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        console.log(currentClass, totalClass)
        return `
          <span class="${currentClass}"></span>
          <span class="swiper-pagination-mark">/</span>
          <span class="${totalClass}"></span>
        `
      }
    },
  });
})