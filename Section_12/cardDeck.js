// function makeDeck(){
//     deck = []
//     const suits = ['hearts','diamonds','spades','clubs'];
//     const values = '1,2,3,4,5,6,7,8,9,10,J,Q,K,A'
//     for (let value of values.split(',')){
//         for (let suit of suits){
//             deck.push({
//                 value, suit
//             })
//         }
//     }
//     return deck;
// }

// function drawCard(deck){
//     return deck.pop();
// }


// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

const myDeck = {
    deck:[],
    drawnCards: [],
    suits: ['hearts','diamonds','spades','clubs'],
    values:'1,2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initialiseDeck(){
        const {suits, values, deck} = this
        for (let value of values.split(',')){
            for (let suit of suits){
                deck.push({
                    value, suit
                })
            }
        }
        return deck;
    },
    drawCard(){
        const card = this.deck.pop();
        this.drawnCards.push;
        return card;
    },
    drawMultipleCards(numCards){
        const cards = [];
        for(let i=0; i< numCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle(){
        const  {deck} = this;
        for(let i = deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}
function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

myDeck.initialiseDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultipleCards(2);
const h2 = myDeck.drawMultipleCards(2);
const h3 = myDeck.drawMultipleCards(5);

