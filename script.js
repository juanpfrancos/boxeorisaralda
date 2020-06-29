
//Swiper Slider

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.sw-container', {
  slidesPerView: 1,
  spaceBetween: 5,
  // init: false,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
},
autoplay: {
delay: 2500,
disableOnInteraction: false,
},
});

var swiper = new Swiper('.swiper-escuelas', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
});

//Whatsapp Form



document.querySelector('#submit').addEventListener('click',function(){
    
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    let url = "https://api.whatsapp.com/send?phone=573207678605"+"&text=*_Whatsapp Webform_*%0A%0A*Name:*%0A" + name + "%0A*E-Mail*%0A" + email + "%0A*Message:*%0A" + message;
    window.open(url);

});