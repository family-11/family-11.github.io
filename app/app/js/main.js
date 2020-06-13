$(function(){

    $('.slider__container').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
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
        ]
      });
      window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 500);
      }

      $("#tab").pagination({
        items: 3,
        contents: 'contents',
        previous: 'Назад',
        next: 'Далее',
        position: 'bottom',
        
        });
       $('.header__burger-burger').click(function(event){
            $('.header__burger-burger,.header__burger-hide').toggleClass('active');
       });
        

  
});