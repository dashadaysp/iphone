(function () {

const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let today = new Date(),
dd = String(today.getDate()).padStart(2, "0"),
mm = String(today.getMonth() + 1).padStart(2, "0"),
yyyy = today.getFullYear(),
nextYear = yyyy + 1,
dayMonth = "05/15/",
date = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;

if (today > date) {
  date = dayMonth + nextYear;
}

const countDown = new Date(date).getTime();

setInterval(function () {

const now = new Date().getTime(),
distance = countDown - now;

document.getElementById("days").innerText = Math.floor(distance / day);
document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

}, 1000);

})();

var btn = document.getElementById('spoiler_button');
var text = document.getElementById('spoiler_text');

btn.onclick = function() {
if (text.className === 'fadeout') {
text.className = 'fadein';
btn.innerHTML = 'скрыть';
} else {
text.className = 'fadeout';
btn.innerHTML = 'узнать';
}
}