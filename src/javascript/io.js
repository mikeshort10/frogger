class KeyboardHandler {
  keys = []

  constructor() { }

  setKey(keyCode) {
    this.keys[keyCode] = true
  }

  removeKey(keyCode) {
    delete this.keys[keyCode]
  }

  isLeftKey() {
    return (this.keys["ArrowLeft"] || this.keys["A"] || this.keys["a"]) === true
  }

  isRightKey() {
    return (this.keys["ArrowRight"] || this.keys["D"] || this.keys["d"]) === true
  }

  isUpKey() {
    return (this.keys["ArrowUp"] || this.keys["W"] || this.keys["w"]) === true
  }

  isDownKey() {
    return (this.keys["ArrowDown"] || this.keys["W"] || this.keys["w"]) === true
  }

  isKeyboardKey() {
    return this.isRightKey() || this.isLeftKey() || this.isUpKey() || this.isDownKey()
  }
}