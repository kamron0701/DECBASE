let banner = document.querySelector(".banner");
let bannerItems = document.querySelectorAll(".banner-content_item");

console.log(bannerItems);
let zero = 0;

// window.addEventListener("scroll", () => {
//     if (scrollY > banner.offsetTop - banner.clientHeight / 3) {
//         bannerItems.forEach((item) => {
//             item.style = `transform:translateX(${zero});
//                                   opacity:${1};`;
//         });
//     }
// });

// Swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 37,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Animations

window.addEventListener("DOMContentLoaded", () => {
    bannerItems.forEach((el) => {
        el.style = `transform:translateX(${zero});
                            opacity:${1};`;
    });
});
