class Obstacle {
  constructor({ x, y, width = grid * 2, height = grid, speed = 1, type = 'car' }) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.speed = speed
    this.type = type
    this.rect = null;
  }

  draw(previousX) {
    ctx1.fillStyle = 'blue'
    ctx1.clearRect(previousX, this.y, this.width, this.height)
    this.rect = ctx1.fillRect(this.x, this.y, this.width, this.height)
  }

  update() {
    const previousX = this.x
    this.x += this.speed * gameSpeed
    if (this.speed > 0) {

      if (this.x > canvas1.width + this.width) {
        this.x = 0 - this.width
      }
    } else {
      if (this.x < 0 - canvas1.width + this.width) {
        this.x = canvas1.width
      }
    }
    return previousX
  }
}

function initObstacles() {
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
initObstacles()

function handleObstacles() {
  carsArray.forEach(car => {
    car.draw(car.update())
  })
  logsArray.forEach(log => {
    log.draw(log.update())
  })
}