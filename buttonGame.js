var btnRed = document.getElementById('btnRed');
var btnOrange = document.getElementById('btnOrange');
var btnYellow = document.getElementById('btnYellow');
var btnGreen = document.getElementById('btnGreen');
var btnBlue = document.getElementById('btnBlue');
var btnIndigo = document.getElementById('btnIndigo');
var btnViolet = document.getElementById('btnViolet');
var secDiv = document.getElementById('secDiv');
var testBtn = document.getElementById('testBtn');
var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var lastBtnClicked = null;


function randomColor() {
    var buttons = document.getElementsByClassName('btnC');
    console.log(buttons);
    var randomBtn = Math.floor(Math.random() * buttons.length);
    console.log(randomBtn);
    if (lastBtnClicked == randomBtn) { randomColor(); return }
    console.log(randomBtn);
    var selectedBtn = buttons[randomBtn];
    selectedBtn.style.backgroundColor = colorArray[randomBtn];
    lastBtnClicked = randomBtn;
    console.log(randomBtn);
  
}

function randomColorTimer() {
    setTimeout(randomColor, 1000)
}

function turnOff(selected) {
    if (selected.style != '') {
        selected.style = '';
        randomColor();
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
        var buttonsTwo = document.getElementsByClassName('btnC');
        for (var i = 0; i < buttonsTwo.length; i++) {
            buttonsTwo.style = '';
        }
    }
    randomColorTimer();
    secDiv.innerText = '';
    seconds = 0;
}

var seconds = 0;
var cancel = setInterval(counter, 1000);

function counter() {
    seconds += 1;
    secDiv.innerText = "You have been here for " + seconds + " seconds.";
}


