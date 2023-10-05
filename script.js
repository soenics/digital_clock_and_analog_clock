var hour =document.getElementById("hour");
var minute =document.getElementById("minute");
var second = document.getElementById("second");
const digitalboxTag=document.querySelector(".digitalbox");
const timeboxTag = document.querySelector(".timebox");
const delete1Tag= document.querySelector(".delete");
const textboxTag=document.querySelector(".textbox");



var set_clock= setInterval(function clock(){
    var date_now = new Date();
    var hr = date_now.getHours();
    var min =date_now.getMinutes();
    var sec = date_now.getSeconds();
    let degHr = date_now.getHours();
    let degMin=date_now.getMinutes().toString().padStart(2,"0");
    let degSec=date_now.getSeconds().toString().padStart(2,"0");
    let ampm = degHr >= 12 ? 'PM' :'AM';
    let deghr1= degHr %12 || 12;
    var calc_hr =(hr *30)+(min / 2);
    var calc_min= (min *6);
    var calc_sec =sec *6;
    hour.style.transform="rotate(" + calc_hr +"deg)";
    minute.style.transform="rotate(" + calc_min+ "deg)";
    second.style.transform="rotate(" + calc_sec+ "deg)";
    const timeString = `${deghr1}:${degMin}:${degSec} ${ampm}`;
    textboxTag.textContent=timeString;

} ,1000);

timeboxTag.addEventListener("click",functionone=()=>{
    timeboxTag.classList.add("timeboxtwo");

    digitalboxTag.classList.add("digitalbox1");
    delete1Tag.classList.add("delete1");
    textboxTag.classList.add("textbox1");




});
delete1Tag.addEventListener("click",functiontwo=()=>{
    
    timeboxTag.classList.remove("timeboxtwo");
    digitalboxTag.classList.remove("digitalbox1");

    delete1Tag.classList.remove("delete1");
    textboxTag.classList.remove("textbox1");

});







