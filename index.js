let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo() {
     homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let guestscore1 = document.getElementById("guests1")
let gScoreEl =document.getElementById("gscore")
let gScore = 0

function addone() {
    gScore += 1
    gScoreEl.textContent = gScore 
}

function addtwo() {
    gScore += 2
    gScoreEl.textContent = gScore 
}

function addthree() {
    gScore += 3
    gScoreEl.textContent = gScore 
}


let newGame = document.getElementById("newgame")
let newGameEl = document.getElementById("gScore")
let newGameElhome =document.getElementById("home-score")

function clear() {
    gScore = 0
    homeScore = 0
    newGamel.textContent =gScore
    newgameElhome = homeScore
}
