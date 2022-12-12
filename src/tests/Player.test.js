import Player from "../factory/Player"
describe("test player functionality", () => {
    test("player can shoot an enemy gameboard", () => {
        let play1 = Player(true);
        let play2 = Player();

        play1.shoot([4,5], play2);

        expect(play2.game.shotsMissed).toEqual([[4,5]]);
    })

    test("player can shoot an enemy gameboard", () => {
        let play1 = Player();
        let play2 = Player();

        play1.shoot([4,5], play2);

        expect(play2.game.shotsMissed).toEqual([[4,5]]);
    })
    test("robot makes random moves that haven't been made before", () => {
        let play1 = Player();
        let play2 = Player();

        play1.machineShoot(play2);

        expect(play2.game.shotsMissed.length).toBe(1);
    })
})