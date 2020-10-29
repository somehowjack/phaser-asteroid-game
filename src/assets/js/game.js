
import { Game } from 'phaser';
import SnakeScene from './scene';

const gameConfig = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: '#bfcc00',
  scene: [new SnakeScene()]
};

new Game(gameConfig);

