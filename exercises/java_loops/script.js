document.getElementById("draw-stars").onclick = () => {
    const blackBox = document.getElementById('black-box');
    const starCount = parseInt(document.getElementById('txt-star-count').value);
    const DrawStar =document.getElementById('star');
    blackBox.innerHTML = ' ';

    

    for(let i=0; i < starCount; i++){
        const Stars = document.createElement('p');
        Stars.classList.add('star');
        Stars.style.top = Math.random() * (blackBox.clientHeight - 50) + 'px';
        Stars.style.left = Math.random() * (blackBox.clientWidth - 50) + 'px';
        Stars.setAttribute('data-star-number', i + 1);
        blackBox.append(Stars);
        
    }
    
}
  
  function Stars(count) {
    blackBox;
}

