function animate() {
  ctx3.clearRect(0, 0, canvas1.width, canvas1.height)
  frogger.draw()
  frogger.update()
  requestAnimationFrame(animate)
}

animate()

window.addEventListener('keydown', function (e) {
  keys = []
  keys[e.keyCode] = true
  console.log({ code: e.keyCode })
  if (keys[37] || keys[38] || keys[39] || keys[49]) {
    frogger.jump()
  }
})

window.addEventListener('keyup', function (e) {
  delete keys[e.keyCode]
  frogger.moving = false
})