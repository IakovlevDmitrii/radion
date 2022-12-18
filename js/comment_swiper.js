const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // fade cube slide
    // spaceBetween: 30,
    // speed: 400,
    // centeredSlides: true,
    // zoom: true,
    // autoHeight: true,

    // slidesOffsetBefore: 20,
    // slidesOffsetAfter: 2,

    // watchSlidesProgress: true,

    // resizeObserver: true,
    // resistance: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            // spaceBetween: 20
        },
        1220: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    },
});
