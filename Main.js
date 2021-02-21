const deg = 6; 

const Hour = document.querySelector('#Hour');
const Min = document.querySelector('#Min');
const Sec = document.querySelector('#Sec');

setInterval(() => {
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * deg;
    let s = day.getSeconds() * deg;

    Hour.style.transform = `rotateZ(${(h) + (m / 12)}deg)`;
    Min.style.transform = `rotateZ(${m}deg)`;
    Sec.style.transform = `rotateZ(${s}deg)`;
})