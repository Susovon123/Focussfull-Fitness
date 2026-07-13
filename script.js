// navbar toggle
let hamburger = document.querySelector(".hamburger");
let mobileNavbar = document.querySelector(".mobile-navbar");
let icon = hamburger.querySelector("i");

hamburger.onclick = () => {
    mobileNavbar.classList.toggle("active"); // Slides menu in/out
    icon.classList.toggle("fa-bars");        // Toggles bars icon
    icon.classList.toggle("fa-xmark");       // Toggles close (X) icon
};

// model toggle 


// service toggle
const arrow = document.querySelector('.right-arrow'); 
const arrow1 = document.querySelector('.right-arrow1');
// query selector here select only one class which denote .right-arrow
const image = document.querySelector('.service-img'); 
const image1=document.querySelector('.service-img1');
// here addeventlistner is dom event type method inside this "give some string then create arrow function
arrow.addEventListener('click', () => {
    // under classlist property used toggle method to show 
    image.classList.toggle('show'); // it basicallytoogle method create one normal class in js
    // it is importent to give one class in toggle because it will be not shown 
   
}); 
arrow1 .addEventListener('click', () =>{
    image1.classList.toggle('show');
})


// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // 320px and up
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    // 480px and up
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    // 545px and up
    545: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    // 778px and up
    778: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    // 991px and up
    991: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    // 1200px and up
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});



