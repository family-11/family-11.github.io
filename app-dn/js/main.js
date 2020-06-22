$(function(){
        $('.slider__items').slick({
            nextArrow:'<button type="button" class = "slick-arrow slick-next"><img src="img/arrow-right.svg" alt="next"></button>',
            prevArrow:'<button type="button" class = "slick-arrow slick-prev"><img src="img/arrow-left.svg" alt="back"></button>',
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 0,
            dots:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 766,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  nextArrow:'<button type="button" class = "slick-arrow slick-next"><img src="img/arrow-next-white.svg" alt="next"></button>',
            prevArrow:'<button type="button" class = "slick-arrow slick-prev"><img src="img/arrow-pvrev-white.svg" alt="back"></button>',
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

        $('.header__burger').click(function(event){
            $('.header__burger,.header__inner').toggleClass('active');
            $('body').toggleClass('lock');
        });
        $('.cart__exit').click(function(event){
          $('.cart').toggleClass('active');
          $('body').toggleClass('none');
        });
        $('.header__orders-cart').click(function(event){
          $('.cart').toggleClass('active');
          $('body').toggleClass('none');
        });
        $('.header__burger-cart').click(function(event){
          $('.cart').toggleClass('active');
          $('body').toggleClass('none');
        });


        jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up1">+</div><div class="quantity-button quantity-down1">-</div></div>').insertAfter('.quantity input');
        jQuery('.quantity').each(function() {
          var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up1'),
            btnDown = spinner.find('.quantity-down1'),
            min = input.attr('min'),
            max = input.attr('max');
    
          btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 7;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
    
          btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 7;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
    
        });

        jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up2">+</div><div class="quantity-button quantity-down2">-</div></div>').insertAfter('.quantity1 input');
        jQuery('.quantity1').each(function() {
          var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up2'),
            btnDown = spinner.find('.quantity-down2'),
            min = input.attr('min'),
            max = input.attr('max');
    
          btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 5;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
    
          btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 5;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
    
        });
        jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up3">+</div><div class="quantity-button quantity-down3">-</div></div>').insertAfter('.quantity2 input');
        jQuery('.quantity2').each(function() {
          var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up3'),
            btnDown = spinner.find('.quantity-down3'),
            min = input.attr('min'),
            max = input.attr('max');
    
          btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 5;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
    
          btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 5;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
    
        });
        
        const counter = function () {
          const btns = document.querySelectorAll('.cart__plus');
        
        
          btns.forEach(btn => {
            btn.addEventListener('click', function () {
              const direction = this.dataset.direction;
              const inp = this.parentElement.querySelector('.cart__num');
              const currentValue = +inp.value;
              let newValue;
        
              if (direction === 'plus') {
                newValue = currentValue + 1;
              } else {
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
              }
        
              inp.value = newValue;
            })
          })
        
        }
        
        counter();
        $('.quantity-button').on('click', function(){
          let summ = $('.don1').val() * $('.summ').data('cost1') + $('.don2').val()  * $('.summ').data('cost2') + $('.don3').val()  * $('.summ').data('cost3')  ;
        $('.summ').html('$' + summ);
        });

        let summ = $('.don1').val() * $('.summ').data('cost1') + $('.don2').val()  * $('.summ').data('cost2') + $('.don3').val()  * $('.summ').data('cost3')  ;
        $('.summ').html('$' + summ);

        $('.quantity-up1').on('click', function(){
          $(".cart__num1").val(+$(".cart__num1").val() + 1);
        });
        $('.quantity-up2').on('click', function(){
          $(".cart__num2").val(+$(".cart__num2").val() + 1);
        });
        $('.quantity-up3').on('click', function(){
          $(".cart__num3").val(+$(".cart__num3").val() + 1);
        });

        $('.quantity-down1').on('click', function(){
          $(".cart__num1").val(+$(".cart__num1").val() - 1);
        });
        $('.quantity-down2').on('click', function(){
          $(".cart__num2").val(+$(".cart__num2").val() - 1);
        });
        $('.quantity-down3').on('click', function(){
          $(".cart__num3").val(+$(".cart__num3").val() - 1);
          if (direction === '.cart__num3') {
            newValue = currentValue + 1;
          } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
          }
        });
        
        
        

});