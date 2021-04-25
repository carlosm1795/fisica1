// grab a reference of our "canvas_vFinal" using its id
var running = true;
const canvas_vFinal = document.getElementById("canvas_vFinal");

/* get a "context". Without "context", we can't draw on canvas_vFinal */
const ctx_vFinal = canvas_vFinal.getContext("2d");

// render function draws everything on to canvas_vFinal
function renderVFinal() {
  // set a style
  ctx_vFinal.fillStyle =
    "#000"; /* whatever comes below this acquires black color (#000). */
  // draws the black board
  ctx_vFinal.fillRect(0, 0, canvas_vFinal.width, canvas_vFinal.height);
  drawBallVFinal(
    ball_vFinal.x,
    ball_vFinal.y,
    ball_vFinal.radius,
    ball_vFinal.color
  );
}

// ball_vFinal
const ball_vFinal = {
  x: canvas_vFinal.width / 2,
  y: canvas_vFinal.height / 2,
  radius: 7,
  speed: 7,
  velocityX: 5,
  velocityY: 7,
  color: "#05EDFF",
};

// function to draw ball_vFinal
function drawBallVFinal(x, y, radius, color) {
  ctx_vFinal.fillStyle = color;
  ctx_vFinal.beginPath();
  // syntax --> arc(x, y, radius, startAngle, endAngle, antiClockwise_or_not)
  ctx_vFinal.arc(x, y, radius, 0, Math.PI * 2, true); // π * 2 Radians = 360 degrees
  ctx_vFinal.closePath();
  ctx_vFinal.fill();
}

// gameLoop
function gameLoopVFinal() {
  if (running) {
    // update() function here
    updateVFinal();
    // render() function here
    renderVFinal();
  } else {
    console.log("Running false");
  }
}

// reset the ball_vFinal
function resetVFinal() {
  // reset ball_vFinal's value to older values
  ball_vFinal.x = canvas_vFinal.width / 2;
  ball_vFinal.y = canvas_vFinal.height / 2;
  ball_vFinal.speed = 7;
}

// update function, to update things position
function updateVFinal() {
  // move the paddle
  // check if ball_vFinal hits top or bottom wall
  if (
    ball_vFinal.y + ball_vFinal.radius >= canvas_vFinal.height ||
    ball_vFinal.y - ball_vFinal.radius <= 0
  ) {
    // play wallHitSound

    console.log("Llegue");
    running = false;
    return false;
  }
  // move the ball_vFinal
  //ball_vFinal.x += ball_vFinal.velocityX;
  ball_vFinal.y += ball_vFinal.velocityY;
  // ai paddle movement

  // collision detection on paddles
}

// calls gameLoop() function 60 times per second
//setInterval(gameLoop, 1000 / 60);
function initProgramVFinal() {
  setInterval(gameLoopVFinal, 1000 / 60);
  if (!running) {
    window.location.reload();
  }
}

renderVFinal();
