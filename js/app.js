let banner = document.querySelector(".banner");
let bannerItems = document.querySelectorAll(".banner-content_item");
let aboutUsItems = document.querySelectorAll(".about-us_item");
let about = document.querySelector(".about");

let experience = document.querySelector(".experience");
let experienceItems = document.querySelectorAll(".experience-content_item");

console.log(experience);
console.log(experienceItems);

let zero = 0;

// Animations

window.addEventListener("DOMContentLoaded", () => {
    bannerItems.forEach((el) => {
        el.style = `transform:translateX(${zero});
                            opacity:${1};`;
    });
});

console.log(aboutUsItems);

window.addEventListener("scroll", () => {
    if (scrollY > about.offsetTop - about.clientHeight / 2) {
        aboutUsItems.forEach((item) => {
            item.style = `transform:translateX(${zero});
                                  opacity:${1};`;
        });
    }
});

window.addEventListener("scroll", () => {
    if (scrollY > experience.offsetTop - experience.clientHeight / 2) {
        experienceItems.forEach((item) => {
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
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 120,
    autoplay: true,
    navigation: {
        nextEl: ".testimonials-button-next",
        prevEl: ".testimonials-button-prev",
    },
});
