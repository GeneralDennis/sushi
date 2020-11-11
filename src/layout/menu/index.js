import './menu.sass'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'

class MenuSlider {
  constructor($root) {

    this.slider = new Swiper('.menu-swiper-container', {
      // slidesPerView: 4,
      speed: 1000,
      watchOverflow: true,
      // spaceBetween: 28,
      // autoplay: {
      //   delay: 10000,
      // },
      pagination: {
        el: '.menu__pagination-dots',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 32,
          centeredSlides: true,
        },
        559: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: false
        },
        790: {
          slidesPerView: 3,
          spaceBetween: 25,
          centeredSlides: false
        },
        1180: {
          slidesPerView: 4,
          spaceBetween: 28,
          centeredSlides: false
        },
      },
      navigation: {
        nextEl: '.menu__pagination-btn--next',
        prevEl: '.menu__pagination-btn--prev',
      },
      loopedSlides: $root.find('.menu-swiper-slide').length,
      on: {
        init() {}
      }
    })
    const $blocks = $('.menu-specials__block');
    function showList(index){
      $blocks.removeClass('menu-specials__block--show');
      $blocks[index].classList.add('menu-specials__block--show');
      console.log($blocks[index]);
    }

    const $tab = $('.menu-specials__item');
    $tab.each(function(index) {
      $(this).on('click', (e)=>{
        $tab.removeClass('menu-specials__item--active');
        e.currentTarget.classList.add('menu-specials__item--active');
        console.log(e, index);
        showList(index)
      })
    })

  }
}

export default MenuSlider
