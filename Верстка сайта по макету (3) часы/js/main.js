$(function () {


  $('.burger').on('click', function (e) {
    e.preventDefault();
    $('.overlay').toggleClass('overlay--show')
    $('.header__tow').toggleClass('header__tow--open')
    $('.header__top').toggleClass('header__top--open')
    $(this).toggleClass('burger--active')
  });

})
