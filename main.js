var $car = document.querySelector('.car-image');
var timeBetween = 0;
var count = null;

document.addEventListener('keydown', arrows);

function arrows(event) {
  if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'car-image up-arrow');
  } else if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'car-image right-arrow');
  } else if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'car-image down-arrow');
  } else if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'car-image left-arrow');
  }
  if (event.key === ' ') {
    timeBetween = 0;
    count = setInterval(function () {
      timeBetween++;
    });
    $car.style.left = $car.style.left.value + timeBetween + 'px';
  }
}

document.addEventListener('keyup', timing);

function timing() {
  clearInterval(count);
}
