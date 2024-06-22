

const cpuResult=document.getElementById('cpu_result');
const userResult=document.getElementById('user_result');

const finalResultInText=document.getElementById('result');

const rockOption=document.getElementById('rock_option');
const paperOption=document.getElementById('paper_option');
const scissorsOption=document.getElementById('scissors_option');

const choices = ['rock', 'paper', 'scissors'];

const cupIcons = [
    '<i class="fa-regular fa-hand-back-fist"></i>',
    '<i class="fa-regular fa-hand"></i>',
    '<i class="fa-regular fa-hand-scissors"></i>'
];

function getCPUChoice(){
    const randomIndex=Math.floor(Math.random()*choices.length);

    cpuResult.innerHTML =`${cupIcons[randomIndex]}`

    return choices[randomIndex];
}

function determineWinner(userChoice, cpuChoice){

    if (userChoice === cpuChoice) {
        finalResultInText.textContent='It\'s a tie!';
    }
    else if (
        (userChoice === 'rock' && cpuChoice === 'scissors') ||
        (userChoice === 'paper' && cpuChoice === 'rock') ||
        (userChoice === 'scissors' && cpuChoice === 'paper')
        ){
            finalResultInText.textContent= 'You win!';
        }
    else{
        finalResultInText.textContent= 'CPU win!';
    }
}

function playGame(userChoice){
    // cpuResult.innerHTML='<i class="fa-regular fa-hand-back-fist"></i>';
    userResult.innerHTML='<i class="fa-regular fa-hand-back-fist"></i>';
    if(userChoice=='rock'){
        userResult.innerHTML=`<i class="fa-regular fa-hand-back-fist"></i>`
    }
    else if(userChoice=='paper'){
        userResult.innerHTML=`<i class="fa-regular fa-hand"></i>`
    }
    else if(userChoice=='scissors'){
        userResult.innerHTML=`<i class="fa-regular fa-hand-scissors"></i>`
    }

    finalResultInText.textContent="Please wait..."
    setTimeout(() => {
        const cpuChoice=getCPUChoice();
    determineWinner(userChoice, cpuChoice);
    }, 3000);
}

rockOption.addEventListener('click', () => playGame('rock'));
paperOption.addEventListener('click', () => playGame('paper'));
scissorsOption.addEventListener('click', () => playGame('scissors'));