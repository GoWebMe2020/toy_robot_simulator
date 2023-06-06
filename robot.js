const robot = document.getElementById("robot")

const placeRobot = () => {
  const x = document.getElementById('x').value;
  const y = document.getElementById('y').value;
  const direction = document.getElementById('direction').value;
  const square = document.querySelector(`div[data-value="${x}${y}"]`);

  robot.classList.add(`face-${direction}`);
  square.appendChild(robot);
}
