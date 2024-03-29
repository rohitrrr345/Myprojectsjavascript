let screen = document.querySelector('.screen');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let Reset = document.getElementById('Reset');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

start.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stop.addEventListener('click', function(){
    clearInterval(timerId);
});

Reset.addEventListener('click', function(){
    clearInterval(timerId);
    screen.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    screen.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}