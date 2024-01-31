
const heartSvg = document.getElementById('heart');

heartSvg.addEventListener('click', function() {
  const path = heartSvg.querySelector('path');
  path.setAttribute('stroke', 'black');
  path.setAttribute('fill', 'red');
});

const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', function() {
    this.style.fill = 'yellow';
  });
});