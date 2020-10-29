import { Scene, Math } from 'phaser';
import Food from './food';
import Snake from './snake';

export default class SnakeScene extends Scene {

  /**
   * Use this function to load images which can be used in sprites
   */
  preload() {
    // loads images which can be used in sprites
    this.load.image('food', 'assets/media/images/food.png');
    this.load.image('body', 'assets/media/images/body.png');
  }

  /**
   * Create game objects and stuff here
   */
  create() {
    this.food = new Food(this, 3, 4);
    this.snake = new Snake(this, 8, 8);
    //  Create our keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  /**
   * This is where all the game logic goes. This is equivalent to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */
  update(time, delta) {
   
  }

}
