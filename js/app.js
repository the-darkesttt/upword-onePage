let headerCheck = document.querySelector('#nav-check');
let headerLinks = document.querySelectorAll('.header__link');

const screenWidth = window.screen.width;
let body = document.querySelector('body');

if (screenWidth <= 768) {
    headerCheck.onclick = function(){
        if ( headerCheck.checked ){
            let styleTop = 59;
            for (let i = 0; i < headerLinks.length; i++){
                headerLinks[i].style.top = styleTop + 'px';
                styleTop += 59;
            }
    
            headerLinks.forEach(function(item){
                item.style.opacity = 1;
            });
            body.style.overflow = 'hidden';
        } else {
            headerLinks.forEach(function(item){
                item.style.opacity = 0;
                item.style.top = 0;
            });
            body.style.overflow = 'auto';
        }
    }

}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})