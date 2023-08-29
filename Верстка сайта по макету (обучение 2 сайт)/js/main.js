$(function () {

  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault;
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $(this).toggleClass('burger--active')
  })


  $("#rateYo").rateYo({
    starWidth: "40px"
  })

  var mixer = mixitup('.blog__list');
  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  $('.service__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    appendDots: $('.service__dots'),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.service__prev').on('click', function (e) {
    e.preventDefault()
    $('.service__slider').slick('slickPrev')
  })

  $('.service__next').on('click', function (e) {
    e.preventDefault()
    $('.service__slider').slick('slickNext')()
  })


  $('.ask__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('ask__acc-link--active')) {
      $(this).removeClass('ask__acc-link--active')
      $(this).children('.ask__acc-text').slideUp()
    }
    else {
      $('.ask__acc-link').removeClass('ask__acc-link--active')
      $('.ask__acc-text').slideUp()
      $(this).addClass('ask__acc-link--active')
      $(this).children('.ask__acc-text').slideDown()
    }
  })
})