var $car = document.querySelector('.car-image');

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
}
