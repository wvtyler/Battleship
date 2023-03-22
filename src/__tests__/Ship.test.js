import ship from '../modules/ship';
const testShip = new ship('AircraftCarrier');
const testShip2 = new ship('Submarine');


it('first test ;)', ()=> {
    expect(testShip).toBeDefined();
});


it('test creating an aircraft carrier (length)', () => {
    expect(testShip.length).toBe(5);
})

it('test creating an aircraft carrier (name)', () => {
    expect(testShip.name).toBe('AircraftCarrier');
})