$(document).ready(() => {
    InitCarousel();
});


const InitCarousel = () => {
    $('.owl-carousel').owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
    })
}


let DefaultValue = 50_269_923_500.01

setInterval(() => {
    DefaultValue += Math.floor(Math.random() * 50);
    console.log(DefaultValue)
    $('#odometer').html(DefaultValue)
}, 4000)
