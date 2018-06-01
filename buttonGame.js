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
    var buttons = document.getElementsByClassName('btnC');
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


