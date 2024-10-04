/*HERE we are gonna use JS to take whatever they insert use it as a variable to insert that number of stars into the box */
/*Then we make it so each time we click the button for draw it draws 10 stars BUT the stars that were placed before have to be made hidden/removed first */
/* make it so the stars randomly are placed within the borders of however the box is */
/*Start number ALWAYS = 0 */
document.getElementById("draw-stars").onclick = () => {
    const startNum = 0;
    const endNum = parseInt(document.getElementById("txt-star-count").value);
    const ul = document.getElementById("numbers");
  
    console.log(`counting from ${startNum} to ${endNum}`);
  
    if(endNum >= startNum){
      for(let i = startNum; i <= endNum; i++){
        ul.append(createLi(i));
      }
    } else {
      for(let i = endNum; i >= startNum; i--){
        ul.append(createLi(i));
      }
    }
  }