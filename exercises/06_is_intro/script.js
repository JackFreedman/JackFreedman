// clicker counter
let count=0

document.getElementById("count").addEventListener("click", ()=>{
    count++;
    document.getElementById("counter").innerHTML=count;
});

//Random picture Gen
document.getElementById("picture").addEventListener("click",()=>{
    window.location.reload();
});

//slider bar
document.getElementById("boxslider").addEventListener("input", (event)=>{
    const sliderValue = document.getElementById("boxslider").value;
    const box =document.getElementById("movableBox");

    box.style.left = '${sliderValue}px';
});