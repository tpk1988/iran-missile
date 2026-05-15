import Phaser from 'phaser';
import { ImageScene } from './scenes/ImageScene.js';

const config = {
    type: Phaser.AUTO,
    title: 'Iran Missile',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#101010',
    scene: [ImageScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

new Phaser.Game(config);
