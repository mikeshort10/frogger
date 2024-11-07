function closeModal() {
  [...document.getElementsByClassName("modal")].forEach(node => node.style.display = "none")
}

function showCallToAction() {
  document.getElementById("game-over").style.display = "initial"
}

function hideCallToAction() {
  hiddenCallToAction = true
  document.getElementById("game-over").style.display = "none"
}