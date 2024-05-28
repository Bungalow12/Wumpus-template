// TODO: Add the code you need here
import * as THREE from 'three';
import Unithree from '@unithree/core';
import { GameControl } from '@wumpus/core';
import { RotatingCube } from './entities/RotatingCube';

// Initialize Unithree
const domElement = Unithree.initialize();

// Add ThreeJS canvas to the body
document.body.append(domElement);

// Set up Wumpus Core
const gameControl = new GameControl();

// Resize the window if the browser size changes
window.addEventListener('resize', () => Unithree.getRenderer().setSize(window.innerWidth, window.innerHeight));

// NOTE: Setup ThreeJS Scene this can be built in separate classes. None of the scene stuff nor gameLoop logic needs to be in this file
Unithree.getCamera().position.z = 5;

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.4 );
dirLight.position.set( 0, 0, 1 ).normalize();
Unithree.instantiateObject(dirLight as any);

const pointLight = new THREE.PointLight( 0xffffff, 4.5, 0, 0 );
pointLight.color.setHSL( Math.random(), 1, 0.5 );
pointLight.position.set( 0, 100, 90 );
Unithree.instantiateObject(pointLight as any);

// Create our cube
const rotatingCube = new RotatingCube();
Unithree.instantiateObject(rotatingCube);


export default {
  runGame: () => {
    Unithree.getRenderer().setSize(window.innerWidth, window.innerHeight);
    Unithree.start();
  },
};
