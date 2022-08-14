$(document).ready(function () {
   $('.view-product__sel span').click(function (event) {
      $('.view-product__sel span').removeClass('active');
      $(this).addClass('active');
   });  
   $('.cart-sel1 span').click(function (event) {
      let abc = $(this).parent().find('span.active');
      $(this).addClass('active');
      abc.removeClass('active');
   });   
   $('.cart-sel2 span').click(function (event) {
      let bcd = $(this).parent().find('span.active');
      $(this).removeClass('active');
      $(this).addClass('active');
      bcd.removeClass('active');
   });     


   $('.cart__dec').click(function (event) {
     var $input = $(this).parent().find('input');
     var count = parseInt($input.val()) - 1;
     count = count < 1 ? 1 : count;
     $input.val(count);
   }); 
   $('.cart__inc').click(function () {
     var $input = $(this).parent().find('input');
     $input.val(parseInt($input.val()) + 1);
   });

   $('#input__file').change(function (event) {
      $('#input__label').addClass('active');
   });
    $('.tabs__item').click(function (event) {
          $(this).addClass('active');
          $(".tabs__item").not(this).removeClass('active');
    });    
    $('.tabs__item-1').click(function(event){
        $('#tab_01').addClass('target');
        $('#tab_02').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_04').removeClass('target');      

    });
    $('.tabs__item-2').click(function(event){
        $('#tab_02').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_04').removeClass('target');
    });
    $('.tabs__item-3').click(function(event){
        $('#tab_03').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_02').removeClass('target');
        $('#tab_04').removeClass('target');        
    });
    $('.tabs__item-4').click(function(event){
        $('#tab_04').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_02').removeClass('target');         
    }) ;    
});

const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [10, 90],
    padding: [0,0],
    connect: true,
    range: {
        'min': 10,
        'max': 90
    }
});
var input0 = document.getElementById('range-valuestart');
var input1 = document.getElementById('range-valueend');
var inputs = [input0, input1];
slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseFloat(values[handle]);
});
input0.addEventListener('change', function () {
   slider.noUiSlider.set([this.value, null]);
});
input1.addEventListener('change', function () {
   slider.noUiSlider.set([null, this.value]);
});


$(document).ready(function () {
   $('.block__title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(300);
   }); 
   if ($(window).width() < 1900) {
      $('.filter__title').click(function(event){
         $(this).toggleClass('active').next().slideToggle(300);
         $('.filter').toggleClass('active');
      });
   }     
});
function readURL(input) {
   if (input.files && input.files[0]) {
       var reader = new FileReader();
       reader.onload = function (e) {
           $('#preview').attr('src', e.target.result);
       };
       reader.readAsDataURL(input.files[0]);
   }
};
