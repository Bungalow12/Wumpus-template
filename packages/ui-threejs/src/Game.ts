// TODO: Add the code you need here
import * as THREE from 'three';
import { GameControl } from '@wumpus/core';
import { FontLoader, TextGeometry } from 'three-stdlib';

// Initialize module reference to ThreeJS renderer
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
const clock = new THREE.Clock();

renderer.autoClear = true;

// Add ThreeJS canvas to the body
document.body.append(renderer.domElement);

// Set up Wumpus Core
const gameControl = new GameControl();

let gameLoopId: number | null = null;

// Resize the window if the browser size changes
window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight));

// NOTE: Setup ThreeJS Scene this can be built in separate classes. None of the scene stuff nor gameLoop logic needs to be in this file
camera.position.z = 5;

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.4 );
dirLight.position.set( 0, 0, 1 ).normalize();
scene.add( dirLight );

const pointLight = new THREE.PointLight( 0xffffff, 4.5, 0, 0 );
pointLight.color.setHSL( Math.random(), 1, 0.5 );
pointLight.position.set( 0, 100, 90 );
scene.add( pointLight );

// Create our cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 'blue' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/**
 * Main game loop. This runs once per frame.
 */
const gameLoop = () => {
  renderer.render(scene, camera);

  const deltaTime = clock.getDelta();
  // Rotate the cube
  cube.rotation.x += deltaTime * 2;
  cube.rotation.y += deltaTime * 2;

  gameLoopId = requestAnimationFrame(gameLoop);
};

export default {
  runGame: () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Only start one time
    if (!gameLoopId) {
      gameLoop();
    }
  },
};
