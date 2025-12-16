isrunning = false;
let [hours, min, sec] = [0, 0, 0];
let time;
function update() {
    document.getElementById("stopwatch").textContent =
        (hours < 10 ? "0" + hours : hours) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
}
function start() {
    if (!isrunning) {
        isrunning = true;

        time = setInterval(
            (() => {
                sec++;
                if (sec === 60)
                 {
                    sec = 0;
                    min++;
                    if (min === 60) {
                        min = 0;
                        hours++;
                    }
                } update();
            })

            , 10)
    }
}
function stop() {
    if (isrunning) {
        clearInterval(time);
    }
    isrunning = false;
}

function reset() {
       clearInterval(time);
        isrunning = false;
        [hours, min, sec] = [0, 0, 0];
        update();
}
// digital clock
function clock() {
    const newd = new Date();
    let thours = newd.getHours();
    const apm = thours >= 12 ? "pm" : "am";
    thours = thours % 12 || 12;
    thours = thours.toString().padStart(2, 0);
    const tmin = newd.getMinutes().toString().padStart(2, 0);
    const tsec = newd.getSeconds().toString().padStart(2, 0);
    const time = `${thours}:${tmin}:${tsec} ${apm}`;
    document.getElementById("clock").textContent = time;
}
clock();
setInterval(clock, 1000);