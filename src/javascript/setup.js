class CanvasRenderer {
  constructor(id, width = 600, height = 600) {
    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext("2d")
    this.canvas.width = width
    this.canvas.height = height
  }

  drawImage({ x, y, width, height, image }) {
    this.ctx.drawImage(image, x, y, width, height)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

  }
}

var layer1 = new CanvasRenderer("canvas1")
var layer2 = new CanvasRenderer("canvas2")
var layer3 = new CanvasRenderer("canvas3")
var layer4 = new CanvasRenderer("canvas4")
var layer5 = new CanvasRenderer("canvas5")

// global variables

var grid = 42
let keys = []
let score = 0
let collisionsCount = 0
let gameSpeed = 1

var carsArray = []
var hiddenCallToAction = false

function createImage(filename) {
  const image = new Image()
  image.src = `images/${filename}.png`
  return image
}

var background_lvl2 = createImage('background')

var collision = createImage('collisions')

var bus = createImage('mta_bus')

var bus_reverse = createImage('mta_bus_reverse')

var cab = createImage('cab')

var cab_reverse = createImage('cab_reverse')

var scabby = createImage('scabby')

var execImages = {
  exec1: createImage("exec1"),
  exec2: createImage("exec2"),
  exec3: createImage("exec3"),
  exec4: createImage("exec4"),
  exec5: createImage("exec5"),
  exec6: createImage("exec6")
}



