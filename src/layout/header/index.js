import './header.sass';

$(()=>{
  const dropDownBtn = $('.js-open-dropmenu');
  const dropDownMenu = $('.container--drop-menu');
  if(dropDownBtn){
    dropDownBtn.on('click', ()=>{
      dropDownMenu.slideToggle();
      dropDownBtn.toggleClass('header-menu__item--open');
    })
  }
})
