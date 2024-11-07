
function animate(frogger, keyboardHandler) {
  layer1.clear()
  layer2.clear()
  layer3.clear()

  layer2.drawImage({
    image: background_lvl2,
    x: 0,
    y: 0,
    width: layer1.canvas.width,
    height: layer1.canvas.height
  })

  layer3.drawImage(frogger.getImageAttributes())

  console.log(keyboardHandler)
  switch (true) {
    case keyboardHandler.isUpKey():
      frogger.moveUp()
    case keyboardHandler.isDownKey():
      frogger.moveDown()
    case keyboardHandler.isLeftKey():
      frogger.moveLeft()
    case keyboardHandler.isRightKey():
      frogger.moveRight()
  }

  if (frogger.isAtGoal()) {
    score++;
    gameSpeed += 0.05
    frogger.reset()
  }

  carsArray.forEach(car => {
    car.update(gameSpeed)
    layer2.drawImage(car.getImageDimensions())
  })
  const playerDimensions = frogger.getDimensions()
  if (carsArray.some(Obstacle.collidesWith(playerDimensions))) {
    layer5.ctx.drawImage(collision, 0, 100, 100, 100, playerDimensions.x, playerDimensions.y, 50, 50)
    frogger.reset()
    score = 0
    collisionsCount++
    gameSpeed = 1
    if (hiddenCallToAction === false) {
      showCallToAction()
    }
  }
  handleScoreboard()
  requestAnimationFrame(function () {
    animate(frogger, keyboardHandler)
  })
}

function handleScoreboard() {
  layer4.ctx.clearRect(0, 0, layer2.canvas.width, layer2.canvas.height)
  layer4.ctx.fillStyle = 'black'
  layer4.ctx.font = '15px Verdana'
  layer4.ctx.strokeText('Strikers', 2, 160)
  layer4.ctx.strokeText('on Picket', 2, 180)
  layer4.ctx.strokeText('Line', 2, 200)
  layer4.ctx.font = '60px Verdana'
  layer4.ctx.fillText(score, 2, 250)
  layer4.ctx.font = '15px Verdana'
  layer4.ctx.strokeText(`Collisions: ${collisionsCount}`, 2, 575)
  layer4.ctx.strokeText(`Game Speed: ${gameSpeed.toFixed(2)}`, 2, 595)
}

function main() {
  const keyboardHandler = new KeyboardHandler()
  const frogger = new Frogger(scabby, layer1.canvas.width, layer1.canvas.height)
  Obstacle.initObstacles(layer1.canvas.width, layer1.canvas.height)
  animate(frogger, keyboardHandler)

  window.addEventListener('keydown', function (e) {
    keyboardHandler.setKey(e.key)
  })

  window.addEventListener('keyup', function (e) {
    keyboardHandler.removeKey(e.key)
    frogger.moving = false
  })
}

main()