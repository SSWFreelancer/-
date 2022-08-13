// const slider = document.getElementById('slider');

// noUiSlider.create(slider, {

//     start: [20],
//     connect: [true,false],
//     padding: [0,0],
//     step: 1,
//     range: {
//         'min': [1],
//         'max': [250]
//     },
// });
// var directionField = document.getElementById('slider-margin-value');
// slider.noUiSlider.on('update', function (values, handle) {
//     directionField.innerHTML = parseFloat(values[handle]);
//     $('.hidden').val(values[handle])
// });

function ready(){
   var input = document.getElementById('input__file')
   var label = document.getElementById('input__label')
   input.addEventListener('change', function(e){
      label.classList.add('active');
   });
};

document.addEventListener("DOMContentLoaded", ready);