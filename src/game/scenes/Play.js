class PlayScene extends Phaser.Scene {

    constructor() {
        super({key: 'PlayScene'})
    }

    create() {
        this.playSceneText = this.add.text(16 * 8 + 4, 8 * 16, 'THIS IS PLAY SCENE');
    }
  
    update() {
    }
  }
  
  export default PlayScene;