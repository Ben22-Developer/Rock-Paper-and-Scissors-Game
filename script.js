const start_game = document.querySelector("#start_game");
const user_choice = document.querySelector(".user_choice");
const choose_toy_array = [ {toy_1: "Scissor",toy_2:"Paper",result:"Yes"},{toy_1: "Paper",toy_2:"Scissor",result:"No"},
{toy_1: "Paper",toy_2:"Rock",result:"Yes"},{toy_1: "Rock",toy_2:"Paper",result:"No"},
{toy_1: "Rock",toy_2:"Scissor",result:"Yes"},{toy_1: "Scissor",toy_2:"Rock",result:"No"}
];
let question_to_choose = document.querySelector("#question_to_choose");
let user_answer = document.querySelector(".user_answer");
let span_user_score = document.querySelector("#user_score");
let span_computer_score = document.querySelector("#computer_score");
let hintsTitle = document.querySelector('#hints-h2');
let hints = document.querySelector('.hidden-hints')
let arrowDown = document.querySelector('.arrow-down');
let arrowLeft = document.querySelector('.arrow-left');
let toys = document.querySelector('.toys');
let gameResult = document.querySelector('.game-results');
let gameResultMsg = document.querySelector('#game-results-msg');
let user_final_score = document.querySelector('.user_final_score');
let computer_final_score = document.querySelector('.computer_final_score');
let gameReset = document.querySelector('#game-reset');

let iterate,max_score,user_score,computer_score,random_question;
iterate = 0;
max_score = 3;
user_score = 0;
computer_score = 0;

let gameStart = () => {
    user_choice.classList.remove('none');
    start_game.style.backgroundColor = 'black';
    start_game.style.color = 'white';
    start_game.innerText = 'You have to score 5 points before the\nComputer in order to win the Game';
    toys.style.display = 'none';
    random();
    score();
}
start_game.addEventListener('click',gameStart);

let score = () => {
    span_user_score.innerText = user_score;
    span_computer_score.innerText = computer_score;
}

user_answer.addEventListener('click', (e) => {
    if (e.target.innerText == choose_toy_array[random_question].result) {
        user_score ++;
    }
    else {
        computer_score++;
    }
    random();
    score();
    if (user_score == max_score || computer_score == max_score) {
        gameResultFunction();
    }
    }
);

let random = () => {
    random_question = Math.floor(Math.random()*5);
    question_to_choose.innerText = `Does ${choose_toy_array[random_question].toy_1} beats ${choose_toy_array[random_question].toy_2} ?`;
}

let hintsFunction = () => {
    if (arrowLeft.classList.contains('hidden')) {
        arrowLeft.classList.remove('hidden');
        arrowDown.classList.add('hidden');
        hints.classList.add('hidden-hints');
    }
    else {
        arrowDown.classList.remove('hidden');
        arrowLeft.classList.add('hidden');
        hints.classList.remove('hidden-hints');
    }
}
hintsTitle.addEventListener('click',hintsFunction);

let gameResultFunction = () => {
    gameResult.classList.remove('hidden');
    user_choice.classList.add('none');
    user_final_score.innerText = user_score;
    computer_final_score.innerText = computer_score;
    start_game.innerText = 'Game Over';
    if (user_score > computer_score) {
        gameResultMsg.innerText = '🥳 🥳 🥳\nYou won the game homie\n🤜🤛';
    }
    else {
        gameResultMsg.innerText = 'You lost it 😞 😞 😞\n But never give up!!';
    }
}
let gameResetFunction = () => {
    gameResult.classList.add('hidden');
    user_score = 0;
    computer_score = 0;
    gameStart();
}
gameReset.addEventListener('click',gameResetFunction);
document.querySelector('#end_game').addEventListener('click',gameResetFunction);