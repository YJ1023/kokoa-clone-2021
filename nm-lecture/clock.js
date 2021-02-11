const clockContainer= document.querySelector(".status-bar__column");
const clockTitle = document.querySelector(".status-bar__clock");

 function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockTitle.innerText= `${hours < 10 ? `0${hours}` : hours}:${ 
        minutes < 10 ? `0${minutes}` : minutes}`;
 }
getTime();

