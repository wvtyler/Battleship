import player from "../modules/player";

const testPlayer = new player();


it('test player is defined', () => {
    expect(testPlayer).toBeDefined();
})

it('new player has a gameboard', () => {
    expect(testPlayer.gameboard).toBeDefined();
})

it('new player has a gameboard with length of 100', () => {
    expect(testPlayer.gameboard.board.length).toBe(100);
})