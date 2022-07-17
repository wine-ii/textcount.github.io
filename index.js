const charVal = document.getElementById("textarea");
const counter = document.getElementById("total-conter");
const reamaining = document.getElementById("remaining-counter");
// const start = document.getElementById("start");
// const stop = document.getElementById("stop");

let userchar = 0;

let i = 0;
charVal.addEventListener("keyup",()=>{
    userchar = charVal.value.length;
    counter.innerHTML = userchar;

    
})

const copyText = () =>{
    charVal.select();
    charVal.setSelectionRange(0,99999999);
    navigator.clipboard.writeText(charVal.value)
}



const timer = ()=>{
    var minute = 0;
    var sec = 0;
    setInterval(()=> {
        reamaining.innerHTML = `${minute} min : ${sec} sec`;
        sec++;
        if (sec == 60) {
          minute ++;
          sec = 0;
        }
      }, 1000);
}

const stopTimer = ()=>{
    window.location.reload();
}
