import Swiper, { Pagination } from 'swiper';
import 'swiper/modules/pagination/pagination.scss';


let slider = document.querySelector(".swiper");
let mySwiper;
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
    spaceBetween: 35,
    loop: true,


  });

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
