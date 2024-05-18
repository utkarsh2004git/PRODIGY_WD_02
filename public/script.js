let hr=0;
let min=0;
let sec=0;
let ms=0;

let timer=false;


const start=()=>{
    if(timer){
        return;
    }
    timer=true;
    stopWatch();
    document.querySelector(".stamp").classList.remove("-z-10")

}

const stop=()=>{
    timer=false;
}
const check=(value)=>{
    if(value<10)
        return "0"+value;
    return value
}
const reset=()=>{
    hr=0;min=0;sec=0;ms=0;
    timer=false;
    document.querySelector(".stamp").classList.add("-z-10");
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("ms").innerHTML="00";

    var elements = document.querySelector('.list');
    while(elements.firstChild){
        elements.removeChild(elements.firstChild)
    }
    document.querySelector(".time-box").classList.remove('border-2',"bg-gray-950")

    
}

const stopWatch=()=>{
    if(timer){
        ms+=1;
        if(ms==100){
            sec+=1;
            ms=0;
        }
        if(sec==60){
            min+=1;
            sec=0;
        }
        if(min==60){
            hr+=1;
            min=0;
            sec=0;
        }
        let hrStr=check(hr);
        let minStr=check(min);
        let secStr=check(sec);
        let msStr=check(ms);


        document.getElementById("hr").innerHTML=hrStr;
        document.getElementById("min").innerHTML=minStr;
        document.getElementById("sec").innerHTML=secStr;
        document.getElementById("ms").innerHTML=msStr;
        setTimeout(stopWatch,10);
    }
}

const getCurrentTimestamp = () => {
    const timeStamp =`${hr.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}:${ms.toString().padStart(2, "0")}`;
    return timeStamp
}

const addTimestamp = () => {
    const timestampList = document.getElementById("timestampList");
    const newTimestamp = document.createElement("li");
    newTimestamp.textContent = getCurrentTimestamp();
    let a=""
    if(timestampList.lastChild)
         a=timestampList.lastChild.innerHTML;
    let b=getCurrentTimestamp();
    if((a!==b))
        timestampList.appendChild(newTimestamp);

    var list=document.querySelector(".list");
    if(list.childElementCount>0){
        document.querySelector(".time-box").classList.add('border-2',"bg-gray-950")
    }
}