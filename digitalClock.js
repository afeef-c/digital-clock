const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12){
        h =h-12;
    }
    if(h>= 12){
        ampm = "PM";
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;
    ampmEl.innerHTML = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000) // here 1st parameter of function setTimeout is a function 2nd parameter is 1000mil secs ie 1 second, so every one second the function excecutes 

}

updateClock(); // call onece no updates

