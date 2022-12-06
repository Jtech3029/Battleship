import ship from "./ship";

const gameboard = () => {
  let ships = [];
  let shotsMissed = [];
  let shotsHit = [];

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
        coords.push(temp);
      }
      let newShip = ship(shipLength, coords);
      ships.push(newShip);
    } else if (rotation == "vertical") {
      let coords = [];
      for (let i = 0; i < shipLength; i++) {
        let temp = shipCoords.map((x) => x);
        temp[1] = temp[1] + i;
        coords.push(temp);
      }
      let newShip = ship(shipLength, coords);
      ships.push(newShip);
    }
  }

  function shotsFired(coords) {
    let count = 0;
    while(areEqual(coords))

  }

  function areEqual(array1, array2) {
    let N = array1.length;
    let M = array2.length;
    if (N != M) return false;
  
    for (let i = 0; i < N; i++) if (array1[i] != array2[i]) return false;
  
    return true;
  }

  return { changeRotation, placeShip, ships };
};

export default gameboard;
