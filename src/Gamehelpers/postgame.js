import gameController from "../modules/gameController";
const postgame = (result, restart) => {

    const resultDisplay = document.querySelector('.result-display')
    resultDisplay.classList.remove('hide');
    result === 'win' ? resultDisplay.innerHTML = "YOU WON!" : resultDisplay.innerHTML = 'YOU LOST!';
    
    const restartButton = document.querySelector('.game-start')
    const boardholder = document.querySelector('.board-holder')
    boardholder.classList.add('hide');
    boardholder.removeChild(boardholder.children[1]);
    const boardholder2 = document.querySelector('.board2')
    boardholder2.removeChild(boardholder2.children[1])

    boardholder2.classList.remove('show');
    restartButton.classList.remove('hide');
    restartButton.addEventListener('click', function reset(){
        restartButton.classList.add('hide');
        restart();
        restartButton.removeEventListener('click', reset);
        resultDisplay.classList.add('hide');
    });

}
export default postgame;