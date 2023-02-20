import Swiper, { Pagination } from 'swiper';
import 'swiper/modules/pagination/pagination.scss';



let slider = document.querySelector(".swiper");
let sliderSecond = document.querySelector(".swiper_second");
let sliderThird = document.querySelector(".swiper_third");
let mySwiper;
let mySwiper_second;
let mySwiper_third;
let windowWidth = window.innerWidth;


function mobileSlider() {
 if (windowWidth <= 400 && slider.dataset.mobile == 'false')  { 
mySwiper = new Swiper(slider, {
    modules: [Pagination],
    slideClass: 'slide',
    speed: 400,
    spaceBetween: 100,
    
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        

    },

    slidesPerView: 1.3,
    spaceBetween: 16,
    loop: true,


  });
 
  mySwiper_second = new Swiper(sliderSecond, {
    modules: [Pagination],
    slideClass: 'slide',
    speed: 400,
    spaceBetween: 100,
    
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        

    },

    slidesPerView: 1.3,
    spaceBetween: 16,
    loop: true,

  })

  mySwiper_third = new Swiper(sliderThird, {
    modules: [Pagination],
    slideClass: 'slide',
    speed: 400,
    spaceBetween: 100,
    
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        

    },

    slidesPerView: 1.3,
    spaceBetween: 16,
    loop: true,

  })

  slider.dataset.mobile = 'true';
} 

if (windowWidth > 400){
  slider.dataset.mobile = 'false';

   if (slider.classList.contains('swiper-initialized')) { 
  mySwiper.destroy();
     } 
  }
}

mobileSlider();

window.addEventListener('resize', function() {
  mobileSlider();
  console.log("вот ресайз")
});
