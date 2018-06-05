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
disableButtons();


function randomColor() {
    var wantedButtonCount;
    if (time < 1000) wantedButtonCount = 3;
    else if (time < 1300) wantedButtonCount = 2;
    else wantedButtonCount = 1;

    while (countColoredButtons() < wantedButtonCount) {
        randomColorOne();
    }
}

function randomColorOne() {
    var buttons = getButtons();
    checkWinning(buttons);
    console.log(buttons);
    var randomBtn = Math.floor(Math.random() * buttons.length);
    console.log(randomBtn);
    if (lastBtnClicked == randomBtn) { randomColor(); return }
    console.log(randomBtn);
    buttons[randomBtn].disabled = false;
    var selectedBtn = buttons[randomBtn];
    selectedBtn.style.backgroundColor = colorArray[randomBtn];
    lastBtnClicked = randomBtn;
    console.log(randomBtn);
}

function getButtons() {
    return document.getElementsByClassName('btnC');
}

var time = 1500;
function randomColorTimer() {
    setTimeout(randomColor, time)
}

function turnOff(selected) {
    if (selected.style != '') {
        selected.style = '';
        selected.disabled = true;
        time -= 60;
        console.log(time);
        randomColorTimer();        
    }
}

function colorButtons(count) {
    var buttons = getButtons();
    var countButtonsNow = countColoredButtons();
    console.log('wants ' + count + ' buttons - has ' + countButtonsNow);
    for (var i = countButtonsNow; i < count; i++) {
        randomColorTimer();
    }
}

function countColoredButtons() {
    var buttons = getButtons();
    var count = 0;
    for (var i = 0; i < buttons.length; i++) {
        if (!buttons[i].disabled) {
            count++;
        }
    }
    return count;
}

function checkWinning(buttons) {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].disabled == true) {
            return;
        }
        console.log(checkWinning);
    }
    alert('hey');
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
        disableButtons();
    }

    randomColorTimer();
    secDiv.innerText = '';
    time = 1500;

}
function disableButtons() {
    var buttonsTwo = document.getElementsByClassName('btnC');
    for (var i = 0; i < buttonsTwo.length; i++) {
        buttonsTwo[i].disabled = true;
    }
}
var seconds = 0;
var cancel = setInterval(counter, 1000);

function counter() {
    seconds += 1;
    //secDiv.innerText = "You have been here for " + seconds + " seconds.";
}


