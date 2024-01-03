const makeDeck = () =>{
return {
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
}

const myDeck = makeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultipleCards(2);
const h2 = myDeck.drawMultipleCards(2);
const h3 = myDeck.drawMultipleCards(5);


const deck2 = makeDeck();
deck2.initialiseDeck()
