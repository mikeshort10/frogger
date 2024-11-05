class Frogger {
  constructor() {
    this.spriteWidth = 250
    this.spriteHeight = 250
    this.width = this.spriteWidth / 5
    this.height = this.spriteHeight / 5

    this.x = canvas1.width / 2
    this.y = canvas1.height - this.height - 40

    this.moving = false
    this.frameX = 0
    this.frameY = 0
  }

  update() {
    if (this.moving || KeyboardHandler.isKeyboardKey() === false) {
      return
    }

    this.moving = true

    if (KeyboardHandler.isUpKey()) {
      this.y -= grid
      this.frameX = 1
      this.frameY = 0
    } else if (KeyboardHandler.isDownKey()) {
      if (this.y < canvas1.height - this.height * 2) {
        this.y += grid
        this.frameY = 3

      }
    } else if (KeyboardHandler.isLeftKey()) {
      if (this.x > this.width) {
        this.x -= grid
        this.frameY = 2

      }
    } else if (KeyboardHandler.isRightKey()) {
      if (this.x < canvas1.width - this.width * 2) {
        this.x += grid
        this.frameY = 1

      }
    }

    if (this.y < 0) {
      scored()
    }
  }

  draw() {
    // ctx3.fillStyle = "green"
    // ctx3.fillRect(this.x, this.y, this.width, this.height)
    ctx3.drawImage(froggerSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 25, this.y - 25, this.width * 2, this.height * 2)
  }

  jump() {
    if (this.moving === false) {
      this.frameX = 1
    } else if (this.frameX === 1) {
      this.frameX = 0
    }
  }

  isOnStreet() {
    return this.y > 250
  }

  isOnSidewalk() {
    return this.isOnStreet() !== true && this.y > 100
  }
}

const frogger = new Frogger()