# Mad bike

## Description
Mad bike is an arcade game inspired by Amsterdam's daily life. The player is in the role of a pedestrian, moving horizontally and vertically while staying away from the bikes, which are approaching from the opposite horizontal direction with a different speed. The score is calculated based on play time. The game ends after a collision between the player and a bike.  


## MVP (DOM - CANVAS)
* the player is a pedestrian;
* use the keyboard arrows to play;
* the game scene happens in Amsterdam;
* bikes are generated randomly and appear from the opposite horizontal side with a different speed;
* player needs to avoid them;
* a player collision with a bike ends the game;
* the collision is marked by a bell ring;
* score is calculated based on time spent playing without being hit;


## Backlog


## Data structure
index.js

* startGame () {}
* gameOver () {}
* draw () {}
* bikeCollision () {}
* clearInterval () {}
* setInterval () {}
* requestAnimationFrame ()
* addEventListener () {}


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen



## Task
Task definition in order of priority

## Main
- create DOM;
- build Splash, Game and Game over screens;
- create event listeners;

## game
- draw, build, update and clear canvas;
- start loop;

## pedestrian
- draw and move;

## bikes
- draw and move;
- generate with a Math.random method;
- build collisions;
- add event listeners;


## Links


### Ora
https://ora.pm/project/290666/kanban


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/vmihayloff/Mad-bike)
[Link Deploy](https://vmihayloff.github.io/Mad-bike/)


### Slides
URls for the project presentation (slides)
[Google slides](https://docs.google.com/presentation/d/1Yk43UIJ-NplASRiwXJXeaVafMrU-dk7276degZn7kkc/edit?usp=sharing)
