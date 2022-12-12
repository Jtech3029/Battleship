import gameboard from "../factory/Gameboard"

describe("gameboard functions", () => {

  test("place ships on a coordinate and horizontal test", () => {
    let game = gameboard();
    game.placeShip(4, ([0,1]));

    expect(game.ships[0].coords).toEqual([[0,1],[1,1],[2,1],[3,1]])
  })

  test("works with vertical axis", () => {
    let game = gameboard();
    game.changeRotation();
    game.placeShip(3, ([0,1]));

    expect(game.ships[0].coords).toEqual([[0,1],[0,2],[0,3]])
  }) 

  test("prevents intersecting ships", () => {
    let game = gameboard();
    game.changeRotation();
    game.placeShip(3, ([0,1]));

    expect(() => game.placeShip(3, ([0,1]))).toThrow("cannot place ship here!")
  })
  test("shots fired detects if missed", () => {
    let game = gameboard();
    game.changeRotation();
    game.placeShip(3, ([0,1]));

    game.shotsFired([0,7])

    expect(game.shotsMissed).toEqual([[0,7]])
  })

  test("shots fired detects if hit", () => {
    let game = gameboard();
    game.changeRotation();
    game.placeShip(4, ([0,3]));

    game.shotsFired([0,4])

    expect(game.shotsHit).toEqual([[0,4]])
  })

  test("detects if all ships are sunk", () => {
    let game = gameboard();
    game.changeRotation();
    game.placeShip(3, ([0,3]));
    game.placeShip(3, ([1,3]));
    game.placeShip(3, ([2,3]));


    game.shotsFired([0,3])
    game.shotsFired([0,4])
    game.shotsFired([0,5])

    game.shotsFired([1,3])
    game.shotsFired([1,4])
    game.shotsFired([1,5])

    game.shotsFired([2,3])
    game.shotsFired([2,4])
    game.shotsFired([2,5])

    expect(game.areSunk()).toEqual(true)
  })

  test("works if only some ships are sunk", () => {
    let game = gameboard();
    game.changeRotation();
    game.placeShip(3, ([0,3]));
    game.placeShip(3, ([1,3]));
    game.placeShip(3, ([2,3]));


    game.shotsFired([0,3])
    game.shotsFired([0,4])
    game.shotsFired([0,5])

    game.shotsFired([3,3])
    game.shotsFired([3,4])
    game.shotsFired([3,5])

    expect(game.areSunk()).toEqual(false)
  })

  test("works if no ships are sunk", () => {
    let game = gameboard();
    game.changeRotation();
    game.placeShip(3, ([0,3]));
    game.placeShip(3, ([1,3]));
    game.placeShip(3, ([2,3]));

    expect(game.areSunk()).toEqual(false)
  })
})