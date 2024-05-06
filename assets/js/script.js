// navbar scrolled js
const navbar = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


// aos inti
AOS.init()


/*========== image move =============*/
document.addEventListener('mousemove', (e) => {
    const image = document.getElementById('moving-image');
    image.style.transform = `translateX(20px, 20px)`;
});

/*========== swiper slide =============*/
    new Swiper('.swiper', {
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 2,
        pagination: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
        },
    });


    new Swiper('.payment-method', {
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 6,
        pagination: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
        },
    });
