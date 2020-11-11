import './reviews.sass'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'

class ReviewsSlider {
  constructor($root) {

    this.slider = new Swiper('.reviews-swiper-container', {
      slidesPerView: 3,
      speed: 1000,
      watchOverflow: true,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 5000,
      // },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 32,
          centeredSlides: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
          centeredSlides: false
        },
        1180: {
          slidesPerView: 3,
          spaceBetween: 28,
          centeredSlides: false
        },
      },
      loopedSlides: $root.find('.reviews-swiper-slide').length,
      on: {
        init() {}
      }
    })

  }
}

export default ReviewsSlider
