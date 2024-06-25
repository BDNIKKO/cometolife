const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

let player1 = {
    name: 'Player 1',
    getHand: getHand
};

let player2 = {
    name: 'Player 2',
    getHand: getHand
};

let score1 = 0;
let score2 = 0;
let round = 1;

document.getElementById('startGameButton').addEventListener('click', () => {
    player1.name = document.getElementById('player1Name').value || 'Player 1';
    player2.name = document.getElementById('player2Name').value || 'Player 2';
    
    document.getElementById('player1Score').textContent = `${player1.name}: 0`;
    document.getElementById('player2Score').textContent = `${player2.name}: 0`;
    document.getElementById('roundCounter').textContent = round;
    
    document.getElementById('gameArea').style.display = 'block';
});

document.querySelectorAll('.hand-button').forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.dataset.hand);
    });
});

function playRound(player1Hand) {
    const player2Hand = player2.getHand();
    
    document.getElementById('roundResult').textContent = `${player1.name} played ${player1Hand}. ${player2.name} played ${player2Hand}.`;
    
    let result = '';

    if (player1Hand === player2Hand) {
        result = "It's a tie!";
    } else if (
        (player1Hand === 'rock' && player2Hand === 'scissors') ||
        (player1Hand === 'scissors' && player2Hand === 'paper') ||
        (player1Hand === 'paper' && player2Hand === 'rock')
    ) {
        result = `${player1.name} wins this round!`;
        score1++;
    } else {
        result = `${player2.name} wins this round!`;
        score2++;
    }

    document.getElementById('roundResult').textContent += ` ${result}`;
    document.getElementById('player1Score').textContent = `${player1.name}: ${score1}`;
    document.getElementById('player2Score').textContent = `${player2.name}: ${score2}`;
    document.getElementById('roundCounter').textContent = round;
    
    const gameHistoryItem = document.createElement('li');
    gameHistoryItem.classList.add('list-group-item');
    gameHistoryItem.textContent = `Round ${round}: ${player1.name} played ${player1Hand}, ${player2.name} played ${player2Hand} - ${result}`;
    document.getElementById('gameHistory').appendChild(gameHistoryItem);
    
    round++;
}
