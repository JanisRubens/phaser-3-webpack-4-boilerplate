class PreloadScene extends Phaser.Scene {

    constructor() {
        super({key: 'PreloadScene'})
    }

    create() {
        this.scene.start('MenuScene');
    }
  }
  
export default PreloadScene;