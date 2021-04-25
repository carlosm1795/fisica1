// grab a reference of our "canvas" using its id
var running = true;
const canvas = document.getElementById("canvas");

/* get a "context". Without "context", we can't draw on canvas */
const ctx = canvas.getContext("2d");

// render function draws everything on to canvas
function renderAltura() {
  // set a style
  ctx.fillStyle =
    "#000"; /* whatever comes below this acquires black color (#000). */
  // draws the black board
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawBallAltura(ball.x, ball.y, ball.radius, ball.color);
}

// ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 7,
  speed: 7,
  velocityX: 5,
  velocityY: 13,
  color: "#05EDFF",
};

// function to draw ball
function drawBallAltura(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  // syntax --> arc(x, y, radius, startAngle, endAngle, antiClockwise_or_not)
  ctx.arc(x, y, radius, 0, Math.PI * 2, true); // π * 2 Radians = 360 degrees
  ctx.closePath();
  ctx.fill();
}

// gameLoop
function gameLoopAltura() {
  if (running) {
    // update() function here
    updateAltura();
    // render() function here
    renderAltura();
  } else {
    console.log("Running false");
  }
}

// reset the ball
function resetAltura() {
  // reset ball's value to older values
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = 7;
}

// update function, to update things position
function updateAltura() {
  // move the paddle
  // check if ball hits top or bottom wall
  if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
    // play wallHitSound

    console.log("Llegue");
    running = false;
    return false;
  }
  // move the ball
  //ball.x += ball.velocityX;
  ball.y += ball.velocityY;
  // ai paddle movement

  // collision detection on paddles
}

// calls gameLoop() function 60 times per second
//setInterval(gameLoop, 1000 / 60);
function initProgramAltura() {
  setInterval(gameLoopAltura, 1000 / 60);
  if (!running) {
    window.location.reload();
  }
}

renderAltura();
