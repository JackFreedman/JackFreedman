const images=[];
images["images/read.jpg"]="reading";
images["images/clown.jpg"]="clowning";
images["images/birthday.jpg"]="birthday!";
images["images/shovel.jpg"]="digging!";
images["images/rain.jpg"]="raining!";
images["images/work.jpg"]="studying!";

const div = document.getElementById(image-list);

for(let image in images){
    let myImage =document.createElement("img");
    myImage.src=image;
    div.append(myImage);
}