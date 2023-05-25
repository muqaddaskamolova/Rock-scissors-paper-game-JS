window.addEventListener('DOMContentLoaded', () =>{})
const choices = document.querySelectorAll('.choice'),
    score = document.querySelector('#score'),
    modal = document.querySelector('.modal'),
    result = document.querySelector('#result'),
    resart = document.querySelector('#restart'),
    scoreBoard = {
        player:0,
        computer:0

    };
function play(event) {
    resart.style.display = 'inline-block'
    const playerChoice = event.target.id
    const computerChoice = GetComputerChoice()
    const winner = GetWinner(playerChoice, computerChoice)
    ShowWinner(winner, computerChoice)
}
function GetComputerChoice() {
    const rand = Math.random()
    if ( rand < 0.34){
        return 'rock'}
    else if ( rand <= 0.67){
        return 'paper'
    }
      else {
          return 'scissors'
    }
}
function GetWinner(p, c) {
    if (p===c){
        return 'draw'
    }
    else if (p === 'rock')
        if (c === 'paper'){
            return 'computer'
        }
        else {
            return 'player'
        }
    else if (p === 'paper')
        if (c === 'scissors'){
            return 'computer'
        }
        else {
            return 'player'
        }
    else if (p === 'scissors')
        if (c === 'rock'){
            return 'computer'
        }
        else {
            return 'player'
        }
}
function ShowWinner(winner, computerChoice) {
    if (winner === 'player'){
        scoreBoard.player++
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas-fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)}</strong></p>
        `
    }
    else if (winner === 'computer'){
        scoreBoard.computer++
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas-fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)}</strong></p>
        `
    }
    else{
        result.innerHTML = `
        <h1 >It's A Draw</h1>
        <i class="fas-fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        
        `
    }
    score.innerHTML = `
    <p> Player: ${scoreBoard.player}</p>
    <p> Computer: ${scoreBoard.computer}</p>  
    `
    modal.style.display = 'block'
}
function resartGame() {
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.innerHTML = `
    <p> Player: ${scoreBoard.player}</p>
    <p> Computer: ${scoreBoard.computer}</p> 
    `

}
function clearModal(event) {
if (event.target === modal){
    modal.style.display = 'none'
}
}

// Eventlistener
choices.forEach(choice =>{
    return choice.addEventListener('click', play)
})
window.addEventListener('click', clearModal)
resart.addEventListener('click', resartGame)