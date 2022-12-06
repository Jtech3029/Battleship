import ship from "../factory/ship";

describe("ship functions", () => {
  test("returns the length of the ship", () => {
    let testShip = ship(5);

    expect(testShip.length).toBe(5);
  });

  test("ship can be sunk", () => {
    let testShip = ship(5);

    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();

    expect(testShip.isSunk()).toBe(true);
  });

  test("ship can be check if it isn't sunk", () => {
    let testShip = ship(5);

    testShip.hit();

    expect(testShip.isSunk()).toBe(false);
  });

  test("ship can add coords", () => {
    let testShip = ship(5, [[5,5],[6,6]]);

    expect(testShip.coords).toEqual([[5,5],[6,6]]);
  })
});
