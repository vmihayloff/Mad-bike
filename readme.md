# Mad bike

## Description
Mad bike is an arcade game inspired by Amsterdam's daily life. The player will be in the role of a pedestrian, moving horizontally and vertically while staying away from the bikes, which are quickly approaching from the opposite horizontal direction. The score is calculated based on play time. The game ends after a collision between the player and a bike.  


## MVP (DOM - CANVAS)
* the player is a pedestrian;
* the main scene is a picture of Amsterdam;
* bikes appear randomly from the opposite horizontal line and move fast;
* player needs to avoid them;
* a player collision with a bike ends the game;
* score is calculated based on time spent playing without being hit;


## Backlog


## Data structure
main.js
* splashScreen () {}
* gameScreen () {}
* gameOverScreen () {}

game.js
* game () {}
* startLoop () {}
* collisions () {}
* drawCanvas () {}
* updateCanvas () {}
* clearCanvas () {}
* gameOver () {}

pedestrian.js
* pedestrian () { this.x; this.y; this.direction; this.size }
* draw () {}
* move () {}
* run () {}

bikes.js
* bikes () { this.x; this.y; this.direction; this.size }
* draw () {}
* move () {}
* collision () {}




## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen



## Task
Task definition in order of priority

* Main.js:
- create DOM;
- build Splash, Game and Game over screens;
- create event listeners;

* game.js
- draw, build, update and clear canvas;
- start loop;

* pedestrian.js
- draw and move;

* bikes.js
- draw and move;
- collisions;
- functions of pedestrian - run;
- add event listeners;


## Links


### Ora
https://ora.pm/project/290666/kanban


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/vmihayloff/Mad-bike)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
