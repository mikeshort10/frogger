class Obstacle {
  constructor({ x, y, type, width = grid * 2, height = grid, speed = 1, canvasWidth }) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.speed = speed
    this.type = Obstacle.getType(type)
    this.movesForward = speed > 0
    this.canvasWidth = canvasWidth
    this.imageSrc = Obstacle.getImage(this.type)
  }

  static getImage(type) {
    switch (type) {
      case "bus":
        return bus
      case "bus_reverse":
        return bus_reverse
      case "cab":
        return cab
      case "cab_reverse":
        return cab_reverse
      case "exec1":
        return execImages.exec1
      case "exec2":
        return execImages.exec2
      case "exec3":
        return execImages.exec3
      case "exec4":
        return execImages.exec4
      case "exec5":
        return execImages.exec5
      case "exec6":
        return execImages.exec6
    }
  }

  static getRandomExec() {
    const pngs = ["exec1", "exec2", "exec3", "exec4", "exec5", "exec6"]
    const png = Math.floor(Math.random() * pngs.length)
    return pngs[png]
  }


  static getRandomVehicle() {
    const pngs = ["cab", "bus"]
    const png = Math.floor(Math.random() * pngs.length)
    return `${pngs[png]}${this.movesForward ? "" : "_reverse"}`
  }

  static getType(type) {
    switch (type) {
      case "vehicle":
        return Obstacle.getRandomVehicle()
      case "exec":
        return Obstacle.getRandomExec()
      default:
        return type
    }
  }

  getImageDimensions() {
    return {
      image: this.imageSrc,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    }
  }

  isMovingRight() {
    return this.speed > 0
  }

  isMovingLeft() {
    return this.speed < 0
  }

  isOffScreenRight() {
    return this.x > this.canvasWidth + this.width
  }

  resetToLeft() {
    this.x = 0 - this.width
  }

  isOffScreenLeft() {
    return this.x < 0 - this.canvasWidth + this.width
  }

  resetToRight() {
    this.x = this.canvasWidth
  }

  update(gameSpeed) {
    this.x += this.speed * gameSpeed
    if (this.isMovingRight() && this.isOffScreenRight()) {
      this.resetToLeft()
    } else if (this.isMovingLeft() && this.isOffScreenLeft()) {
      this.resetToRight()
    }
  }

  static initObstacles(canvasWidth, canvasHeight) {
    const rows = [
      // STREET
      // lane 1
      {
        totalObstacles: 2,
        xSpacing: 350,
        heightBuffer: 2,
        type: 'vehicle'
      },
      // lane 2
      {
        totalObstacles: 2,
        xSpacing: 300,
        heightBuffer: 3,
        speed: -2,
        type: 'vehicle'
      },
      // lane 3 
      {
        totalObstacles: 2,

        xSpacing: 400,
        heightBuffer: 4,
        speed: 2,
        type: 'vehicle'
      },
      // lane 4
      {
        totalObstacles: 2,
        xSpacing: 400,
        heightBuffer: 5,
        speed: 1.5,
        type: 'vehicle'
      },
      // lane 5
      {
        totalObstacles: 2,
        xSpacing: 200,
        heightBuffer: 7,
        speed: -1,
        type: 'vehicle'
      },
      // SIDEWALK
      // lane 6
      {
        totalObstacles: 5,
        xSpacing: 200,
        heightBuffer: 8,
        speed: -1,
        type: 'exec',
        width: 25,
        height: 25,
      },
      {
        totalObstacles: 2,
        xSpacing: 200,
        heightBuffer: 9,
        speed: 2,
        type: 'exec',
        width: 25,
        height: 25,
      }]

    rows.forEach((row, rowIndex) => {
      for (let i = 0; i < row.totalObstacles; i++) {
        carsArray.push(new Obstacle({
          x: i * row.xSpacing,
          y: canvasHeight - grid * (rowIndex + 2) - row.heightBuffer,
          speed: row.speed,
          type: row.type,
          width: row.width,
          height: row.height,
          canvasWidth,
        }))
      }
    })
  }


  static collidesWith(player) {
    return function $collidesWith(obstacle) {
      return !(
        obstacle.x >= player.x + player.width ||
        obstacle.x + obstacle.width <= player.x ||
        obstacle.y >= player.y + player.height ||
        obstacle.y + obstacle.height <= player.y
      )
    }
  }

  static handleObstacles(playerDimensions) {

  }
}