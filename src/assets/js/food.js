import { GameObjects } from 'phaser';

export default class Food extends GameObjects.Image {

  constructor(scene, x, y) {
    super(scene);

    this.setTexture('food');
    this.setPosition(x * 16, y * 16);
    this.setOrigin(0);

    scene.children.add(this);
  }
}