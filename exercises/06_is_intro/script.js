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