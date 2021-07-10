$('.box_slider').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})
$('.adv_slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})

$(document).ready(function () {
    new Mmenu(document.querySelector('#menu-mobile'),{
        "extensions": [
            "pagedim-black"
         ]
    });

    document.addEventListener('click', function (evnt) {
        var anchor = evnt.target.closest('a[href^="#/"]');
        if (anchor) {
            evnt.preventDefault();
        }
    });
});