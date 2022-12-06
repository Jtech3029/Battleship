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


})