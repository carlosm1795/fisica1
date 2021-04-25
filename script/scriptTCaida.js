// grab a reference of our "canvas_tCaida" using its id
var running = true;
const canvas_tCaida = document.getElementById("canvas_tCaida");

/* get a "context". Without "context", we can't draw on canvas_tCaida */
const ctx_tCaida = canvas_tCaida.getContext("2d");

// render function draws everything on to canvas_tCaida
function renderTCaida() {
  // set a style
  ctx_tCaida.fillStyle =
    "#000"; /* whatever comes below this acquires black color (#000). */
  // draws the black board
  ctx_tCaida.fillRect(0, 0, canvas_tCaida.width, canvas_tCaida.height);
  drawBallTCaida(
    ball_tCaida.x,
    ball_tCaida.y,
    ball_tCaida.radius,
    ball_tCaida.color
  );
}

// ball_tCaida
const ball_tCaida = {
  x: canvas_tCaida.width / 2,
  y: canvas_tCaida.height / 2,
  radius: 7,
  speed: 7,
  velocityX: 5,
  velocityY: 7,
  color: "#05EDFF",
};

// function to draw ball_tCaida
function drawBallTCaida(x, y, radius, color) {
  ctx_tCaida.fillStyle = color;
  ctx_tCaida.beginPath();
  // syntax --> arc(x, y, radius, startAngle, endAngle, antiClockwise_or_not)
  ctx_tCaida.arc(x, y, radius, 0, Math.PI * 2, true); // π * 2 Radians = 360 degrees
  ctx_tCaida.closePath();
  ctx_tCaida.fill();
}

// gameLoop
function gameLoopTCaida() {
  if (running) {
    // update() function here
    updateTCaida();
    // render() function here
    renderTCaida();
  } else {
    console.log("Running false");
  }
}

// reset the ball_tCaida
function resetTCaida() {
  // reset ball_tCaida's value to older values
  ball_tCaida.x = canvas_tCaida.width / 2;
  ball_tCaida.y = canvas_tCaida.height / 2;
  ball_tCaida.speed = 7;
}

// update function, to update things position
function updateTCaida() {
  // move the paddle
  // check if ball_tCaida hits top or bottom wall
  if (
    ball_tCaida.y + ball_tCaida.radius >= canvas_tCaida.height ||
    ball_tCaida.y - ball_tCaida.radius <= 0
  ) {
    // play wallHitSound

    console.log("Llegue");
    running = false;
    return false;
  }
  // move the ball_tCaida
  //ball_tCaida.x += ball_tCaida.velocityX;
  ball_tCaida.y += ball_tCaida.velocityY;
  // ai paddle movement

  // collision detection on paddles
}

// calls gameLoop() function 60 times per second
//setInterval(gameLoop, 1000 / 60);
function initProgramTCaida() {
  setInterval(gameLoopTCaida, 1000 / 60);
  if (!running) {
    window.location.reload();
  }
}

renderTCaida();
