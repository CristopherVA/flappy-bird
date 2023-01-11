// JAVASCRIPT CODE //.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// GAME VARS AND CONSTS
let frames = 0;

// LOAD SPRITE
const sprite = new Image();
sprite.src = "./images/sprite.png";

// BACKGROUND
const bg = {
  sX: 0,
  sY: 0,
  w: 275,
  h: 226,
  x: 0,
  y: canvas.height - 226,
  draw: function () {
    canvas.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w,
      this.h
    );
    bg.draw()
  },
};

// DRAW
function draw() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function update() {}

// LOOP
function loop() {
  draw();
  frames++;
  requestAnimationFrame(loop);
}

loop();
