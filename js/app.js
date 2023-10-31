// Banner section

let banner = document.querySelector(".banner");
let bannerItems = document.querySelectorAll(".banner-content_item");

// Service section
let servicesSection = document.querySelector(".services");
let serviceSubtitle = document.querySelector(".services-subtitle");
let serviceTitle = document.querySelector(".services-title");

console.log(serviceSubtitle);

// About us section
let aboutUsItems = document.querySelectorAll(".about-us_item");
let about = document.querySelector(".about");

// Experience section
let experience = document.querySelector(".experience");
let experienceItems = document.querySelectorAll(".experience-content_item");

// Testimonials
let testimonials = document.querySelector(".testimonials");
let testTitle = document.querySelector(".testimonial-title");
let testSubtitle = document.querySelector(".testimonial-subtitle");

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

window.addEventListener("scroll", () => {
    if (
        scrollY >
        servicesSection.offsetTop - servicesSection.clientHeight / 2
    ) {
        serviceSubtitle.style.transform = `translateY(0)`;
        serviceSubtitle.style.opacity = 1;
        serviceTitle.style.transform = `translateY(0)`;
        serviceTitle.style.opacity = 1;
    }
});
window.addEventListener("scroll", () => {
    if (scrollY > testimonials.offsetTop - testimonials.clientHeight / 2) {
        testTitle.style.transform = `rotateY(720deg)`;
        testTitle.style.opacity = 1;
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
