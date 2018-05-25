var btnRed = document.getElementById('btnRed');
var btnOrange = document.getElementById('btnOrange');
var btnYellow = document.getElementById('btnYellow');
var btnGreen = document.getElementById('btnGreen');
var btnBlue = document.getElementById('btnBlue');
var btnIndigo = document.getElementById('btnIndigo');
var btnViolet = document.getElementById('btnViolet');
var secDiv = document.getElementById('secDiv');
var testBtn = document.getElementById('testBtn');

function colorClick(clicked) {
    
}

function randomColor(colorSwap) {
    var buttons = document.getElementsByClassName('btnC');
    console.log(buttons);
    var randomBtn = Math.floor(Math.random() * buttons.length);
    console.log(randomBtn);

    if (testBtn == colorSwap) {
        btnC.innerText = 'hey';
    }

}

function startGame(clicky) {
    if (clicky == clicky) {
        btnRed.style.backgroundColor = 'lightgrey';
        btnOrange.style.backgroundColor = 'lightgrey';
        btnYellow.style.backgroundColor = 'lightgrey';
        btnGreen.style.backgroundColor = 'lightgrey';
        btnBlue.style.backgroundColor = 'lightgrey';
        btnIndigo.style.backgroundColor = 'lightgrey';
        btnViolet.style.backgroundColor = 'lightgrey';
    }
    secDiv.innerText = '';
    seconds = 0;
}

var seconds = 0;
var cancel = setInterval(counter, 1000);

function counter() {
    seconds += 1;
    secDiv.innerText = "You have been here for " + seconds + " seconds.";
}


