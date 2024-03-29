"use strict";

(function (Drupal) {
  Drupal.behaviors.image_gallery = {
    attach: function attach(context, settings) {
      var lgSwiper = document.querySelector(".swiper-wrapper");
      if (lgSwiper && !lgSwiper.classList.contains("lg-swiper-initiated")) {
        var swiper = new Swiper(".product-content__gallery", {
          // other parameters
          navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev"
          },
          // Init lightGallery ince swiper is initilized
          on: {
            init: function init() {
              var lg = lightGallery(lgSwiper);

              // Before closing lightGallery, make sure swiper slide
              // is aligned with the lightGallery active slide
              lgSwiper.addEventListener("lgBeforeClose", function () {
                swiper.slideTo(lg.index, 0);
              });
            }
          }
        });
        lgSwiper.classList.add("lg-swiper-initiated");
      }
    }
  };
})(window.Drupal);