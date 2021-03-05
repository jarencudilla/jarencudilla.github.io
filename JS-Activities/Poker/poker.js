console.log("*-------------------*")
console.log("*  Let's Play Poker *")
console.log("*                   *")
console.log("* 1. Create Deck    *")
console.log("* 2. Shuffle Cards  *")
console.log("* 3. Sort Deck      *")
console.log("* 4. Deal           *")
console.log("* 5. Deal 5 card    *")
console.log("*-------------------*")


var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8","9","10","Jack","Queen","King"];

var deck = new Array();
var newdeck = new Array();
 
function createDeck()
{
	for(var i = 0; i < suits.length; i++)
	{
		for(var j = 0; j < ranks.length; j++)
		{
			var card = {Rank: ranks[j], Suit: suits[i]};
			deck.push(card);
			newdeck.push(card);
		}
	}
	return deck;
}

function shuffle() {
	let newdeck = deck;
	for (var i = 0; i < 53; i++)
	{
		var loc1 = Math.floor((Math.random() * newdeck.length));
		var loc2 = Math.floor((Math.random() * newdeck.length));
		var tmp = newdeck[loc1];
		newdeck[loc1] = newdeck[loc2];
		newdeck[loc2] = tmp;
	}
	console.log(newdeck);
}

function sortbyRank() {
	var sortedRanksDeck = newdeck;
    sortedRanksDeck.sort(function(a, b) {
        let cardIndex1 = ranks.indexOf(a[0]);
        let cardIndex2 = ranks.indexOf(b[0]);
        return cardIndex1 - cardIndex2;
    });
    console.log(sortedRanksDeck)
	//return sortedRanksDeck;
}

function sortbySuit() {
	var sortedSuitsDeck = newdeck;
    sortedSuitsDeck.sort(function(a, b) {
        let cardIndex1 = suits.values(a.suits);
        let cardIndex2 = suits.values(b.suits);
        return cardIndex1 - cardIndex2;
    });
    console.log(sortedSuitsDeck)
	//return sortedSuitsDeck;
}

function sortAscending() {
	var sortedAscDeck = newdeck;
    sortedAscDeck.sort(function(a, b) {
        let cardIndex1 = sortedAscDeck.indexOf(a[0]);
        let cardIndex2 = sortedAscDeck.indexOf(b[0]);
        return cardIndex1 - cardIndex2;
    });
    console.log(sortedAscDeck)
	//return sortedSuitsDeck;
}

function sortDescending() {
	var sortedDescDeck = newdeck;
    sortedDescDeck.sort(function(a, b) {
        let cardIndex1 = sortedDescDeck.indexOf(a[0]);
        let cardIndex2 = sortedDescDeck.indexOf(b[0]);
        return cardIndex2 - cardIndex1;
    });
    console.log(sortedDescDeck.reverse())
	//return sortedSuitsDeck;
}
 
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