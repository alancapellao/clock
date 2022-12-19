function showTime24() {

    const clock = document.querySelector('time');
    const dat = document.querySelector('.date');

    const d = new Date();

    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let monthE = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let dayE = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    clock.innerText = hour + ":" + min + ":" + sec;
    dat.innerText = dayE[day] + ", " + date + " de " + monthE[month] + " de " + year;
}

function showTime12() {

    const clock = document.querySelector('time');
    const dat = document.querySelector('.date');
    const f = document.querySelector('h6');

    const d = new Date();

    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let monthE = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let dayE = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    let format = (hour < 12) || (hour == 24) ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    clock.innerHTML = hour + ":" + min + ":" + sec + format.fontsize(5);
    dat.innerText = dayE[day] + ", " + date + " de " + monthE[month] + " de " + year;
}

let checkbox = document.getElementById('toggle');

checkbox.addEventListener("change", () => {

    const clock = document.querySelector('.clock');
    const container = document.querySelector('.container');

    if (checkbox.checked) {
        container.classList.add('black');
        clock.classList.add('clock-black');
    } else {
        container.classList.remove('black');
        clock.classList.remove('clock-black');
    }
});

var timer;

function time24() {

    timer = setInterval(() => { showTime24(); }, 100);
}

function time12() {

    timer = setInterval(() => { showTime12(); }, 100);
}

let format = document.getElementById('toggle-f');

format.addEventListener("change", () => {

    const clock = document.querySelector('time');
    const dat = document.querySelector('.date');

    if (format.checked) {
        clearInterval(timer);
        time24();
    } else {
        clearInterval(timer);
        time12();
    }
});


