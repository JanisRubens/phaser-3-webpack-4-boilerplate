import Phaser from 'phaser';

import Boot from './scenes/Boot';
import Menu from './scenes/Menu';
import Preload from './scenes/Preload';
import PlayScene from './scenes/Play';

const gameConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [
        Boot,
        Preload,
        Menu,
        PlayScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: true
        }
    },
};

const game = new Phaser.Game(gameConfig);

export default game;
