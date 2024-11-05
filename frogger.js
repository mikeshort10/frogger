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
    console.log("update")

    if (this.moving || KeyboardHandler.isKeyboardKey() === false) {
      return
    }

    this.moving = true

    if (KeyboardHandler.isUpKey()) {
      this.y -= grid
    } else if (KeyboardHandler.isDownKey()) {
      if (this.y < canvas1.height - this.height * 2) {
        this.y += grid
      }
    } else if (KeyboardHandler.isLeftKey()) {
      if (this.x > this.width) {
        this.x -= grid
      }
    } else if (KeyboardHandler.isRightKey()) {
      if (this.x < canvas1.width - this.width * 2) {
        this.x += grid
      }
    }

    if (this.y < 0) {
      scored()
    }
  }

  draw() {
    ctx3.fillStyle = "green"
    ctx3.fillRect(this.x, this.y, this.width, this.height)
  }

  jump() {
    console.log("jump")
  }

  isOnStreet() {
    return this.y > 250
  }

  isOnSidewalk() {
    return this.isOnStreet() !== true && this.y > 100
  }
}

const frogger = new Frogger()