import recursive from "../Gamehelpers/recursiveFunctions";

const recursiver = recursive();
const AI = (humanplayer) => {

    const gameboard = humanplayer.gameboard.board;
    
    // If there are unsunk ships that have been hit, finish them off

    // Else find a shot with max length boat free spaces in all directions

    // Return the max ship length of unsunk ships ***** Need to check if ship is SUNK!!!
    const maxEnemyLength = () => {
        return humanplayer.ships.reduce(
            (acc, cur) => {
                if(cur.length > acc.length && cur.isSunk === false) return cur;
                return acc;
            }
        ).length
    }
    
    const filterShotsByValue = (numFreeSpaces) => {
        const filter1 = gameboard.filter(cell => recursionFilter(cell, numFreeSpaces)).map(x => x.index);
        if(filter1.length>0) {
            return filter1;
        }
        return filterShotsByValue(numFreeSpaces-1);
    }
    
    
    const recursionFilter = (cell, numFreeSpaces) => {
        if( recursiver.left(cell, numFreeSpaces, 'wasShot') && recursiver.right(cell, numFreeSpaces, 'wasShot') && recursiver.above(cell, numFreeSpaces, 'wasShot') && recursiver.below(cell, numFreeSpaces, 'wasShot')) {
            return true;
        }
        return false;
    }

    // Return Hits on board ==> return goes to unsunkHits()
    const getHits = () => {
        const hits = gameboard.filter( cell => {
            if(cell.wasShot === true && cell.hasShip === true) return true;
            return false;
        })
        return hits.map(x => x.index);
    }
    
    // Sort array of hits => array of hits on unsunken ships   ====> return goes to attack from unsunk
    const getUnsunkHits = (hits) => {
        console.log('get unsunk hits')
        const x = hits.map(hit => {
           const tempShip = humanplayer.ships.find( ship => ship.location.includes(hit))
           if( ! tempShip.isSunk ) return hit;
           return null;
        })
        return x.filter(s=>s);
    }
    
     // Find Next shot when there are any hits on unsunken ships ==> calls either linked attack(1+) or potential neighbor attack(1)
    const attackFromUnsunk = (unsunkHits) => {
        console.log('attack from unsunk ship')
        const multiHits = unsunkHits.filter(hit => humanplayer.gameboard.board[hit].ship.hits>1)
        if(multiHits.length > 0) {
            const multiHitStrikes =  multiHits.map( hit => multiHitPotentialAttacks(hit, humanplayer.gameboard.board[hit].ship.xAxis))
            return chooseRandom(multiHitStrikes.flat())
        }
        return linkedAttack(unsunkHits);
    }
    
    //Get linked attacks (unsunk will be asc order)     `````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const linkedAttack = (unsunkHits) => {
        if (chooseRandom([1,2])===1) unsunkHits = unsunkHits.reverse();
        // const cell = unsunkHits.shift();
        const suitableStrikes = unsunkHits.map(hit => potentialNeighborAttacks(hit))
        return chooseRandom(suitableStrikes.flat())
    }
    
    //Get all neighbor cells that are open to attack from a single cell (if no ship has been shot more than once)
    const potentialNeighborAttacks = (strike) => {
        let potentialStrikes = [];
        if(gameboard[strike].right && !gameboard[strike].right.wasShot) potentialStrikes.push(gameboard[strike].right.index);
        if(gameboard[strike].below && !gameboard[strike].below.wasShot) potentialStrikes.push(gameboard[strike].below.index);
        if(gameboard[strike].left  && !gameboard[strike].left.wasShot)  potentialStrikes.push(gameboard[strike].left.index);
        if(gameboard[strike].above && !gameboard[strike].above.wasShot) potentialStrikes.push(gameboard[strike].above.index);
        return potentialStrikes;
    }
    //Get potential attacks when a ship has more than 1 hit already(its direction is known)
    const multiHitPotentialAttacks = (strike, dir) => {
        let potentialStrikes = [];
        if ( dir ){
            if(gameboard[strike].left  && !gameboard[strike].left.wasShot)  potentialStrikes.push(gameboard[strike].left.index);
            if(gameboard[strike].right && !gameboard[strike].right.wasShot) potentialStrikes.push(gameboard[strike].right.index);
        
        } else {
            if(gameboard[strike].above && !gameboard[strike].above.wasShot) potentialStrikes.push(gameboard[strike].above.index);
            if(gameboard[strike].below && !gameboard[strike].below.wasShot) potentialStrikes.push(gameboard[strike].below.index);
        }
        return potentialStrikes;
    }
    //Choose a random element from array
    const chooseRandom = (arr) => {
        const length = arr.length;
        return arr[Math.floor(Math.random() * length)];
    }

    const placeShips = (aiPlayer) => {
        aiPlayer.ships.map((ship) => {           
            if(chooseRandom([1,2])===2) ship.xAxis = false;
            let cell = (chooseRandom(aiPlayer.gameboard.board))
            while(!aiPlayer.gameboard.testPlacement(ship, cell.index)) {
                cell = (chooseRandom(aiPlayer.gameboard.board))
            }
            aiPlayer.gameboard.placeShip(ship, cell.index);
        });
    }
    
    return {maxEnemyLength, getHits, attackFromUnsunk, getUnsunkHits, potentialNeighborAttacks, chooseRandom, linkedAttack, recursionFilter, filterShotsByValue, placeShips};
}

export default AI;