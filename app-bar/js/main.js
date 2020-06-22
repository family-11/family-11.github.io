$(function(){

    $('.slider__slider').slick({
        nextArrow:'<button type="button" class = "slick-arrow slick-next"><img class="img-arr" src="img/left.svg" alt="next"></button>',
        prevArrow:'<button type="button" class = "slick-arrow slick-prev"><img class="img-arr" src="img/right.svg" alt="back"></button>',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 660,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      /*
      $('.slick-arrow.slick-next.slick-disabled').each(function(){
        $('.img-arr').attr('src','ggg');
      });
      */
     $('.slider__item').on('click',function(){
        $(this).toggleClass('active');
      
     });
     $('.slider__item-hide').on('click',function(){
        $(this).toggleClass('active');
     });

     $('.burger__burger').click(function(event){
        $('.burger__burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
     

     


     ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.769515, 37.592497],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/myIcon.gif',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -42]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([55.769515, 37.592497], {
                hintContent: 'TASTY-WORLD',
                balloonContent: 'А эта — новогодняя',
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../img/poi.svg',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });

  
});