var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener( "click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            if (this.textContent == "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        // add click listeners to squares 
        squares[i].addEventListener("click", function(){
            // grab color of clicked square 
            var clickedColor = this.style.backgroundColor;
            // 
            if (clickedColor === pickedColor) {
                //correct            
                changeColors(pickedColor);
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play again?"
            } else {
                // wrong
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again.";
            }
        });
    }
}


function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
}

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    this.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});



function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + String(red) + ", " + String(green) + ", " + String(blue) + ")";

}
function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * numSquares)];
}

function generateRandomColors(num) {
    var tempColors = [];
    for (var i = 0; i < num; i++ ) {
        tempColors.push(randomColor());
    }
    return tempColors;
}