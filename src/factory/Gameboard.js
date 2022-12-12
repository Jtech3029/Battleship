import ship from "./ship";
import areEqual from "../areEqual";

const gameboard = () => {
  let ships = [];
  let coordinatesOccupied = [];
  let shotsMissed = [];

  let rotation = "horizontal";

  function changeRotation() {
    if (rotation == "horizontal") {
      rotation = "vertical";
    } else {
      rotation = "horizontal";
    }
  }

  function placeShip(shipLength, shipCoords) {
    if (rotation == "horizontal") {
      let coords = [];

      for (let i = 0; i < shipLength; i++) {
        let temp = shipCoords.map((x) => x);
        temp[0] = temp[0] + i;

        if(temp[0] > 10 || temp[0] < 1 || temp[1] > 10 || temp[1] < 1) {
          throw new Error("cannot place ship here!");
        }
        for(const coord of coordinatesOccupied) {
          if (areEqual(coord, temp)) {
            throw new Error("cannot place ship here!");
          }
        }
        coords.push(temp);
      }

      for(const coord of coords) {
        coordinatesOccupied.push(coord);
      } 

      let newShip = ship(shipLength, coords);
      ships.push(newShip);
    } else if (rotation == "vertical") {
      let coords = [];

      for (let i = 0; i < shipLength; i++) {
        let temp = shipCoords.map((x) => x);
        temp[1] = temp[1] + i;

        if(temp[0] > 10 || temp[0] < 1 || temp[1] > 10 || temp[1] < 1) {
          throw new Error("cannot place ship here!");
        }

        for(const coord of coordinatesOccupied) {
          if (areEqual(coord, temp)) {
            throw new Error("cannot place ship here!");
          }
        }

        coords.push(temp);
      }
      
      for(const coord of coords) {
        coordinatesOccupied.push(coord);
      }

      let newShip = ship(shipLength, coords);
      ships.push(newShip);
    }
  }

  function shotsFired(coords) {
    for (const ship of ships) {
      for(const shipCoord of ship.coords) {
        if(areEqual(shipCoord, coords)) {
          ship.hit();
          return "hit";
        }
      }
    }
    shotsMissed.push(coords);
    return "miss";
  }


  function areSunk (){
    for(const ship of ships) {
      if(!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }

  return { changeRotation, placeShip, ships, shotsFired, shotsMissed, areSunk, coordinatesOccupied };
};

export default gameboard;
