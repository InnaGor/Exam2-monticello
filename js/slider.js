$(() => {
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        dots: true,
        dotsClass: "vertical-dots",
    });
    $('.slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    });
});
