const inquirer = require('inquirer');
const Player = require('./lib/Player')

let playGame = [];

function gameConfirm() {
    inquirer
        .prompt({
            type: "confirm",
            name: "game",
            message: "Would you like to start a game?",
            default: false
        })
        .then((answer) => {
            if (answer.game === true) {
                console.log("Okay, let's play!");
                playerOne();
            } else {
                console.log('What a shame, have a nice day!')
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

function playerOne() {

    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "Hello, what is your name?"
            },
            {
                type: "list",
                name: "choice",
                message: "Choose your weapon:",
                choices: [
                    'Rock',
                    'Paper',
                    'Scissors'
                ]
            }
        ])
        .then((answers) => {
            console.log(`Hello ${answers.name}! You are player #1. You chose ${answers.choice}.`)
            var newPlayer = new Player(playGame.length, answers.name, answers.choice)
            playGame.push(newPlayer)
            confirmChoice()
        })
        .catch((error) => {
            console.error(error)
        });
}

const confirmChoice = () => {
    inquirer.prompt([{

            type: "confirm",
            name: "rightChoice",
            message: "Did you make the right choice?",
            default: false
        }])
        .then((answer) => {
            if (answer.rightChoice === true) {
                console.log("Great! We will have player 2 set up now.")
                playerTwo();
            } else {
                console.log('player2 set up', playGame);
                playerTwo();
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

const playerTwo = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "list",
                name: "choice",
                message: "Choose your weapon:",
                choices: [
                    'Rock',
                    'Paper',
                    'Scissors'
                ]
            }
        ])
        .then((answers) => {
            console.log(`Hello ${answers.name}! You are player #2. You chose ${answers.choice}.`)
            var newPlayer = new Player(playGame.length, answers.name, answers.choice)
            playGame.push(newPlayer)
            confirmChoiceTwo()
        })
        .catch((error) => {
            console.error(error);
        });
}

const confirmChoiceTwo = () => {
    inquirer.prompt([{
            type: "confirm",
            name: "rightChoice",
            message: "Did you make the right choice?",
            default: false
        }])
        .then((answer) => {
            if (answer.rightChoice === true) {
                console.log("Time to start the game!");
                compete();
            } else {
                playerTwo();
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

const compete = (playerOne, playerTwo) => {
    playerOne = playGame[0].choice;
    playerTwo = playGame[1].choice;

    if(playerOne === "Rock" && playerTwo === "Scissors" || playerOne === "Scissors" && playerTwo === "Paper" || playerOne === "Paper" && playerTwo === "Rock"){
        console.log(`Congrats ${playGame[0].name}, you won!`);
    } else if(playerOne === playerTwo) {
        console.log("It is a tie!");
    } else {
        console.log(`Congrats ${playGame[1].name}, you won!`);
    }
}

gameConfirm();