import gameboard from "./gameboard";
import shipTypes from "../Gamehelpers/Shiptypes";
import ship from "./ship";

//Player with a name, gameboard, their ships
class player{
    constructor(name = 'dummy name'){
        this.name = name;
        this.gameboard = new gameboard();
        this.ships = [];
        this.initShips();
    }
    //Add ships from shipTypes to this.ships
    initShips() {
        shipTypes.map( sampleShip => {
            this.ships.push(new ship(sampleShip.name));
        })
    }
    shipsRemaining() {
        let ships = 0;
        this.ships.map(ship => {
            if(!ship.isSunk) ships++;
        })
        return ships;
    }
}

export default player;