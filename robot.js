const robot = document.getElementById("robot")

const placeRobot = () => {
  const x = document.getElementById('x').value;
  const y = document.getElementById('y').value;
  const direction = document.getElementById('direction').value;
  const square = document.querySelector(`div[data-value="${x}${y}"]`);

  robot.classList.add(`face-${direction}`);
  robot.dataset.direction = direction
  square.appendChild(robot);
}

const reportLocation = () => {
  const reportElement = document.getElementById('report')
  const locationX = robot.parentNode.dataset.value[0]
  const locationY = robot.parentNode.dataset.value[1]
  const facingDirection = robot.dataset.direction

  reportElement.innerText = `X: ${locationX.toUpperCase()}, Y: ${locationY}, Facing Direction: ${capitaliseDirection(facingDirection)}`
}

const capitaliseDirection = (directionInString) => {
  return directionInString.charAt(0).toUpperCase() + directionInString.slice(1)
}
