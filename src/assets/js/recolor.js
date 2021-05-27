var color = document.querySelector('input');
var block = document.getElementById('block');

color.addEventListener('change', function(){
  block.style.setProperty('--bg', color.value);
});