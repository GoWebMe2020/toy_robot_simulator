# Toy Robot Simulator

This application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table. Any movement that would result in the robot falling from the table has been prevented, however further valid movement commands are still be allowed.

The application consists of the following commands:

```javascript
placeRobot();
// This will place the robot in the selected x and y location facing the selected direction

goForward();
// Will move the robot in the direction that it is facing unless it is about to fall off the table

turnLeft();
// Will change the direction the robot is facing to the left

turnRight();
// Will change the direction the robot is facing to the right

reportLocation();
// Will return the location (x and y values) and the direction it is facing
```

To ensure that I manage to finish this as close to the 2 hour mark as possible, I decided to go with JavaScript instead of Ruby. I was also unable to create tests for this.

To use and test the application, run the index.html in your browser and use the provided controls and functionality.

![Image 06-06-2023 at 16 21](https://github.com/GoWebMe2020/toy_robot_simulator/assets/63963827/fd9572a3-dc64-4adc-a3a9-a3ecfa1e109d)

