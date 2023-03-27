import aiController from "./aiController";
import AI from "./ai";
const startGameplay= (gameEndCallback, humanPlayer, computerPlayer) => {
    
    const playerTurn = true;
    let gameEnd = false;


    clearInfo();
    setInfo();


    function clearInfo() {

        const info = document.querySelectorAll('.board-holder-info');
        const infoArr = [...info[0].children]
        infoArr.map( element => {
            info[0].removeChild(element)
        });
        
    }

    function setInfo() {
        const playerInfo = document.querySelector('.player-info')
        const turn = document.createElement('h1');
        turn.classList.add('turn-info')
        turn.innerHTML = playerTurn ? "Your turn" : 'Computer Turn';
        const shipsDiv = document.createElement('div');
        shipsDiv.classList.add('red-filter')
        const subtext = document.createElement('p');
        subtext.classList.add('info-subtext');
        subtext.innerHTML = `Enemy ships remaining: ${computerPlayer.shipsRemaining()}`;
        playerInfo.appendChild(subtext);
        const unsunk = computerPlayer.ships.filter(ship => ship.isSunk === false)
        unsunk.map(ship => {
            const shipIcon = document.createElement('img');
            shipIcon.classList.add('player-info-ship');
            shipIcon.src = ship.icon;
            shipsDiv.appendChild(shipIcon);
        })

        playerInfo.appendChild(turn);
        playerInfo.appendChild(shipsDiv);
    }

    function setAttackInfo(attack){

        const board2info = document.querySelector('.board2 .board-holder-info')

        board2info.innerHTML = '';
        const board2infoheader = document.createElement('h2');
        board2infoheader.innerHTML = 'Last Attack';
        board2info.appendChild(board2infoheader);
        if(attack === 'miss') {
            const missedAttack = document.createElement('h2');
            missedAttack.classList.add('missed-attack');
            missedAttack.innerHTML = 'MISS';
            board2info.appendChild(missedAttack);
        }
        else{
            const successfulAttack = document.createElement('h2');
            successfulAttack.classList.add('successful-attack');
            successfulAttack.innerHTML = `HIT on ${attack.name}`;
            board2info.appendChild(successfulAttack);
        }

    }
    const fireShotListener = (e) => {
        const pcBoard = document.querySelector('.pc-board')
        pcBoard.classList.add('no-pointer-events')

        interpretAttack(e.target);
            clearInfo();
            setInfo();
        //check for game end
        checkForGameEnd(computerPlayer, true);
        const AIC = aiController(humanPlayer);

        
        //PC attack
        if(!gameEnd) {
            setTimeout( function(){
                interpretPCAttack(AIC);
                //check for game end
                checkForGameEnd(humanPlayer);
                pcBoard.classList.remove('no-pointer-events');
            }, 100);
        }



    }
    const checkForGameEnd = (player, human) => {

        if(player.shipsRemaining() === 0){
            gameEnd = true;
            clearInfo();
            const board2info = document.querySelector('.board2 .board-holder-info')
            board2info.innerHTML = ''
            gameEndCallback(human ? 'win' : 'loss');
        }
    }
    const interpretAttack = (cell) => {

        
        const cellNum = cell.id.slice(8); // breh ...

        computerPlayer.gameboard.fireShot(cellNum)
        //If player hits pc ship
        if(computerPlayer.gameboard.board[cellNum].hasShip) {

            const hitShip = computerPlayer.ships.find(ship => ship.location.includes(Number(cellNum)));

            hitShip.addHit();
            hit(cell)
            setAttackInfo(hitShip);
        }
        //Player misses
        else { 
            miss(cell);
            setAttackInfo('miss');
        }
    }
    const interpretPCAttack = (cellNum) => {

        const cell = document.querySelector(`#cell-${cellNum}`)
        humanPlayer.gameboard.fireShot(cellNum);
        //If PC player hits human
        if(humanPlayer.gameboard.board[cellNum].hasShip) {
            const hitShip = humanPlayer.ships.find(ship => ship.location.includes(cellNum));

            hitShip.addHit();

            hit(cell)
        }
        
        //Pc player misses
        else { miss(cell)};

    }
    const hit = (cell) => {

        cell.classList.add('hit')
    }
    const miss = (cell) => {

        cell.classList.add('miss')
    }
    return {fireShotListener};
}



export default startGameplay;