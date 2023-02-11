const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoHeight: true,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 80
        },
        1200: {
            slidesPerView: 3,
        },
    },
});
