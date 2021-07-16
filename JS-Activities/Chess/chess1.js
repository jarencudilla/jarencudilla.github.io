for (let i=0; i< 64; i++){
    document.getElementById('chessboard').
    appendChild(document.createElement("div")).
    style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'white' : 'black';    
}