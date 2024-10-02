setInterval(()=>{
    let hour=document.querySelector("#hourvalue")
    let minute=document.querySelector("#minutesvalue")
    let second=document.querySelector("#secondsvalue")

    let currentHour=new Date().getHours();
    let currentminute=new Date().getMinutes();
    let currentsecond=new Date().getSeconds();

    hour.innerHTML=currentHour;
    minute.innerHTML=currentminute;
    second.innerHTML=currentsecond;

},1000)