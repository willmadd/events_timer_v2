
const audios = {
    'happy': new Audio('/mp3/happy.mp3'),
    'hermit': new Audio('/mp3/hermit.mp3'),
    'Alone': new Audio('/mp3/Alone.mp3'),
    'Empire-Seasons': new Audio('/mp3/Empire-Seasons.mp3'),
    'Fairy-Meeting': new Audio('/mp3/Fairy-Meeting.mp3'),
    'Stairway': new Audio('/mp3/Stairway.mp3'),
    'Wander': new Audio('/mp3/Wander.mp3'),
};

let currentlyPlaying = null;

const play = (name) => {
    if (currentlyPlaying) {
        audios[currentlyPlaying].pause();
    }
    audios[name].play();
    currentlyPlaying = name;
};

const pause = (name) => {
    currentlyPlaying = null;
    audios[name].pause();
};

export default {
    pause,
    play
};