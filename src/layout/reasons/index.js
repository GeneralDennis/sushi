import './reasons.sass'

export default () => {
  $(()=>{
    const $root = $('.reasons');
    const $showMore = $root.find($('.reasons__show-more'));
    const $cards = $root.find($('.reasons-cards'));
    if($showMore){
      $showMore.on('click', ()=>{
        $showMore.addClass('reasons__show-more--hide');
        $cards.addClass('reasons-cards--show');
      })
    }
  })
}
