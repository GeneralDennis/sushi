import './about.sass'

export default () => {
  $(()=>{
    const $root = $('.about');
    const $showMore = $root.find($('.about__show-more'));
    const $content = $root.find($('.about__content'));
    if($showMore){
      $showMore.on('click', ()=>{
        $showMore.addClass('about__show-more--hide');
        $content.addClass('about__content--show');
      })
    }
  })
}
