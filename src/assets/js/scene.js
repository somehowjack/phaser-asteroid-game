import { Scene } from 'phaser';
import Ship from './ship';
import Bullet from './bullet';
import Keyboard from './keyboard';

export default class SnakeScene extends Scene {

  /**
   * Use this function to load images which can be used in sprites
   */
  preload() {
    // loads images which can be used in sprites
    this.load.image('space', 'assets/media/images/deep-space.jpg');
    this.load.image('bullet', 'assets/media/images/bullets.png');
    this.load.image('ship', 'assets/media/images/ship.png');
  }

  /**
   * Create game objects and stuff here
   */
  create() {
    this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.shipSpeedLabel = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    this.ship = new Ship(this, 400, 300);
    this.keyboard = new Keyboard(this);
  }

  /**
   * This is where all the game logic goes. This is similar to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */
  update(time, delta) {
    let acc = 200;
    let turn = 180;
    let forw = 0;
    let turnw = 0;
    if (this.keyboard.isUpPressed()){
        forw += acc;
    }
    else if (this.keyboard.isDownPressed()){
        forw -= acc;
    }
    
    if (this.keyboard.isLeftPressed()){
        turnw -= turn;
    }
    if (this.keyboard.isRightPressed()){
        turnw += turn;
    }

    if (this.keyboard.isSpacePressed()){
        this.bullet = new Bullet(this, this.ship.sprite.x, this.ship.sprite.y);
        this.bullet.sprite.rotation = this.ship.getRotation();
        this.bullet.setForwardVelocity(100);
        this.bullet.setSpawnTime(time);
        this.bullet.doIDie(time);
        
    }

    this.ship.setForwardAcceleration(forw);
    this.ship.setAngularVelocity(turnw);
    this.ship.wrap();
    this.ship.setDrag(true, .9775);
   

  }

}
