// plus, minus
/*
$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$(document).ready(function(){
    var swiper = new Swiper('.swiper-container-first', {
        navigation: {
            nextEl: '.swiper-button-next-first',
            prevEl: '.swiper-button-prev-first'
        },

        slidesPerView:5,
        spaceBetween:0,
        loop: true
    });

});

*/ 

// swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// basket 
$(document).ready(function(){
  var counter = 0;
  var price = 0;
	$(".basket").click(function(){
    $('.basket-img').attr('src','img/basket_full.png');
    $('.basket-counter').css('display', 'block');
    $('.basket-counter').html(++counter);
    $('.basket-price').html(price +=100);
    return counter,price;
    })
});