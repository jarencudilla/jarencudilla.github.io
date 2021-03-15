function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
}
/* to do 
legal moves
collision detection
*/


// function checkPiece() {
// document.getElementsByClassName('ebony ivory');
// document.addEventListener('onclick', function(event)){
//     var pawn = 
// }



// to check what is being moved/clicked
var lastClicked;
function check(id) {
    var src,dest;
    if (!lastClicked) {
        lastClicked = id;
    } else {
        src = document.getElementById(lastClicked);
        dest =document.getElementById(id);
        dest.value = src.value;
        src.value = "";
        lastClicked = null;
    }
}

// an onclick event for every div 

var state = false

var cells = document.getElementById('#a1', '#a2', '#a3', '#a4', '#a5', '#a6', '#a7', '#a8',)