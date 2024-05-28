# Hunt the Wumpus Template
## About
Hunt the Wumpus is a game from 1973 (See [Hunt The Wumpus](https://en.wikipedia.org/wiki/Hunt_the_Wumpus)).
This project template is an easy base setup for a Hunt the Wumpus project for the Microsoft Hunt the Wumpus 
program for high school students in the Greater Seattle Area. 

In this program mentor volunteers, typically current and previous Microsoft employees and those students who
had once participated in the project. The goal to provide a fun team-based software development experience to
build a game by having several students on different components of the game while following a basic game specification.

This culminates in an end of year competition where students show off the projects.

## UI Decision
This template provides multiple UI based options to be used depending on what the team feels most comfortable with.
For those that the team decides not to use they can be deleted without concern as each is their own application.

### Available UI Options
* **Static HTML** - Client-side application. The code will execute completely on the client browser.
* **React** - Server-side rendering application very common in modern web development.
* **ThreeJS** - Client-side application with ThreeJS for WebGL Rendering
* **React Three Fiber (R3F)** - Server-side rendering application with React and a ThreeJS Wrapper.
* **Unithree** - Client-side application using a ThreeJS Wrapper simplifying development with an entity, 
  component, plugin model.

## Setup
Run `npm install` in a command prompt or terminal

## Workspace Commands
### Build
Builds the project for execution.

* `npm run build` - Builds all packages in the workspace
* `npm run build-core` - Build the core package
* `npm run build-react` - Build the React UI package
* `npm run build-html` - Build the Static HTML UI package
* `npm run build-three` - Build the ThreeJS UI package
* `npm run build-fiber` - Build the React Three Fiber UI package
* `npm run build-unithree` - Build the Unithree UI package

### Clean
Clears out the previously built projects

* `npm run clean` - Cleans all packages in the workspace
* `npm run clean-core` - Cleans the core package
* `npm run clean-react` - Cleans the React UI package
* `npm run clean-html` - Cleans the HTML UI package
* `npm run clean-three` - Cleans the ThreeJS UI package
* `npm run clean-fiber` - Cleans the React Three Fiber UI package
* `npm run clean-unithree` - Cleans the Unithree UI package

### Test
Executes tests available on the packages

* `npm run test` - Executes tests on all packages in the workspace
* `npm run test-core` - Executes tests on the core package

## Template Creator
[Jonathan Wills](https://jonwills.com)