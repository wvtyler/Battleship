import water from '../Assets/water1.jpg'
function boardLoader(cb, pcPlayer){

    const board = document.createElement('div');
    board.classList.add('board');

    for(let i =0; i<100; i++) {
        const cell = document.createElement('img');
        cell.classList.add('cell');
        cell.src = water;
        cell.id = `cell-${pcPlayer ? '2' : ""}${i}`;
        board.appendChild(cell);
        if(cb){
        cell.addEventListener('click', function func(e){
                cb(e)
                cell.removeEventListener('click', func)
            })
        }
        if(pcPlayer) {
            cell.addEventListener('mouseover' , function(){
                cell.classList.add('cell-hover');
            })
        }   cell.addEventListener('mouseout', function(){

        })
    }

    return board;
}

export default boardLoader;