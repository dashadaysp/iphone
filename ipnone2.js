window.onload = function () {

const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDown = new Date("May 15, 2026 00:00:00").getTime();

setInterval(function () {

let now = new Date().getTime();
let distance = countDown - now;

document.getElementById("days").innerText = Math.floor(distance / day);
document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

if (distance < 0) {
  document.getElementById("headline").innerText = "Акция завершена";
  document.getElementById("countdown").style.display = "none";
}

}, 1000);


// СПОЙЛЕР
var divToggleVis = document.getElementById('spoiler_text');
var button = document.getElementById('spoiler_button');

button.onclick = function() {
    if (divToggleVis.className === 'fadeout') {
        divToggleVis.className = 'fadein';
        button.innerHTML = 'скрыть';
    } else {
        divToggleVis.className = 'fadeout';
        button.innerHTML = 'узнать';
    }
}

}
