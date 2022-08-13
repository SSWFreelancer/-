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

function ready(){
   var input = document.getElementById('input__file')
   var label = document.getElementById('input__label')
   input.addEventListener('change', function(e){
      label.classList.add('active');
   });
};

document.addEventListener("DOMContentLoaded", ready);


$(document).ready(function () {
   $('.block__title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(300);
   });
});