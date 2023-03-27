import gameController from "../modules/gameController";
const postgame = (result, restart) => {

    const resultDisplay = document.querySelector('.result-display')
    resultDisplay.classList.remove('hide');
    result === 'win' ? resultDisplay.innerHTML = "YOU WON!" : resultDisplay.innerHTML = 'YOU LOST!';
    const restartButton = document.querySelector('.game-start')
    const boardholderInfo = document.querySelector('.board-holder-info')
    const boardholderInfo2 = document.querySelector('.board2 .board-holder-info');
    boardholderInfo.classList.add('hide');
    boardholderInfo2.classList.add('hide');

    restartButton.classList.remove('hide');
    restartButton.addEventListener('click', function reset(){
        boardholderInfo.classList.remove('hide');
        boardholderInfo2.classList.remove('hide');
        const boardholder = document.querySelector('.board-holder');
        const boardholder2 = document.querySelector('.board2');
        boardholder.removeChild(boardholder.children[1]);
        boardholder2.removeChild(boardholder2.children[1]);
        boardholder.classList.remove('show');
        boardholder2.classList.remove('show');
        restartButton.classList.add('hide');
        restart();
        restartButton.removeEventListener('click', reset);
        resultDisplay.classList.add('hide');
    });

}
export default postgame;