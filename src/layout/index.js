import './base';
import './grid';
import './wrapper';
import './content';
import './header';
import './footer';
import './card';
import './menu';
import './reasons';
import './review';
import './title';
import './callback';
import './about';

import Slider from './banner'
import MenuSlider from './menu'
import ReviewsSlider from  './reviews'
import Reasons from './reasons'
import About from './about'
import Footer from './footer'

let $banner = $('.banner')
if ($banner.length) {
  new Slider($banner)
}

let $menu = $('.menu')
if ($menu.length) {
  new MenuSlider($menu)
}
let $reviews = $('.reviews')
if($reviews.length){
  new ReviewsSlider($reviews)
}

let $reasons = $('.reasons')
if ($reasons.length) {
  new Reasons($reasons)
}

let $about = $('.about')
if ($about.length) {
  new About($about)
}

let $footer = $('.footer')
if ($footer.length) {
  new Footer($footer)
}

export default () => {
  console.log('init layout');
};
