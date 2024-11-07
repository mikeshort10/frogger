
class Frogger {
  constructor(image, canvasWidth, canvasHeight) {
    this.image = image
    this.canvasHeight = canvasHeight
    this.canvasWidth = canvasWidth

    this.width = grid - 2
    this.height = grid - 2

    this.startX = canvasWidth / 2 + 1
    this.x = this.startX

    this.startY = canvasHeight - this.height - 1
    this.y = this.startY

    this.moving = false
  }

  reset() {
    this.y = this.startY
    this.x = this.startX
  }

  isNotMoving() {
    return this.moving !== true
  }

  hasSpaceToMoveDown() {
    return this.y < this.canvasHeight - this.height * 2
  }

  moveDown() {
    if (this.isNotMoving() && this.hasSpaceToMoveDown()) {
      this.moving = true
      return this.y += (grid + 2)
    }
  }

  hasSpaceToMoveUp() {
    return true
  }

  moveUp() {
    if (this.isNotMoving() && this.hasSpaceToMoveUp()) {
      this.moving = true
      this.y -= (grid + 2)
    }
  }

  hasSpaceToMoveLeft() {
    return this.x > this.width
  }

  moveLeft() {
    if (this.isNotMoving() && this.hasSpaceToMoveLeft()) {
      this.moving = true
      this.x -= (grid + 2)
    }
  }

  hasSpaceToMoveRight() {
    return this.x < this.canvasWidth - this.width * 2
  }

  moveRight() {
    if (this.isNotMoving() && this.hasSpaceToMoveRight()) {
      this.moving = true
      this.x += (grid + 2)
    }
  }

  getDimensions() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    }
  }

  getImageAttributes() {
    return {
      ...this.getDimensions(),
      image: this.image,
    }
  }

  jump() { }

  isOnStreet() {
    return this.y > 250
  }

  isOnSidewalk() {
    return this.isOnStreet() !== true && this.y > 100
  }

  isAtGoal() {
    return this.y < (grid * 5)
  }
}