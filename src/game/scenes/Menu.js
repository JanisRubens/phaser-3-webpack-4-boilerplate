class MenuScene extends Phaser.Scene {

    constructor() {
        super({key: 'MenuScene'})
    }

    create() {
      this.startGameText = this.add.text(16 * 8 + 4, 8 * 16,'PRESS ENTER TO START');
      this.startGameKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

    update() {
        if (this.startGameKey.isDown) {
            this.scene.start('PlayScene');
        }
    }
  }
  
  export default MenuScene;