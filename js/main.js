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

    // slider News
    $('.slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    });
});

function initMap() {
    // The location of office
    let place = { lat: 40.678332, lng: -73.898346 };
    // The map, centered at the office
    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: place });
    // The marker, positioned at the office
    let marker = new google.maps.Marker({ position: place, map: map });
}