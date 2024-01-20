(function (Drupal) {
  Drupal.behaviors.image_gallery = {
    attach: function (context, settings) {
      let lgSwiper = document.querySelector('.swiper-wrapper');

      console.log(123);
      console.log(lightGallery);

      if (lgSwiper && !lgSwiper.classList.contains('lg-swiper-initiated')) {
        const swiper = new Swiper('.product-content__gallery', {
            // other parameters
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
  
            // Init lightGallery ince swiper is initilized
            on: {
                init: function () {
                    const lg = lightGallery(lgSwiper);
  
                    // Before closing lightGallery, make sure swiper slide
                    // is aligned with the lightGallery active slide
                    lgSwiper.addEventListener('lgBeforeClose', () => {
                        swiper.slideTo(lg.index, 0)
                    });
                },
            }
        });

        lgSwiper.classList.add('lg-swiper-initiated')
      }

    }
  };
})(window.Drupal);