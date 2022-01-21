// contact part start =========
$('.contact_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false,
  });
// contact part end =========


 // banner part start==========
 $('.header_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
  });
// banner part end============

 // banner part start==========
 $('.banner_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
  });
// banner part end============


new VenoBox({
    selector: '.my-video-links',
});


// backto top start =======

//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back_to_top').fadeIn(200)
    } else{
        $('.back_to_top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back_to_top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
// backto top end =========