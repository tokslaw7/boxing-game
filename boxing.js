const currentPlayer = player1;

let player1 = {
    name: "Player 1",
    health: 100,
    };

let player2 = player1;

// Function to generate random damage
function generateDamage() {
    return Math.floor(Math.random() * 10) + 1; // Damage ranges from 1 to 10
    }
