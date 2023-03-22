import shipTypes from "../Gamehelpers/Shiptypes";
import carrier from "../Assets/carrier.png";
import battleship from "../Assets/battleship.png";
import sub from "../Assets/sub.png";
import destroyer from "../Assets/destroyer.png";
import frigate from "../Assets/frigate.png";
const boats = [ 
        {AircraftCarrier:carrier},
        {Battleship:battleship}, 
        {Submarine :sub}, 
        {Destroyer:destroyer}, 
        {Frigate:frigate}]

class ship{
    constructor(type) {
        //Make sure boat exists in Shiptypes.js and set length accordingly
        if(shipTypes.find(x => x.name ===  type)) {
            this.name = type;
            this.length = shipTypes.find(x => x.name === type ).length;
        } else {
            return null;
        }
        this.isSunk = false;
        this.location = [];
        this.xAxis = true;
        this.icon = Object.values(boats.filter((boat) => boat[this.name])[0])
        this.hits = 0;
    }
    checkSunk(){
        if (this.hits === this.length) this.isSunk = true;

    }
    addHit(){
        this.hits++;
        this.checkSunk();
    }
    setLocation(index){
        if (this.xAxis) {
            for(let i = 0; i<this.length; i++){
                this.location.push(this.xAxis ? index+i : index+(i*10));
            }
        }
    }
    // Load ship icons into HTML and place accordingly according to board (query selector??)
    loadShipIcon(){

        if( this.location.length === 0 ) return;
        const location = this.location[0];
        const cell = document.querySelector(`#cell-${location}`)
        const cord = (cell.getBoundingClientRect())
        //For calling upon resizing a window.. if it exists, modify exisiting ship, else create a new one
        const iconImg = (!document.querySelector(`#${this.name}-icon`)) ? document.createElement('img') : (document.querySelector(`#${this.name}-icon`));
        iconImg.src = this.icon;
        iconImg.classList.add('ship-icon')
        iconImg.id = `${this.name}-icon`
        iconImg.style.position = 'absolute';
        // If Y Axis change left attr, rotate
        if(!this.xAxis) {
            iconImg.style.transform = "rotate(90deg)"
            iconImg.style.left = `${cord.left+40}px`
        }else iconImg.style.left = `${cord.left}px`; 
        
        iconImg.style.top = `${cord.top}px`;
        
        if (!document.querySelector(`#${this.name}-icon`)){
            const boardDiv = document.querySelector('.board')
            
            boardDiv.append(iconImg)
        }

   

    }
}

export default ship;