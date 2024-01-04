const aminoAcidSequences = [
    { code: 'Ala', name: 'Alanine' },
    { code: 'Arg', name: 'Arginine' },
    { code: 'Asn', name: 'Asparagine' },
    { code: 'Asp', name: 'Aspartic Acid' },
    { code: 'Cys', name: 'Cysteine' },
    { code: 'Glu', name: 'Glutamic Acid' },
    { code: 'Gln', name: 'Glutamine' },
    { code: 'Gly', name: 'Glycine' },
    { code: 'His', name: 'Histidine' },
    { code: 'Ile', name: 'Isoleucine' },
    { code: 'Leu', name: 'Leucine' },
    { code: 'Lys', name: 'Lysine' },
    { code: 'Met', name: 'Methionine' },
    { code: 'Phe', name: 'Phenylalanine' },
    { code: 'Pro', name: 'Proline' },
    { code: 'Ser', name: 'Serine' },
    { code: 'Thr', name: 'Threonine' },
    { code: 'Trp', name: 'Tryptophan' },
    { code: 'Tyr', name: 'Tyrosine' },
    { code: 'Val', name: 'Valine' },
];

let shuffledSequences = [];
let flippedCards = [];

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

function startGame() {
    shuffledSequences = shuffle([...aminoAcidSequences, ...aminoAcidSequences]);
    createCards();
}

function createCards() {
    const gameContainer = document.getElementById('game-container');

    shuffledSequences.forEach((aminoAcid, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.textContent = '?';
        card.addEventListener('click', flipCard);

        gameContainer.appendChild(card);
    });
}

function flipCard() {
    const selectedCard = this;
    const index = selectedCard.dataset.index;

    // Prevent flipping the same card twice
    if (flippedCards.length < 2 && !flippedCards.includes
