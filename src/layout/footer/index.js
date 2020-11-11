import './footer.sass';

export default () => {
  $(()=>{
    const $title = $('.footer__block-title');
    const $list = $('.footer__block-inner');
    $title.on('click', function(){
      $(this).toggleClass('footer__block-title--open');
      $(this).next($list).slideToggle();
    })
  })
}
