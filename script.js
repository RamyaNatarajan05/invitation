const weddingDate = new Date("July 5, 2026 06:00:00");

function updateCountdown(){

const now = new Date();

const diff = weddingDate - now;

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor((diff/(1000*60*60))%24);
const mins = Math.floor((diff/(1000*60))%60);
const secs = Math.floor((diff/1000)%60);

document.getElementById("countdown").innerHTML =
`${days} Days ${hours} Hrs ${mins} Min ${secs} Sec`;

}

setInterval(updateCountdown,1000);

const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");

btn.addEventListener("click",()=>{

if(music.paused){
music.play();
btn.innerHTML="🔊";
}
else{
music.pause();
btn.innerHTML="🎵";
}

});