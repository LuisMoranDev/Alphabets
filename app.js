const letter = document.querySelector('.letterHolder');

letter.addEventListener('click', e => {
    // console.log(e.target.innerText[0]);
    // console.log(e.target);
    // let alphabet = e.target.innerText[0].toLowerCase();
    let sing = new Audio(`sounds/${e.target.innerText[0].toLowerCase()}.m4a`);
    e.target.classList.add('blink'); 
    sing.play();
    setTimeout(()=>{
        e.target.classList.remove('blink');
    }, 1000);
    // e.target.classList.remove('blink');
    // resizeTo
    // let audio = new Audio(`audio/${}.mp3`); 
}); 