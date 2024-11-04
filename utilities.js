function animate() {
  ctx3.clearRect(0, 0, canvas1.width, canvas1.height)
  frogger.draw()
  frogger.update()
  handleObstacles()
  requestAnimationFrame(animate)
}

animate()

window.addEventListener('keydown', function (e) {
  keys = []
  keys[e.keyCode] = true
  if (keys[37] || keys[38] || keys[39] || keys[49]) {
    frogger.jump()
  }
})

window.addEventListener('keyup', function (e) {
  delete keys[e.keyCode]
  frogger.moving = false
})

function scored() {
  score++;
  gameSpeed += 0.05
  frogger.x = canvas1.width / 2 - frogger.width / 2
  frogger.y = canvas1.height - frogger.height - 40
}