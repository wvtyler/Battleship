import recursive from "../Gamehelpers/recursiveFunctions";
class gameboard {
    constructor(){
        this.board = [];
        this.init();
        this.initNeighborValues();

    }
    init() {
        for(let i = 0; i < 100; i++) {
            this.board.push( {wasShot: false, hasShip:false, index: Number(i), ship: ''})
        }
    }
    //Set left, right, above, and below values for each cell to corresponding cell
    initNeighborValues(){
        this.board.map(cell => {
 
            //Set above Attribute
            if(cell.index < 10) {
                cell.above = null;
            } else {
                cell.above = this.board[cell.index - 10];
            }
            
            //Set below Attribute
            if(cell.index > 89) {
                cell.below = null;
            } else {
                cell.below = this.board[cell.index + 10];
            }

            //Set left Attribute
            if(cell.index % 10 === 0) {
                cell.left = null;
            } else {
                cell.left = this.board[cell.index - 1];
            }
            //Set right Attribute
            if((cell.index - 9 )% 10 === 0) {
                cell.right = null;
            } else {
                cell.right = this.board[cell.index + 1];
            }
        })
    }

    testPlacement(ship, index){
        if ( !this.board[index] )        return false;
        if ( this.board[index].hasShip ) return false;
        if(ship.xAxis){
            return this.#xAxisTest(ship.length-1, index);
        } else {

            return this.#yAxisTest(ship.length-1, index);
        } 
        
    }

    placeShip(ship, index) {
        if (ship.xAxis){
            for(let i = index; i <ship.length+index; i++) {
                ship.location.push(i);
                this.board[i].hasShip = true;
                this.board[i].ship = ship;
            }
        } else{
            for(let i = index; i <(ship.length*10) +index; i+=10) {
                ship.location.push(i);
                this.board[i].hasShip = true;
                this.board[i].ship = ship;
            }

        }
    }

    //Fires shot onto gameboard cell
    fireShot(index) {
        if ( this.board[index].hasShip === true ) {

        }
        this.board[index].wasShot = true;
    }
    
    
    //Private Functions
    #xAxisTest(itt, loc){
        if(itt === 0 ) return true;
        if(this.board[loc].right === null || this.board[loc].right.hasShip) return false;
        loc ++;
        itt --;
        return this.#xAxisTest(itt, loc)
    }
    #yAxisTest(itt, loc){      
        if(itt === 0 ) return true;
        if(this.board[loc].below === null || this.board[loc].below.hasShip) return false;
        itt --;
        loc = Number(loc)+10;
        return this.#yAxisTest(itt, loc)
    }
}

export default gameboard;