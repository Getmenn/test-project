import './js/image'
import './js/cities'

var swiper = new Swiper(".mySwiper", { //логика слайдера
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".arrow-revers",
        prevEl: ".arrow",
    },
    grabCursor: true,
});