
const recursive = () => {
        //Null doesnt return false (to allow AI to shoot borders)
        
        const left = (cell, num, key1, key2) => {

        if (cell === null) return true;
        if (cell[key1]) return false;
        if (num < 1) return true;
        return left(cell.left, --num, key1)
    }
    const right = (cell, num, key1) => {
        if (cell === null) return true;
        if (cell[key1]) return false;
        if (num < 1) return true;
        return right(cell.right, --num, key1)
    }
    const below = (cell, num, key1) => {
        if (cell === null) return true;
        if (cell[key1]) return false;
        if (num < 1) return true;
        return below(cell.below, --num, key1)
    }
    const above = (cell, num, key1) => {
        if (cell === null) return true;
        if (cell[key1]) return false;
        if (num < 1) return true;
        return above(cell.above, --num, key1)
    }
    
    
    //Null triggers false
    const leftNoNull = (cell, num, key1, key2) => {
        if (cell === null) return false;
        if (key1) return false;
        if (num < 1) return true;
        return left(cell.left, num--)
    }
    const rightNoNull = (cell, num, key1) => {
        if (cell === null) return false;
        if (key1) return false;
        if (num < 1) return true;
        return right(cell.right, num--)
    }
    const belowNoNull = (cell, num, key1) => {
        if (cell === null) return false;
        if (key1) return false;
        if (num < 1) return true;
        return below(cell.below, num--)
    }
    const aboveNoNull = (cell, num, key1) => {
        if (cell === null) return false;
        if (key1) return false;
        if (num < 1) return true;
        return above(cell.above, num--)
    }
    
    return {left, right, above, below, leftNoNull, rightNoNull, aboveNoNull, belowNoNull};
}

export default recursive;