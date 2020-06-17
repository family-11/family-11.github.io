$(function(){

    $('.slider__container').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        fade:true
      });

      /*window.onload = function () {
        document.body.classList.add('loaded');
      }
      window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 500);
      }
      */
      setTimeout(function(){
        $('.loader_bg').fadeToggle();
      }, 1000);




      $("#tab").pagination({
        items: 3,
        contents: 'contents',
        previous: 'Назад',
        next: 'Далее',
        position: 'bottom',
        });



       $('.header__burger-burger,.header__burger-partners-title').click(function(event){
            $('.header__burger-burger,.header__burger-hide').toggleClass('active');
            $('body').toggleClass('lock');
       });
       $('.nav__burger-burger').click(function(event){
        $('.nav__inner,.nav__burger-burger').toggleClass('active');
        });
       $('.header__search').click(function(event){
        $('.header__search-input').toggleClass('active');
        
        $('.header__logo-inner').toggleClass('active');
        });
        $('.nav__burger-burger-1').click(function(event){
          $('.header__photos-1').toggleClass('active');
          });


        
          
          
          function check(){
          var submit = document.getElementsByClassName('submit')[0];
          if (document.getElementById('politics').checked)
          submit.disabled = '';
          else
          submit.disabled = 'disabled';
          }
          $('.form__btn').click(function(event){
            check();
            });

          
          
            new WOW().init()

            $('input,textarea').each(function(){
              var placeholder = $(this).attr('placeholder');
              $(this).focus(function(){
                $(this).attr('placeholder',"");
                return!1
              });
              $(this).focusout(function() {
                $(this).attr('placeholder',placeholder);
                return!1
              })

            });
    
});