import boardLoader from "./boardLoader";
import blueCell from "../Assets/blue-cell.png"
import redCell from '../Assets/red-cell.png'
import water from '../Assets/water1.jpg'



let lastIndex = undefined;
let currentMove = false;

function init(human, gameControllerCallback) {

    let shipsPlaced = 0;
    const board = boardLoader(placementCheck);
    const boardArr = Array.prototype.slice.call(board.children);
    loadTips();
    loadShipPlacement();

    spacebarListener();
    placementController()
    addHoverToCells();




// Listens for end of init and updates hover listeners after a click
    function placementController() {
        if(shipsPlaced === 5) {
            //Place AI ships randomly
            gameControllerCallback();
            return;
    }
        loadInfo();

    }
    
    //Loads screen for player to place ships
    function loadShipPlacement() {
        const div = document.querySelector('.board-holder')
        div.classList.add('show');

        if (div.classList[3]) div.classList.remove('hide');
        div.appendChild(board);
    }
    
    function loadTips() {

        const header = document.createElement('h2')
        header.classList.add('placement-header')
        header.innerHTML = 'Place your ships';
        const tip = document.createElement('p')
        tip.classList.add('spacebar-tip', 'wiggle')
        tip.innerHTML = 'Hit space to rotate';
        const info = document.querySelector('.board-holder-info')
        info.appendChild(header);
        info.appendChild(tip);
        //          <h2 class="placement-header"> Place your ships</h2>
        //          <p class="spacebar-tip wiggle"> Hit space to rotate</p>
    }
    //Load top info during ship placement phase(tip, boat)
    function loadInfo() {

        const info = document.querySelector('.board-holder-info')
        const ship = document.createElement('img');
        const shipname = document.createElement('p');
        shipname.innerHTML = `${human.ships[shipsPlaced].name}`;
        ship.classList.add('placement-icon');
        ship.src = human.ships[shipsPlaced].icon;
        //add a space for 'aircraft carrier'
        if(shipsPlaced===0) shipname.innerHTML = shipname.innerHTML.slice(0,8) + ' ' +shipname.innerHTML.slice(8);
        if(info.children[2]) {
            info.removeChild(info.children[2])
            info.removeChild(info.children[2])
        }
        info.appendChild(ship);
        info.appendChild(shipname);
  
    }
    // add a listener for the spacebar which swaps ship orientation
    function spacebarListener() {
        document.body.onkeyup = (function(e){
            if(e.code === 'Space') {

                human.ships[shipsPlaced].xAxis = !human.ships[shipsPlaced].xAxis
                if(lastIndex === 0 || lastIndex){
                    spacebarHoverRemove(human.ships[shipsPlaced].length, lastIndex, water);
                    placementCheck(lastIndex, human.ships[shipsPlaced]);
                    hoverHelper(human.ships[shipsPlaced].length, lastIndex, currentMove ? blueCell : redCell);
                }
            }
        })
    }
    
    //Add hover listeners mouseout, mouseover
    function addHoverToCells() {
        const ship = human.ships[shipsPlaced]
        const length = ship.length;
        for(let i=0; i<100; i++){
            
            //Mouseout Listener 
            board.children[i].addEventListener('mouseout',  function outListener(e){
                if(shipsPlaced===5) {
                    //remove outListener
                    boardArr[i].removeEventListener('mouseout', outListener)

                    return;
                }
                hoverHelper(human.ships[shipsPlaced].length, i, water)
                lastIndex = null;
            })
            
            //Mouseover Listener
            board.children[i].addEventListener('mouseover',  function mouseoverListener(e){
                if(shipsPlaced===5) {
                    //remove mouseOver Listener
                    boardArr[i].removeEventListener('mouseover', mouseoverListener)
                    return;
                }
                lastIndex = i;
                // If ship can be placed
                if(placementCheck(e.target.id.slice(5), ship )) {
                    hoverHelper(length, i, blueCell);
                } else { // Ship cannot be placed
                    hoverHelper(length, i, redCell)
                }
            })  
        }
    }
    //Iterates through cells that should be highlighted and gives them img as src
    function hoverHelper(length, index, img){
        // X axis
        if(human.ships[shipsPlaced].xAxis) {
            for(let i = 0; i<human.ships[shipsPlaced].length; i++){
                board.children[index +i].src= img;
                //break if next instance is null
                if(human.gameboard.board[index+i].right === null) break;
            }
        } else {
            // Y axis
            for(let i = 0; i < human.ships[shipsPlaced].length *10; i=i+10) {
                board.children[ index +i ].src= img;
                //break if next instance is null
                if(human.gameboard.board[index+i].below === null) break;
            }
        }
    }
    //Function to remove hover effects after hitting spacebar
    function spacebarHoverRemove(length, index, img){
        if(!human.ships[shipsPlaced].xAxis) {
            //Delete from old x axis 
            for(let i = 0; i<length; i++){
                board.children[index +i].src= img;
                if(human.gameboard.board[index+i].right === null) break;
            }
        } else {
            //Delete from old Y axis
            for(let i = 0; i<length; i++) {
                board.children[index +i*10].src= img;
                if(human.gameboard.board[index+i*10]?.below === null) break;

            }
        }
    }
    //use gameboard.testPlacement to check if a boat can be placed into a a cell
    function placementCheck(e){

        if(shipsPlaced === 5) {
            e.target.removeEventListener('click', placementCheck)
            return;
        }
        //if E is a mouse event, isolate the index number
        let index = (e === 0 || e ==='0' || Number(e))  ? e : e.target.id.slice(5)
        //If gameboard index is good for move
        if(human.gameboard.testPlacement(human.ships[shipsPlaced], index)) {
            currentMove = true;
            //Click Event on possible Move
            if(e.type === 'click') {
                human.gameboard.placeShip(human.ships[shipsPlaced], Number(index));
                let arr = Array.prototype.slice.call(board.children);
                //Put Highlighted cells back to water img
                human.ships[shipsPlaced].location.map(
                    (index) => arr[index].src=water)
                //Load ship icon in correct place (maybe in boardLoader?)
                human.ships[shipsPlaced].loadShipIcon();
                shipsPlaced++;
                placementController()
            }
            return true;
        } else {
            currentMove = false;
            return false;
        }
    }
}
export default init;