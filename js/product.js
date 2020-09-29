$(function () {
  //nav
  $('.header__btnGnavi').on('click', function () {
    var rightVal = -0
    if ($(this).hasClass('open')) {
      rightVal = -260
      $(this).removeClass('open')
    } else {
      $(this).addClass('open')
    }
    $('#header__global-navi').stop().animate(
      {
        right: rightVal,
      },
      200
    )
  })
})

$(window).on("scroll", function(){
    $(".Gallery__wrap--selectSize").css("left", -$(window).scrollLeft());
});
