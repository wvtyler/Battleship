import player from './player';
import init from '../Gamehelpers/init';
import startGameplay from './startGameplay';
import AI from './ai';
import aiController from './aiController';
import setUpGame from '../Gamehelpers/setUpGame'
import audioPlayer from '../modules/audioPlayer'
import startButton from '../Gamehelpers/startButton';
import postgame from '../Gamehelpers/postgame';
let humanPlayer = new player();
let computerPlayer = new player();
let pcAI = AI(computerPlayer);

const gameController = () => {
    console.log('GAME CONTROLLER!!!')


    window.addEventListener('resize', resizeListener)
    startButton(start);
    
    function start(){
    
    init(humanPlayer, postInitCallback);
    audioPlayer();

    }




}

//Called after init is finished
function postInitCallback(){
    //Randomly Place AI Ships
    pcAI.placeShips(computerPlayer);
    //Load the start of game html
    const start = startGameplay(postGameCallback, humanPlayer, computerPlayer);
  
    //Load 2nd board and place html accordingly
        setUpGame(start.fireShotListener);
        resizeListener();
        //Begin the game!

        const restart = () => {
            console.log('RESTARTO!!!')
            humanPlayer = new player();
            computerPlayer = new player();
            pcAI = AI(computerPlayer);
            init(humanPlayer, postInitCallback);
        }

        function postGameCallback(result){
        console.log('games over')
        postgame(result, restart);
    }
}
    //Listens for window resize and adjusts ship placement accordingly
    function resizeListener(){

        humanPlayer.ships.map( (ship) => {
            ship.loadShipIcon() 

        });
    }


export default gameController;