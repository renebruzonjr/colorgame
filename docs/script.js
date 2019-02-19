var numSquares = 6;
var colors = randomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

easy.addEventListener("click", function() {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numSquares = 3;
    colors = randomColors(numSquares);
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function() {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numSquares = 6;
    colors = randomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function () {
    clickedColor = randomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent = "New Colors";

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor == pickedColor) {
            messageDisplay.textContent = "YAY!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "NO!";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColors(num) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push(randomPick());
    }

    return array;
}

function randomPick() {
    var r = Math.floor(Math.random() * 256);
    var g =  Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}