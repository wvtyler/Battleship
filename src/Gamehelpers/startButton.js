const startButton = (callback) => {
    const start = document.querySelector('.game-start')
    start.addEventListener('click', function begin(){
        callback();
        start.classList.add('hide');
        start.removeEventListener('click', begin);
        start.innerHTML = 'RESTART';
    });

}
export default startButton;