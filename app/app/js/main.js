$(function(){

    $('.slider__container').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
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
            $('body').toggleClass('lock');
       });
       $('.nav__burger-burger').click(function(event){
        $('.nav__inner,.nav__burger-burger').toggleClass('active');
   });
       $('.header__search').click(function(event){
        $('.header__search-input').toggleClass('active');
        });
    
});