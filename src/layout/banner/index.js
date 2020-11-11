import './banner.sass'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'

class Slider {
  constructor($root) {

    this.slider = new Swiper('.banner-swiper-container', {
      slidesPerView: 1,
      speed: 1500,
      watchOverflow: true,
      // autoplay: {
      //   delay: 5000,
      // },
      pagination: {
        el: '.banner__pagination',
      },
      navigation: {
        nextEl: '.banner__pagination-btn--next',
        prevEl: '.banner__pagination-btn--prev',
      },
      loopedSlides: $root.find('.banner-swiper-slide').length,
      on: {
        init() {}
      }
    })
  }
}

export default Slider
