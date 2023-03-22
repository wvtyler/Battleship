import AI from "./ai";

const aiController = (player) => {

    const aiC =  AI(player);

    //If there are hits on unsunk ships, fire at them
    const hits = aiC.getHits();
    if ( hits.length > 0){
        const unsunk = aiC.getUnsunkHits(hits);
        if (unsunk.length > 0) {
            return aiC.attackFromUnsunk(unsunk);
        }
    }
    
    //If there are no obvious attacks, choose an efficient one randomly
    const numFreeSpaces = aiC.maxEnemyLength()-1;
    const attacks = aiC.filterShotsByValue(numFreeSpaces);
    return aiC.chooseRandom(attacks);
}
export default aiController;