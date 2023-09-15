ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.842661, 37.502166],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Я нахожусь тут',
            balloonContent: 'Я здесь'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});

window.addEventListener("resize", function() { 
if (window.screen.height < 801 && window.screen.height > 780 && window.screen.width > 1270 && window.screen.width < 1281){
    let swiper = new Swiper('.swiper', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  touchRatio: 1,
  touchAngel: 45,
  grabCursor: true,

  keyboard: {
    eneable: true,
    onlyinViweport: true,
    pageUpDown: true,
  },


  slidesPerView: 6,
  spaceBetween: 40,
});
  }else{
    let swiper = new Swiper('.swiper', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  touchRatio: 1,
  touchAngel: 45,
  grabCursor: true,

  keyboard: {
    eneable: true,
    onlyinViweport: true,
    pageUpDown: true,
  },


  slidesPerView: 4,
  spaceBetween: 40,
});
};
});

if (window.screen.height == 800 && window.screen.width == 1280){
    let swiper = new Swiper('.swiper', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  touchRatio: 1,
  touchAngel: 45,
  grabCursor: true,

  keyboard: {
    eneable: true,
    onlyinViweport: true,
    pageUpDown: true,
  },


  slidesPerView: 6,
  spaceBetween: 40,
});
  }else{
    const swiper = new Swiper('.swiper', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  touchRatio: 1,
  touchAngel: 45,
  grabCursor: true,

  keyboard: {
    eneable: true,
    onlyinViweport: true,
    pageUpDown: true,
  },


  slidesPerView: 4,
  spaceBetween: 40,
});
};
if (window.screen.height <= 960 && window.screen.width <= 640){
    let swiper = new Swiper('.swiper', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  touchRatio: 1,
  touchAngel: 45,
  grabCursor: true,

  keyboard: {
    eneable: true,
    onlyinViweport: true,
    pageUpDown: true,
  },


  slidesPerView: 2,
  spaceBetween: 40,
});
  }else{
    const swiper = new Swiper('.swiper', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  touchRatio: 1,
  touchAngel: 45,
  grabCursor: true,

  keyboard: {
    eneable: true,
    onlyinViweport: true,
    pageUpDown: true,
  },


  slidesPerView: 4,
  spaceBetween: 40,
});
};




console.log(window.screen.height)

console.log(window.screen.width)

button1.onclick = function() {
  document.getElementsByClassName('popup')[0].style.opacity = "1";
  document.getElementsByClassName('popup')[0].style.visibility = "visible";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function Closed() {
  document.getElementsByClassName('popup')[0].style.opacity = "0";
  document.getElementsByClassName('popup')[0].style.visibility = "hidden";
  document.getElementsByTagName("body")[0].style.overflow = "visible";
}



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
  
  