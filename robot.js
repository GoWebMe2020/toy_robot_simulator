const robot = document.getElementById('robot')

const placeRobot = () => {
  const x = document.getElementById('x').value;
  const y = document.getElementById('y').value;
  const direction = document.getElementById('direction').value;
  const square = document.querySelector(`div[data-value="${x}${y}"]`);
  robot.classList.remove(`face-${robot.dataset.direction}`)
  robot.classList.add(`face-${direction}`);
  robot.dataset.direction = direction
  square.appendChild(robot);
}

const reportLocation = () => {
  const reportElement = document.getElementById('report');
  const { parentNode: { dataset: { value: [locationX, locationY] } }, dataset: { direction: facingDirection } } = robot;

  reportElement.innerText = `X: ${locationX.toUpperCase()}, Y: ${locationY}, Facing Direction: ${capitaliseDirection(facingDirection)}`;
};

const capitaliseDirection = (directionInString) => {
  return directionInString.charAt(0).toUpperCase() + directionInString.slice(1);
};

const goForward = () => {
  let locationX = robot.parentNode.dataset.value[1];
  let locationY = robot.parentNode.dataset.value[0];
  const facingDirection = robot.dataset.direction;

  const alertMessage = 'The robot will fall off the table! You have to change direction';

  if (facingDirection === 'east' && locationX !== '5') {
    locationX = parseInt(locationX, 10) + 1;
  } else if (facingDirection === 'west' && locationX !== '1') {
    locationX = parseInt(locationX, 10) - 1;
  } else if (facingDirection === 'north' && locationY.charCodeAt(0) !== 101) {
    locationY = String.fromCharCode(locationY.charCodeAt(0) + 1);
  } else if (facingDirection === 'south' && locationY.charCodeAt(0) !== 97) {
    locationY = String.fromCharCode(locationY.charCodeAt(0) - 1);
  } else {
    alert(alertMessage);
    return;
  }

  const square = document.querySelector(`div[data-value="${locationY}${locationX}"]`);
  square.appendChild(robot);
};

const turnLeft = () => {
  const direction = robot.dataset.direction;
  const directions = ['north', 'east', 'south', 'west'];
  const currentIndex = directions.indexOf(direction);

  if (currentIndex !== -1) {
    const newDirection = directions[(currentIndex + 3) % 4];
    robot.classList.replace(`face-${direction}`, `face-${newDirection}`);
    robot.dataset.direction = newDirection;
  }
};

const turnRight = () => {
  const direction = robot.dataset.direction;
  const directions = ['north', 'west', 'south', 'east'];
  const currentIndex = directions.indexOf(direction);

  if (currentIndex !== -1) {
    const newDirection = directions[(currentIndex + 3) % 4];
    robot.classList.replace(`face-${direction}`, `face-${newDirection}`);
    robot.dataset.direction = newDirection;
  }
};
