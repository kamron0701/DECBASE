let banner = document.querySelector(".banner");
let bannerItems = document.querySelectorAll(".banner-content_item");
let aboutUsItems = document.querySelectorAll(".about-us_item");
let about = document.querySelector(".about");

console.log(bannerItems);
let zero = 0;

console.log(aboutUsItems);

window.addEventListener("scroll", () => {
    if (scrollY > about.offsetTop - about.clientHeight / 2) {
        aboutUsItems.forEach((item) => {
            item.style = `transform:translateX(${zero});
                                  opacity:${1};`;
        });
    }
});

// Swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 37,
    autoplay: true,
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
