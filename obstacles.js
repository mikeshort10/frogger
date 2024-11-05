class Obstacle {
  constructor({ x, y, width = grid * 2, height = grid, speed = 1, type = 'car' }) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.speed = speed
    this.type = type
    this.rect = null;
    this.frameX = 0
    this.frameY = 0
    this.randomize = Math.floor(Math.random() * 30 + 30)
    this.carType = Math.floor(Math.random() * numberOfCars)
  }

  draw(previousX) {

    if (this.type === 'turtle') {
      if (frame % this.randomize === 0) {


        if (this.frameX >= 1) {
          this.frameX = 0
        } else {
          this.frameX++
        }
      }
      ctx1.drawImage(turtle, this.frameX * 70, this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height)
    } else if (this.type === 'log') {
      ctx1.drawImage(log, this.x, this.y, this.width, this.height)
    } else {
      // ctx2.fillStyle = 'blue'
      // ctx2.fillRect(this.x, this.y, this.width, this.height)
      ctx2.drawImage(car, this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height)
    }
  }

  update() {
    const previousX = this.x
    this.x += this.speed * gameSpeed
    if (this.speed > 0) {
      if (this.x > canvas1.width + this.width) {
        this.x = 0 - this.width
        this.carType = Math.floor(Math.random() * numberOfCars)
      }
    } else {
      this.frameX = 1
      if (this.x < 0 - canvas1.width + this.width) {
        this.x = canvas1.width
        this.carType = Math.floor(Math.random() * numberOfCars)
      }
    }
    return previousX
  }
  static initObstacles() {
    // lane 1 
    for (let i = 0; i < 2; i++) {
      carsArray.push(new Obstacle({
        x: i * 350,
        y: canvas1.height - grid * 2 - 20,
      }))
    }

    for (let i = 0; i < 2; i++) {
      carsArray.push(new Obstacle({
        x: i * 300,
        y: canvas1.height - grid * 3 - 20,
        speed: -2
      }))
    }

    for (let i = 0; i < 2; i++) {
      carsArray.push(new Obstacle({
        x: i * 400,
        y: canvas1.height - grid * 4 - 20,
        speed: 2
      }))
    }

    for (let i = 0; i < 2; i++) {
      logsArray.push(new Obstacle({
        x: i * 400,
        y: canvas1.height - grid * 5 - 20,
        speed: -2,
        type: 'log'
      }))
    }

    for (let i = 0; i < 3; i++) {
      logsArray.push(new Obstacle({
        x: i * 200,
        y: canvas1.height - grid * 6 - 20,
        width: grid,
        speed: 1,
        type: 'turtle'
      }))
    }
  }
  static handleObstacles() {
    carsArray.forEach(car => {
      car.draw(car.update())
    })
    logsArray.forEach(log => {
      log.draw(log.update())
    })
    if (carsArray.some(collidesWith(frogger))) {
      ctx4.drawImage(collision, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50)
      resetGame()
    }

    if (frogger.isOnSidewalk()) {
      safe = false
      logsArray.forEach(log => {
        if (collidesWith(frogger)(log)) {
          frogger.x += log.speed
          safe = true
        }
      })
      if (safe === false) {
        for (let i = 0; i < 30; i++) {
          ripplesArray.unshift(new Particle(frogger.x, frogger.y))
        }
        resetGame()
      }
    }
  }
}

Obstacle.initObstacles()
