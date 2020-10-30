console.log('This is an Alarm App');
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click',setAlarm);
var audio = new Audio('../Songs/sweet_alarm_bells.mp3');
// audio.src('../Songs/sweet_alarm_bells.mp3');       

function RingBell(){
    audio.play();
}
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`setting Alarm for ${alarmDate}`);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    if(timeToAlarm>0){
        setTimeout(() => {
            RingBell();
        }, timeToAlarm);
    }
    
}