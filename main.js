// main.js

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Create the game instance
const game = new Phaser.Game(config);

let player;
let cursors;

function preload() {
    this.load.image('background', 'https://examples.phaser.io/assets/skies/space3.png');
    this.load.image('player', 'https://examples.phaser.io/assets/sprites/phaser-dude.png');
}

function create() {
    this.add.image(400, 300, 'background');

    player = this.physics.add.sprite(400, 300, 'player');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    // Button and dialog functionality
    const openDialogButton = document.getElementById('open-dialog');
    const dialog = document.getElementById('dialog');
    const createButton = document.getElementById('create-button');
    const nukeButton = document.getElementById('nuke-button');
    const closeDialogButton = document.getElementById('close-dialog');

    const videoContainer = document.getElementById('video-container');
    const pepeVideo = document.getElementById('pepe-video');

    openDialogButton.addEventListener('click', () => {
        dialog.style.display = 'flex';
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.style.display = 'none';
    });

    createButton.addEventListener('click', () => {
        dialog.style.display = 'none';
        videoContainer.style.display = 'flex';
        pepeVideo.play();
    });

    nukeButton.addEventListener('click', () => {
        dialog.style.display = 'none';
        // Add nuke action logic here
        console.log('Nuke action triggered');
        player.setPosition(400, 300); // Example action for nuke
    });

    pepeVideo.addEventListener('ended', () => {
        videoContainer.style.display = 'none';
    });
}

function update() {
    player.setVelocity(0);

    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    }
}
