const range = document.getElementById('customRange1');
const rangeUp = document.getElementById('range-up');
const rangeDown = document.getElementById('range-down');
const bpm = document.getElementById('bpm-value');

range.addEventListener('change', function () {
    // console.log(range.value);
    bpm.innerText = range.value;
});

range.addEventListener('input', function () {
    bpm.innerText = range.value;
   
}) 




rangeUp.addEventListener('click', function () {
    // console.log('clicked')
    range.value++
    bpm.innerText = range.value

});


rangeDown.addEventListener('click', function () {
    // console.log('clicked')
    range.value--
    bpm.innerText = range.value
})
