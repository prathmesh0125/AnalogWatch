

const dials=document.getElementsByClassName("clock-dials")[0];
const dialines=document.getElementsByClassName("dialines");

for(let i=1;i<61;i++){
    dials.innerHTML += "<div class='dialines'></div>";
    dialines[i-1].style.transform ="rotate(" + 6 * i +"deg)";
}

const hour=document.querySelector(".hours");
const minute=document.querySelector(".minutes");
const second=document.querySelector(".second");
const dateElement = document.querySelector('.date');
const dayElement = document.querySelector('.day');

setInterval(()=>{
    const d=new Date();
    const htime=d.getHours();
    const mtime=d.getMinutes();
    const stime=d.getSeconds();
    const day = d.toLocaleDateString('en-US', { weekday: 'short' });
    const date = d.getDate();
   

    const hrotation=30*htime+ mtime/2;
    const mrotation=6*mtime;
    const srotation=6*stime;

    hour.style.transform= `rotate(${hrotation}deg)`;
    minute.style.transform= `rotate(${mrotation}deg)`;
    second.style.transform= `rotate(${srotation}deg)`;

    dateElement.textContent = date;
    dayElement.textContent = day;

},1000);
// style