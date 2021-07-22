var $car = document.querySelector('.car-image');
/* var timeBetween = 0;
var count = null; */
var data = {
  xAxis: 0,
  yAxis: 0
};

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
    var distance = 0;
    /* count =  */setInterval(function () {
      $car.style.left = (parseInt(distance) + parseInt(5)) + 'px';
      distance = distance + 5;
      data.xAxis = distance;
    }, 16);
  }
}

/* document.addEventListener('keyup', timing);

function timing() {
  clearInterval(count);
}
 */
