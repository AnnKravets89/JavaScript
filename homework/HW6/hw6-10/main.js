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
console.log(cards);

console.log(cards.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace'));
console.log(cards.filter(card => card.cardValue === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs' &&
    (card.cardValue !== '6' && card.cardValue !== '7' && card.cardValue !== '8' && card.cardValue !== '9')));
