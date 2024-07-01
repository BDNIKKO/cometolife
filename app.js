const hands = ['rock', 'paper', 'scissors'];

   // Generate a random number between 0 and 9, then take the modulo 3 to get a value between 0 and 2
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// The value assigned to this method is the getHand function defined elsewhere in the code.
// This means that when you call player1.getHand(), it will execute the getHand function.
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
    
    // Update player scores and round counter display
    document.getElementById('player1Score').textContent = `${player1.name}: 0`;
    document.getElementById('player2Score').textContent = `${player2.name}: 0`;
    document.getElementById('roundCounter').textContent = round;
    // show round counter display
    document.getElementById('gameArea').style.display = 'block';
});

// Add event listeners to each hand button
document.querySelectorAll('.hand-button').forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.dataset.hand); // Play a round with the selected hand
    });
});

function playRound(player1Hand) {
    const player2Hand = player2.getHand();
    
    // Display the hands played by both players
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

    // updating result displays 
    document.getElementById('roundResult').textContent += ` ${result}`;
    document.getElementById('player1Score').textContent = `${player1.name}: ${score1}`;
    document.getElementById('player2Score').textContent = `${player2.name}: ${score2}`;
    document.getElementById('roundCounter').textContent = round;
    
       // Create a new list item for the game history
    const gameHistoryItem = document.createElement('li');
    gameHistoryItem.classList.add('list-group-item');
    // Set the text content of the list item to show the round result
    gameHistoryItem.textContent = `Round ${round}: ${player1.name} played ${player1Hand}, ${player2.name} played ${player2Hand} - ${result}`;
     // Append the list item to the game history
    document.getElementById('gameHistory').appendChild(gameHistoryItem);
    
    round++;
}
