const letter = document.querySelector('.letterHolder');

letter.addEventListener('click', e => {
    // console.log(e.target.innerText[0]);
    // console.log(e.target);
    e.target.classList.add('blink'); 
    setTimeout(()=>{
        e.target.classList.remove('blink');
    }, 1000);
    // e.target.classList.remove('blink');
    // resizeTo
    // let audio = new Audio(`audio/${}.mp3`); 
}); 