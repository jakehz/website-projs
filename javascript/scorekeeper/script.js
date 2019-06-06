var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("#score");
var p1Score = 0;
var p2Score = 0;
var limit = 5;
var winningScoreDisplay = document.querySelector("p span");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var h1 = document.querySelector("h1");
var gameover = false; 
var numInput = document.querySelector("input");

function reset() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");
    gameover = false;
}

p1Button.addEventListener("click", function(){
    if (!gameover) {
        p1Score++;
        if (p1Score === limit) {
            gameover = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function(){
    if (!gameover) {
        p2Score++;
        if (p2Score === limit) {
            gameover = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener("click", reset)

numInput.addEventListener("change", function(){
    limit = Number(this.value);
    winningScoreDisplay.textContent = this.value;
    reset();
})