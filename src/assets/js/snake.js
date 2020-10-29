import { Geom, Math, Actions } from 'phaser';

export default class Snake {

  constructor (scene, x, y) {
    this.headPosition = new Geom.Point(x, y);
    this.body = scene.add.group();
    this.head = this.body.create(x * 16, y * 16, 'body');
  }

}