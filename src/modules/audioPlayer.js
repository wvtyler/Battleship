import song1    from '../Assets/song1.mp3'
import song2    from '../Assets/song2.mp3'
import song3    from '../Assets/song3.mp3'
import play     from '../Assets/play.png'
import pause    from '../Assets/pause1.png'
import next     from '../Assets/nextSong.png'

const songs = [song1, song2, song3];
let songNumber = 0;
let playing = true;
let audio = new Audio()
const audioPlayer = () => {

        audio.src = song1;
        audio.volume = 0.001;
        audio.play();



    const nextSong = document.createElement('img');
    nextSong.classList.add('nextSong-button');
    nextSong.src = next;
    
    const playPause = document.createElement('img');
    playPause.classList.add('playPause-button');
    playPause.src = pause;

    nextSong.addEventListener('click', function nextSongListener(){
        songNumber++;
        if(songNumber > 2) songNumber = 0;
        audio.src = songs[songNumber];
        audio.play();
        playPause.src = pause;
        playing = true;
    })

    playPause.addEventListener('click', function playPauseListener(){
        if(playing) {
            audio.pause();
            playPause.src = play;
            playing = false;
        } else{
            audio.play();
            playPause.src = pause;
            playing = true;
        }

    })
    const audioDiv = document.createElement('div');
    audioDiv.classList.add('audio-div');
    audioDiv.appendChild(nextSong);
    audioDiv.appendChild(playPause);
    document.body.appendChild(audioDiv);
}

export default audioPlayer;