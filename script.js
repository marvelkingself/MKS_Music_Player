console.log("welcome to spot");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songMaster = document.getElementById('songMaster');
let MyProcessBar = document.getElementById('MyProcessBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songitem'));
let song = [
    { songName: "warriyo - mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo -huma huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Deaf KEV- Inv", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Haven", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heros-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Mere Bina Crook", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Tum Kya Mile", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: " khulle kharche", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Rang-Lageya---", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: " Check It Out", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]
song.forEach((element, i) => {

    document.getElementsByClassName("songImg")[i].src = song[i].coverPath;
    document.getElementsByClassName("songName")[i].innerHTML = song[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    MyProcessBar.value = progress;
})
MyProcessBar.addEventListener('change', () => {
    audioElement.currentTime = MyProcessBar.value * audioElement.duration / 100
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })

}
Array.from(document.getElementsByClassName('songItemPlay ')).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e);
        makeAllPlay();
        index = parseInt(e.target.id);
        console.log(index)

        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");

        audioElement.src = "songs/" + index + ".mp3"
        songMaster.innerText=song[index].songName;
        audioElement.currentTime = 0;
        audioElement.play()
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById("next").addEventListener("click", () => {
    if (index >= 10) {
        index = 1;
    } else {
        index += 1;
    }
        audioElement.src = "songs/" + index + ".mp3"
        songMaster.innerText=song[index].songName;
        audioElement.currentTime = 0;
        audioElement.play()
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    document.getElementById("previous").addEventListener("click", () => {
        if (index <= 0) {
            index = 10;
        } else {
            index -= 1;
        }
            audioElement.src = "songs/" + index + ".mp3"
            songMaster.innerText=song[index].songName;
            audioElement.currentTime = 0;
            audioElement.play()
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
// audioElement.play();