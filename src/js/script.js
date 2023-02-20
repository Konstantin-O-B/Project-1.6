// открытие/закрытие меню 


var burger = document.querySelector('#menu_btn');
var dropMenu = document.querySelector('.header__menu_drop-menu');
var list = dropMenu.querySelector('.drop-menu__list');
var elementsList = list.querySelectorAll('li');
var burgerMenu = document.querySelector('#menuBurg');
var str = document.querySelector('.string');
let liContainer = document.querySelector('.drop-menu__list');
let liContainerDiv = liContainer.querySelector('div');

burger.addEventListener('click', function(evt) {
    evt.preventDefault();
    dropMenu.classList.toggle('visibility');
    burgerMenu.classList.toggle('menu-burger-open');
    
});
console.log(burger)

let liUnactive = liContainer.querySelectorAll('.unactive');

liContainer.addEventListener('click', function(event){
    let target = event.target;
    if (target.classList.contains('unactive')) {
        for (i = 0; i < liUnactive.length; i++) {
            
            liUnactive[i].classList.remove('active');
        }
        target.classList.add('active');
    }
});


/* for (i = 0; i < liUnactive.length; i++) {
    elUn = liUnactive[i];
elUn.addEventListener('click', function(){
    
        if (elUn.classList.contains('active')) {
        this.classList.remove('active')
        } else {
        
        this.classList.add('active');
        }
});

}
 */

function showMore() {
    let containerBrands = document.querySelector('.swiper');
    let btnTxt = document.querySelector('#myBtn');

    if (containerBrands.style.height != String('')) {
        containerBrands.style.height = "";
        btnTxt.innerHTML = "Скрыть";
        /* btnTxt.style.backgroundImage = "url(../icon-rev.svg)"; */
    } else {
        containerBrands.style.height = "170px";
        btnTxt.innerHTML = "Показать все";
        /* btnTxt.style.backgroundImage = "url(arrows/icon.svg)"; */
    }
}







