// let audio = document.querySelectorAll("audio");


function playMusic(e){
    let music = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    console.log(key);
    key.classList.add("playing");
    music.currentTime = 0;
    if(!music) return;
    music.play();
}

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    console.log(e.propertyName);
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend",removeTransition));
    document.addEventListener("keydown" , playMusic);