document
.getElementById("openBtn")
.addEventListener("click",function(){

document
.getElementById("cover")
.classList
.add("cover-hide");

document
.getElementById("mainContent")
.classList
.add("show");

});

const weddingDate =
new Date("July 5, 2026 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

document.getElementById("days").innerHTML =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("hours").innerHTML =
Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

document.getElementById("minutes").innerHTML =
Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

document.getElementById("seconds").innerHTML =
Math.floor(
(distance % (1000 * 60))
/
1000
);

},1000);
