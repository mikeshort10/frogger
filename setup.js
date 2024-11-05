const createCanvas = (id) => {
  const canvas = document.getElementById(id)
  const ctx = canvas.getContext("2d")
  canvas.width = 600
  canvas.height = 600

  return [canvas, ctx]
}



const [canvas1, ctx1] = createCanvas("canvas1")
const [canvas2, ctx2] = createCanvas("canvas2")
const [canvas3, ctx3] = createCanvas("canvas3")
const [canvas4, ctx4] = createCanvas("canvas4")
const [canvas5, ctx5] = createCanvas("canvas5")

// global variables

const grid = 80
let keys = []
let score = 0
let collisionsCount = 0
let frame = 0
let gameSpeed = 1

var particlesArray = []
var maxParticles = 300
var ripplesArray = []
var carsArray = []
var logsArray = []

const background_lvl2 = new Image()
background_lvl2.src = 'background_lvl2.png'

const grass = new Image()
background_lvl2.src = 'grass.png'

const collision = new Image()
background_lvl2.src = 'collisions.png'

class KeyboardHandler {
  constructor() {

  }

  static isLeftKey() {
    return keys[37] === true
  }

  static isRightKey() {
    return keys[39] === true
  }

  static isUpKey() {
    return keys[38] === true
  }

  static isDownKey() {
    return keys[40] === true
  }

  static isKeyboardKey() {
    return KeyboardHandler.isRightKey() || KeyboardHandler.isLeftKey() || KeyboardHandler.isUpKey() || KeyboardHandler.isDownKey()
  }
}