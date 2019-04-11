// plus, minus
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

