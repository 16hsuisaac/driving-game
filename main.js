var $car = document.querySelector('.car-image');
var count = null;
var data = {
  xAxis: 0,
  yAxis: 0,
  carMoving: false
};
var distance = 0;

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
  if (event.key === ' ' && data.carMoving === false) {

    data.carMoving = true;
    count = setInterval(function () {
      $car.style.left = (parseInt(data.xAxis) + parseInt(5)) + 'px';
      distance = distance + 5;
      data.xAxis = distance;
    }, 16);
  } else if (event.key === ' ' && data.carMoving === true) {
    clearInterval(count);
    data.carMoving = false;
  }
}
