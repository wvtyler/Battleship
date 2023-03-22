import gameboard from "../modules/gameboard";
import ship from "../modules/ship";

const testboard = new gameboard;
const testship = new ship('AircraftCarrier');
const testship2 = new ship('AircraftCarrier');
testship2.xAxis = false;


//Basic constructor tests
it('new gameboard length', () => {
    expect(testboard.board.length).toBe(100);
})
it(' #26 has not been shot', () => {
    expect(testboard.board[26].wasShot).toBe(false);
})
it('#55 has no ship', () => {
    expect(testboard.board[55].hasShip).toBe(false);
})
it('#9 has null to the right', () => {
    expect(testboard.board[9].right).toBe(null);
})
it('#20 has null to the left', () => {
    expect(testboard.board[20].left).toBe(null);
})


//Left, Right, Above, Below Functionality
it('#4 has null above', () => {
    expect(testboard.board[4].above).toBe(null);
})
it('#99 has null below', () => {
    expect(testboard.board[99].below).toBe(null);
})
it('#25 has 24 to left', () => {
    expect(testboard.board[25].left.index).toBe(24);
})
it('#25 has 26 to right', () => {
    expect(testboard.board[25].right.index).toBe(26);
})
it('#25 has 15 above', () => {
    expect(testboard.board[25].above.index).toBe(15);
})
it('#25 has 35 below', () => {
    expect(testboard.board[25].below.index).toBe(35);
})


//Method testing

//testPlacement ---
it('wrong input', () => {
    expect(testboard.testPlacement(testship, 105)).toBe(false);
})
it('wrong input', () => {
    expect(testboard.testPlacement(testship, 98)).toBe(false);
})

// X axis
it('x ship placement (should be false)', () => {
    expect(testboard.testPlacement(testship, 9)).toBe(false);
})
it('x ship placement (should be true)', () => {
    expect(testboard.testPlacement(testship, 0)).toBe(true);
})
it('x ship placement on right edge (should be true)', () => {
    expect(testboard.testPlacement(testship, 5)).toBe(true);
})
it('x ship placement on right edge (should be false)', () => {
    expect(testboard.testPlacement(testship, 6)).toBe(false);
})
// Y axis 
it('y ship placement on top edge', () => {
    expect(testboard.testPlacement(testship2 , 0 )).toBe(true);
})
it('y ship placement over bottom edge', () => {
    expect(testboard.testPlacement(testship2 , 90 )).toBe(false);
})

// //Test Location for Placement

// it('test location placement', () => {
//     expect(gameboard.testLocationForPlacement)
// })