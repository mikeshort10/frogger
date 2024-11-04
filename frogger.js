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

    if (this.moving) {
      return
    }

    console.log("dims", this.x, this.y, canvas1.height)
    if (keys[38]) { // up
      this.y -= grid;
      this.moving = true
    } else if (keys[40]) { // down
      if (this.y < canvas1.height - this.height * 2) {
        this.y += grid
        this.moving = true
      }
    } else if (keys[37]) { // left
      if (this.x > this.width) {
        this.x -= grid
        this.moving = true
      }
    } else if (keys[39]) { // down
      if (this.x < canvas1.width - this.width * 2) {
        this.x += grid
        this.moving = true
      }
    }
  }

  draw() {
    ctx3.fillStyle = "green"
    ctx3.fillRect(this.x, this.y, this.width, this.height)
  }

  jump() {
    console.log("jump")
  }
}

const frogger = new Frogger()