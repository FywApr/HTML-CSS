$(function () {
  let mixer = mixitup('.free__list')

  $('.free__filter-btn').on('click', function () {
    $('.free__filter-btn').removeClass('free__filter-btn--active')
    $(this).addClass('free__filter-btn--active')
  })

  $('.free__link-fvr').on('click', function (e) {
    if (e.currentTarget) {
      $('.free__list-item').addClass('free__list-item--favourite');
    }
  })
})

