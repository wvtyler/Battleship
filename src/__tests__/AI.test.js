import AI from "../modules/ai";
import aiController from '../modules/aiController'
import player from "../modules/player";


const pcplayer = new player();
pcplayer.gameboard.board[24].wasShot = true;
pcplayer.gameboard.board[24].hasShip = true;
pcplayer.gameboard.board[25].wasShot = true;
pcplayer.gameboard.board[25].hasShip = true;
pcplayer.ships[1].location = [23,24,25,26];
pcplayer.ships[2].location = [33,34,35,36];
pcplayer.ships[2].isSunk = true;
pcplayer.gameboard.board[33].wasShot = true;
pcplayer.gameboard.board[34].wasShot = true;
pcplayer.gameboard.board[35].wasShot = true;
pcplayer.gameboard.board[36].wasShot = true;
pcplayer.gameboard.board[33].hasShip = true;
pcplayer.gameboard.board[34].hasShip = true;
pcplayer.gameboard.board[35].hasShip = true;
pcplayer.gameboard.board[36].hasShip = true;
const AITest = AI(pcplayer);
const aiCTest = aiController(pcplayer);
const aiCTest2 = aiController(new player())


it('AIC test', () => {
    expect(aiCTest).toBe(26)
})
it('AIC blank board test', () => {
    expect(aiCTest2).toBeDefined();
})

it('basic AI player test', () => {
    expect(pcplayer).toBeDefined();
})
it('max Enemy length test', () => {
    expect(AITest.maxEnemyLength()).toBe(5);
})
it('Find 24 was shot and a boat was there when searching for hits', () => {
    expect(AITest.getHits()).toStrictEqual(([24,25,33,34,35,36]));
})
it('Find 24,25 was shot and a boat was there when searching for hits', () => {
    expect(AITest.getUnsunkHits(AITest.getHits())).toStrictEqual(([24,25]));
})


//Potential neighbor attacks
it('0 should return 1 and 10 as potential neighbor strikes', () => {
    expect(AITest.potentialNeighborAttacks([0])).toStrictEqual([1,10]);
})
it('25 should return 26,35,24,15 as potential neighbor strikes', () => {
    expect(AITest.potentialNeighborAttacks([25])).toStrictEqual([26,35,24,15]);
})

//Choose Random
it('random check for defined', () => {
    expect(AITest.chooseRandom([23,24,25])).toBeDefined();
})

//Linked Attack
it('X doesnt return non-cells', () => {
    expect(AITest.linkedAttack([98,99])).toBe(97);
})
it('X Ensure it doesnt return already shot cells', () => {
    expect(AITest.linkedAttack([22,23])).toBe(21);
})
it('Y basic test', () => {
    expect(AITest.linkedAttack([83,93])).toBe(73);
})
it('Y basic test', () => {
    expect(AITest.linkedAttack([34,44,54])).toBe(64);
})

// //Left Recursive Test
// it('left recursion', () => {
//     expect(AITest.leftRecursion(pcplayer.gameboard.board[0], 3)).toBe(true);
// })

// FilterShotsbyValue
it('run the filter with 5', () => {
    expect(AITest.filterShotsByValue(5)).toBeDefined();
})
it('recursion filter', () => {
    expect(AITest.recursionFilter(pcplayer.gameboard.board[49], 5)).toBe(true)
})