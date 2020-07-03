const letter = document.querySelector('.letterHolder');
const single = document.querySelector('.letter'); 
const start = document.querySelector('.btn');
const title = document.querySelector('.title');
const body = document.querySelector('.container'); 


const delay = ms => new Promise(res => setTimeout(res, ms)); 

let userClicks = []; 
let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaPatter = []; 
let started = false; 
let level = 0; 
let sleeping = 1000;adk
// console.log(alphabets.length);

const wait =(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

start.addEventListener('click', e => {
    if(!started){
        nextSequence(); 
        started = true; 
    }
});

async function nextSequence() {
    level++;
    userClicks = []; 
    title.innerHTML = `Level ${level}`;
    let randomLetter = Math.floor(Math.random() * 26); 
    let randomChosenLetter = alphabets[randomLetter];

    alphaPatter.push(randomChosenLetter); 

        for(let x = 0; x < alphaPatter.length; x++){
                playPattern(alphaPatter[x]);
                await wait(1000);
        }
}

//


const playPattern = (randomChosenLetter) => {
    let sing = new Audio(`sounds/${randomChosenLetter}.m4a`);
    letter.getElementsByClassName(`letter-${randomChosenLetter}`)[0].classList.add('blink'); 
    sing.play();
    
    setTimeout(() =>{
        letter.getElementsByClassName(`letter-${randomChosenLetter}`)[0].classList.remove('blink'); 
    }, 1000);

}
 

letter.addEventListener('click', e => {

    // currently working
    let sing = new Audio(`sounds/${e.target.innerText[0].toLowerCase()}.m4a`);
    e.target.classList.add('blink'); 
    sing.play();
    setTimeout(()=>{
        e.target.classList.remove('blink');
    }, 1000);

    userClicks.push(e.target.innerText[0].toLowerCase());

    checkAnswer(userClicks.length-1);


}); 

const checkAnswer = (currentLevel) => {
    if(userClicks[currentLevel] === alphaPatter[currentLevel]){
        
        if(userClicks.length === alphaPatter.length){
            setTimeout(() => {
                nextSequence();
            },1000);
        }
    }
    else{
        title.innerHTML = "Game Over, Try Again!"; 
        body.style.backgroundColor = "#c70039";
        setTimeout(()=>{
            body.style.backgroundColor = "#f7f7f7";
        }, 1000);
        startOver();
        
    }
}
const startOver = () =>{
    level = 0;
    alphaPatter = [];
    started = false;
}