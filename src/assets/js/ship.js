export default class Ship {

  constructor(scene, x, y) {
    this.sprite = scene.physics.add.image(x, y, 'ship');
    console.log(this.sprite);
  }

  /**
   * When useDamping is false (the default), this is absolute loss of velocity due to movement, 
   * in pixels per second squared. When useDamping is true, this is 1 minus the damping factor. 
   * A value of 1 means the Body loses no velocity. A value of 0.95 means the Body loses 5% of 
   * its velocity per step. A value of 0.5 means the Body loses 50% of its velocity per step.
   * 
   * @param {Boolean} useDamping 
   * @param {Number} drag 
   */
  setDrag(useDamping, drag) {
    this.sprite.setDamping(useDamping);
    this.sprite.setDrag(drag);
  }

  setAcceleration(x, y) {
    this.sprite.setAcceleration(x, y);
  }

  /**
   * Makes the ship accelerate in the direction of the ship's current rotation.
   * 
   * @param {Number} acceleration 
   */
  setForwardAcceleration(acceleration) {
    
  }

  setVelocity(x, y) {
    this.sprite.setVelocity(x, y);
  }

  /**
   * Makes the ship move at a certain velocity in the direction of the ship's
   * current rotation.
   * 
   * @param {Number} velocity 
   */
  setForwardVelocity(velocity) {
    
  }

  setAngularVelocity(velocity) {
    this.sprite.setAngularVelocity(velocity);
  }

  getRotation() {
    return this.sprite.rotation;
  }

  getSpeed() {
    return this.sprite.body.speed;
  }

  setMaxVelocity(velocity) {
    this.sprite.setMaxVelocity(velocity);
  }
}