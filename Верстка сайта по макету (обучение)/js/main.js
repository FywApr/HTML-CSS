$(function () {

    var mixer = mixitup('.directions__list');
  
    $('.directions__filter-btn').on('click', function () {
      $('.directions__filter-btn').removeClass('directions__filter-btn--active')
      $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      draggable: false,
      waitForAnimate: false,
      responsive:
      [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            draggable: true, //сенсор
            arrows: false,
          }
        },
      ]
    })

    $('.team__slider-prev').on('click', function (e) { /*on-нажатие*/
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e){
      e.preventDefault()
      $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.testimonials__dots'),
      responsive:
      [
        {
          breakpoint: 700,
          settings: {
          }
        },
      ]
    })

    $('.testimonials__prev').on('click', function (e) { /*on-нажатие*/
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')
    })

    $('.testimonials__next').on('click', function (e){
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext')()
    })
    
   /* $('.program__acc-link').on('click', function (e){
      e.preventDefault()
      $(this).toggleClass('program__acc-link--active')   this - на кого кликнул
      $(this).children('.program__acc-text').slideToggle()
    }) */
    
    $('.program__acc-link').on('click', function (e){
      e.preventDefault()
      if ($(this).hasClass('program__acc-link--active')) { /*кому тыкнул тот открывается*/
        $(this).removeClass('program__acc-link--active') /*без . потому что есть Class*/
        $(this).children('.program__acc-text').slideUp()
      } /*() - условия {} - события*/
      else { /*всё закрыто*/
        $('.program__acc-link').removeClass('program__acc-link--active')
        $('.program__acc-text').slideUp()
        $(this).addClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideDown()
      }
      })

      $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
         //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault()
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 100 //100px выше
        //анимируем переход на расстояние - top за 800 мс
        $('body,html').animate({ scrollTop: top }, 800)
            })

            

        $('.burger, .overlay, .header__top a').on("click", function (e) {
          e.preventDefault()
          $('.header__top').toggleClass('header__top--open')
          $('.overlay').toggleClass('overlay--show')
        })

        $('.footer__top-title--slide').on('click', function() {
          $(this).next().slideToggle()
        })
    })