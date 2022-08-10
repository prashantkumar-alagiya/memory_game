const numberOfBlocks = 5;
let score = 0;
let randomBlock = 0;
let previousBlock = 0;
let highScore = 0;

const rootDiv = document.getElementById('root');
const startBtn = document.getElementById('startBtn');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');

rootDiv.addEventListener('click', (e) => {
    if(+e.target.id === randomBlock){
        score++;
        scoreElement.innerText = score;
        highScore = localStorage.getItem('highScore') ? localStorage.getItem('highScore') : 0
        if(score > highScore ) {
            localStorage.setItem('highScore',score);
            highScoreElement.innerText = score;
        }
        const previousSelectedDiv = document.getElementById(''+previousBlock);
        previousSelectedDiv.classList.remove('blink');
        setTimeout(() => {
            handleAnimation(e);
        }, 100)    
    }
    else{
        rootDiv.classList.add('shake');
    }
})

startBtn.addEventListener('click', (e) => {
    console.log("target id ",e.target.id);
    handleAnimation(e);
})

const handleAnimation = (e) => {
    if(e.target.id === 'startBtn'){
        scoreElement.innerText = 0;
        highScoreElement.innerText = localStorage.getItem('highScore') ? localStorage.getItem('highScore') : 0
    }
    randomBlock = Math.floor(Math.random() * numberOfBlocks) + 1; 
    previousBlock = randomBlock;
    const randomDiv = document.getElementById(""+randomBlock);
    console.log("random block ",randomBlock, " randomDiv ",randomDiv);
    randomDiv.classList.add('blink');
}

const generateBlocks = (numberofBlocks) => {
    for(let i = 0; i < numberofBlocks; i++) {
        const childDiv = document.createElement('div');
        childDiv.setAttribute('id', ""+(i+1));
        rootDiv.appendChild(childDiv);
    }
}

generateBlocks(numberOfBlocks);