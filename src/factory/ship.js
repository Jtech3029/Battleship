/**
 * creates a ship object that can determine if it is sunk,
 * add hits and what the coordinates of the ship are
 * @param {integer} length 
 * @param {ArrayBufferConstructor} coords 
 * @returns length, hit, isSunk, coords
 */
const ship = (length, coords) => {
  let hits = 0;

  /**
   * adds a hit
   */
  function hit() {
    hits++;
  }

  /**
   * determines if the ship is sunk
   * @returns boolean
   */
  function isSunk() {
    return hits >= length;
  }

  return { length, hit, isSunk, coords };
};

export default ship;
