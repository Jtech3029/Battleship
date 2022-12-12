import gameboard from "./Gameboard";
import areEqual from "../areEqual";

const Player = () => {
  let game = gameboard();
  let shotsMade = [];
  const shipLengths = [1,1,2,2,3,3,4,4];
  let shipCount = 0;

  function shoot(coords, enemy) {
    enemy.game.shotsFired(coords);
    shotsMade.push(coords);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randomShot() {
    let coords = [getRandomInt(1,11),getRandomInt(1,11)];
    for(let i = 0; i < shotsMade.length; i++) {
      if(areEqual(coords, shotsMade[i])) {
        coords = [getRandomInt(1,11),getRandomInt(1,11)];
        i = -1;
        continue;
      }
    }

    shotsMade.push(coords);
    return coords;
  }

  function randomShips() {
    if (game.ships.length != 0) {
      game.ships = [];
      game.coordinatesOccupied = [];
    }
    let count = 0;
    let coords = [getRandomInt(1,10),getRandomInt(1,10)];
    if(Math.round(Math.random()) == 1) {
      game.changeRotation();
    }
    while(count != shipLengths.length) {
      try {
        game.placeShip(shipLengths[count], coords);
        coords = [getRandomInt(1,11),getRandomInt(1,11)];
      } catch (error) {
        coords = [getRandomInt(1,11),getRandomInt(1,11)];
        continue;
      }
      count++;
    }

  }

  function addShip(e) {
    let element = e.target;
    let shot = [
      parseInt(element.getAttribute("data-x")),
      parseInt(element.getAttribute("data-y")),
    ];
    if(shipCount != shipLengths.length){
    try {
      game.placeShip(shipLengths[shipCount], shot)
      shipCount++;
    } catch (error) {
      alert(error);
    }
  }
  }

  function shipsFull() {
    return shipCount == shipLengths.length;
  }

  return { game, shoot, shotsMade, randomShot, randomShips, addShip, shipsFull };
};

export default Player;
