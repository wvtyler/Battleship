import boardLoader from "./boardLoader";


const setUpGame = (fireShotListener) => {
    boardControls();

    
    function boardControls(){

        const div = document.querySelector('.board2');
        const board = document.querySelector('.board-holder');
        const boardLoc = board.getBoundingClientRect();
        loadSecondBoard();

        splitBoards();


        function loadSecondBoard(){
            const board2 = boardLoader(fireShotListener, true);

            div.style.top = `${boardLoc.top}px`;
            div.style.left = `${boardLoc.left}px`;
            div.classList.add('board2-right')
            board2.classList.add('pc-board')
            div.appendChild(board2);
            
        
        }
        

        function splitBoards(){

            

            board.classList.add('twoBoardSetupLeft')

            div.style.left = `${window.innerWidth/2}px`;
            div.classList.add('show');

            
        }
    }

}

export default setUpGame;