function animate() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
  ctx2.clearRect(0, 0, canvas1.width, canvas1.height)
  ctx3.clearRect(0, 0, canvas1.width, canvas1.height)
  ctx4.clearRect(0, 0, canvas1.width, canvas1.height)
  ctx5.clearRect(0, 0, canvas1.width, canvas1.height)


  Particle.handleRipples(frogger)

  ctx2.drawImage(background_lvl2, 0, 0, canvas1.width, canvas1.height)

  frogger.draw()
  frogger.update()
  Particle.handleParticles(frogger)
  Obstacle.handleObstacles()
  handleScoreboard()
  ctx4.drawImage(grass, 0, 0, canvas1.width, canvas1.height)
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

function handleScoreboard() {
  ctx4.fillStyle = 'black'
  ctx4.font = '15px Verdana'
  ctx4.strokeText('Score', 265, 15)
  ctx4.font = '60px Verdana'
  ctx4.fillText(score, 270, 65)
  ctx4.font = '15px Verdana'
  ctx4.strokeText(`Collisions: ${collisionsCount}`, 10, 175)
  ctx4.strokeText(`Game Speed: ${gameSpeed.toFixed(2)}`, 10, 195)

}

function collidesWith(first) {
  return function $collidesWith(second) {
    return !(first.x > second.x + second.width || first.x + first.x < second.x || first.y > second.y + second.height || first.y + first.height < second.y)
  }
}

function resetGame() {
  frogger.x = canvas1.width / 2 - frogger.width / 2
  frogger.y = canvas1.height - frogger.height - 40
  score = 0
  collisionsCount++
  gameSpeed = 1
}