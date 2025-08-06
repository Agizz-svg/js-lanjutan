const secondHand = document.querySelector('.jarum_detik');
const minuteHand = document.querySelector('.jarum_menit');
const jarum_jam = document.querySelector('.jarum_jam');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegress = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;
    if (secondsDegress === 90) {
        secondHand.style.transition = 'none';
    } else if (secondsDegress >= 91) {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'

}
 
    const minutes = now.getMinutes();
    const minutesDegress = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegress}deg)`;

    const hours = now.getHours();
    const hoursDegress = ((hours / 12) * 360) + 90;
    jarum_jam.style.transform = `rotate(${hoursDegress}deg)`;

}

setInterval(setDate, 1000)