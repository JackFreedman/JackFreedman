function dostuff(){
    alert("hello");
};

const myButton = document.getElementById("Button-click");
myButton.innerHTML = "click party";

const doStuff = () =>{
    alert("Hello World!");
};

const myButton2 = document.getElementById("Button-click2");

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Goodbye!"
}

//ADD a second button, called say goodbye 
//When clicked change text to goodbye everyone and remove the special styles