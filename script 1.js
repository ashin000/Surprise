const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");
const currentDateInput = new Date(localStorage.getItem('currentDate'));
const DateofeventInput = new Date(localStorage.getItem('Dateofevent'));

function refresh() {
    const currentYear = new Date().getFullYear();
    // const newYear = new Date(`September 4, ${currentYear} 00:00:00`);
    const currentDate = new Date();
    //const diff = newYear - currentDate
    const diff = DateofeventInput - currentDate;

if (diff <= 0) {
        clearInterval(countdownInterval);
        days.innerHTML = hours.innerHTML = minutes.innerHTML = seconds.innerHTML = "00";
    
        window.location.href = 'surprise.html';
        return;
    }

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

refresh();
const countdownInterval = setInterval(refresh, 1000);
