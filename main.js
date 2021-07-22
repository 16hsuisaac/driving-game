var $car = document.querySelector('.car-image');
var count = null;
var data = {
  xAxis: 0,
  yAxis: 0,
  carMoving: false,
  carDirection: 'East'
};
var distance = 0;

document.addEventListener('keydown', arrows);

function arrows(event) {
  if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'car-image up-arrow');
    data.carDirection = 'North';
  } else if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'car-image right-arrow');
    data.carDirection = 'East';
  } else if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'car-image down-arrow');
    data.carDirection = 'South';
  } else if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'car-image left-arrow');
    data.carDirection = 'West';
  }

  if (event.key === ' ' && data.carMoving === false) {
    data.carMoving = true;
  } else if (event.key === ' ' && data.carMoving === true) {
    clearInterval(count);
    data.carMoving = false;
  }
  if (data.carMoving === true && (event.key === 'ArrowRight' || data.carDirection === 'East')) {
    distance = data.xAxis;
    clearInterval(count);
    count = setInterval(movingEast, 16);
  } else if (data.carMoving === true && (event.key === 'ArrowLeft' || data.carDirection === 'West')) {
    clearInterval(count);
    distance = data.xAxis;
    count = setInterval(movingWest, 16);
  } else if (data.carMoving === true && (event.key === 'ArrowDown' || data.carDirection === 'South')) {
    clearInterval(count);
    distance = data.yAxis;
    count = setInterval(movingNorth, 16);
  } else if (data.carMoving === true && (event.key === 'ArrowUp' || data.carDirection === 'North')) {
    clearInterval(count);
    distance = data.yAxis;
    count = setInterval(movingSouth, 16);
  }
}

function movingEast() {
  $car.style.top = data.yAxis + 'px';
  $car.style.left = (parseInt(data.xAxis) + parseInt(5)) + 'px';
  distance = distance + 5;
  data.xAxis = distance;
}

function movingWest() {
  $car.style.top = data.yAxis + 'px';
  $car.style.left = (parseInt(data.xAxis) - parseInt(5)) + 'px';
  distance = distance - 5;
  data.xAxis = distance;
}

function movingNorth() {
  $car.style.left = data.xAxis + 'px';
  $car.style.top = (parseInt(data.yAxis) + parseInt(5)) + 'px';
  distance = distance + 5;
  data.yAxis = distance;
}

function movingSouth() {
  $car.style.left = data.xAxis + 'px';
  $car.style.top = (parseInt(data.yAxis) - parseInt(5)) + 'px';
  distance = distance - 5;
  data.yAxis = distance;
}
