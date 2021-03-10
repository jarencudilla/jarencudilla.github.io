// revised version 

console.log("*-------------------------------*")
console.log("*       Let's Play Poker        *")
console.log("*                               *")
console.log("* Create Deck - createDeck()    *")
console.log("* Shuffle Cards - shuffle()     *")
console.log("*  *Sort Decks                  *")
console.log("*  *By Rank - sortbyRank()      *")
console.log("*  *By Suit - sortbySuit()      *")
console.log("*  *Ascending - sortAscending() *")
console.log("* Deal - deal()                 *")
console.log("*  *Deal 5 cards (future option)*")
console.log("*-------------------------------*")

var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8","9","10","Jack","Queen","King"];

var deck = new Array();


function createDeck()
{
for(var i = 0; i < suits.length; i++)
  {
	for(var j = 0; j < ranks.length; j++)
	 {
      //var card = {Rank: ranks[j], Suit: suits[i]};
      var card = (ranks[j] +" of "+suits[i]);
	  deck.push(card);
	 }
  }
  return deck;
}

//console.log('Current Number of Cards in the Deck: ' + deck.length);

function shuffle() {
let shuffledDeck = []; 
shuffledDeck = deck.slice(0,99);
for (let i = 0; i < 52; i++)
  {
    let loc1 = Math.floor((Math.random() * shuffledDeck.length));
    let loc2 = Math.floor((Math.random() * shuffledDeck.length));
	let tmp = shuffledDeck[loc1];
	shuffledDeck[loc1] = shuffledDeck[loc2];
	shuffledDeck[loc2] = tmp;
  }
   return shuffledDeck;
}

function sortbyRank() {
  let sortedRanksDeck = [];
	sortedRanksDeck = deck.slice(0,52); 
    sortedRanksDeck.sort(function(a, b) 
    { if (a.Rank > b.Rank) return 1 
        else if (a.Rank < b.Rank) return -1 
        else return 0
       //return a.Rank - b.Rank;
    });
    //console.log(sortedRanksDeck)
	return sortedRanksDeck;
} 

function sortbySuit() {
  let sortedSuitsDeck = []; 
	sortedSuitsDeck = deck.slice(0,52);
    sortedSuitsDeck.sort(function(a, b) 
    { if (a.Suit < b.Suit) return 1
        else if (a.Suit > b.Suit) return -1
        else return 0
        //return a.Suit - b.Suit;
    });
    console.log(sortedSuitsDeck.sort())
	return sortedSuitsDeck;
}

function sortAscending() {
    let sortedAscDeck = [];
	sortedAscDeck = deck.slice(0,99);
    sortedAscDeck.sort(function(a, b) {
        for (let i = 0; i < deck.length; i++) {
        let cardIndex1 = sortedAscDeck.indexOf(a[0]);
        let cardIndex2 = sortedAscDeck.indexOf(b[i]);
        return cardIndex1 - cardIndex2;
    }});
   // console.log(sortedAscDeck)
	return sortedAscDeck;
}

function sortDescending() {
    let sortedDescDeck = [];
	sortedDescDeck = deck.slice(0,99);
    sortedDescDeck.sort(function(a, b) {
        for (let i = 0; i < deck.length; i++) {
        let cardIndex1 = sortedDescDeck.indexOf(a[i]);
        let cardIndex2 = sortedDescDeck.indexOf(b[0]);
        return cardIndex2 - cardIndex1;
    }});
    //console.log(sortedDescDeck.reverse())
	return sortedDescDeck.reverse();
}

function deal() {
	let deal = [];
    deal = Math.floor((Math.random() * deck.length));
    deal = deck.splice(0,1);
	// console.log(deal);
	// console.log(newdeck.length);
    return deal;
    console.log(`${deal.ranks} of ${deal.suits}`);
}

function deal5() {
	let fiveCards = [];
	fiveCards = deck.splice(0,5);
	// console.log(fiveCards)
	// console.log(newdeck.length);
	return fiveCards;
    console.log('Current number of cards in the deck:' +deck.length);
}  




// var deal = newdeck.pop(`${ranks} of ${suits}`);
// //deal = newdeck.filter(function(obj){return obj.})
// console.log(deal);
// console.log(newdeck.length);


 
// function mainMenu(num) {
// 	case 1:
// 		console.log(deck1.deck);
// 	case 2:
// 		return deck1.shuffle();
// 	case 3:
// 		return deck1.deck;
// 	case 4:
// 		return deck1.deal();	

// }



// function sortbyRank(deck) {
//     let sortedRanksDeck = [];
//       sortedRanksDeck = deck.splice(0); 
//       sortedRanksDeck.sort(function(a, b) 
//       {
//         for (let j = 0; j < ranks.length; j++)
//          {
//           let cardIndex1 = ranks.values(a[0]);
//           let cardIndex2 = ranks.values(b[j]);
//           return cardIndex1 - cardIndex2;
//       }});
//       //console.log(sortedRanksDeck)
//       return sortedRanksDeck;
//   } 