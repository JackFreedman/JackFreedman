const images=[];
images["images/read.jpg"]="READING: reading a book!";
images["images/clown.jpg"]="CLOWN: clowning around!";
images["images/birthday.jpg"]="BIRTHDAY: happy birthday!";
images["images/shovel.jpg"]="DIGGING: digging a hole!";
images["images/rain.jpg"]="RAINING: I need my umbrella!";
images["images/work.jpg"]="STUDYING: studying on my computer!";

const div = document.getElementById("image-list");
for(let image in images){
    let myImage =document.createElement("img");
    myImage.src=image;
    div.append(myImage);
myImage.onclick= () => {
    console.log(image + ": " + images[image] );
   
    const p =document.createElement("p");
    p.innerHTML = images[image];
    const Descriptions = document.getElementById('image-content');
    Descriptions.innerHTML = images[image];
    
 }
}
