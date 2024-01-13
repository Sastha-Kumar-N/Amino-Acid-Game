const aminoAcids = [
    { name: 'Alanine', structure: 'images/alanine.png' },
    { name: 'Arginine', structure: 'images/Arginine.png' },
    { name: 'Asparagine', structure: 'images/Asparagine.png' },
    // Add more amino acids with their structure images
];

const aminoAcidImageContainer = document.getElementById('amino-acid-image');
const guessInput = document.getElementById('guess-input');
const checkGuessBtn = document.getElementById('check-guess-btn');
const resultText = document.getElementById('result');

let currentAminoAcid;

// Initialize the game
function initializeGame() {
    // Randomly select an amino acid
    currentAminoAcid = getRandomAminoAcid();

    // Display the structure image
    const imageElement = document.createElement('img');
    imageElement.src = currentAminoAcid.structure;
    imageElement.alt = currentAminoAcid.name;
    aminoAcidImageContainer.innerHTML = '';
    aminoAcidImageContainer.appendChild(imageElement);

    // Clear the input and result
    guessInput.value = '';
    resultText.textContent = '';
}

// Get a random amino acid from the list
function getRandomAminoAcid() {
    const randomIndex = Math.floor(Math.random() * aminoAcids.length);
    return aminoAcids[randomIndex];
}

// Check guess button
checkGuessBtn.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = guessInput.value.toLowerCase();
    
    if (userGuess === currentAminoAcid.name.toLowerCase()) {
        resultText.textContent = 'Correct! Well done.';
    } else {
        resultText.textContent = 'Incorrect. Try again!';
    }
}

// Initialize the game when the page loads
initializeGame();
