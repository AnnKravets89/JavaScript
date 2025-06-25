const cards = [];

const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (let suit of cardSuits) {
    for (let value of cardValues) {
        let color;
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        } else {
            color = 'black';
        }
        cards.push({
            cardSuit: suit,
            cardValue: value,
            color: color
        });
    }
}

let cards2 = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
},{spades: [], diamonds: [], hearts: [], clubs: []});
console.log(cards2);
