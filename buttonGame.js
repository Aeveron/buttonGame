var btnRed = document.getElementById('btnRed');
var btnOrange = document.getElementById('btnOrange');
var btnYellow = document.getElementById('btnYellow');
var btnGreen = document.getElementById('btnGreen');
var btnBlue = document.getElementById('btnBlue');
var btnIndigo = document.getElementById('btnIndigo');
var btnViolet = document.getElementById('btnViolet');
var secDiv = document.getElementById('secDiv');
var testBtn = document.getElementById('testBtn');

randomColor();
function randomColor() {
    var buttons = document.getElementsByClassName('btnC');
    console.log(buttons);
    var randomBtn = Math.floor(Math.random() * buttons.length);
    console.log(randomBtn);
    var selectedBtn = buttons[randomBtn];
    var selectedBtnClassList = selectedBtn.classList;
    selectedBtnClassList.add('cake');
    //btnRed.style.backgroundColor = 'red';
    //btnOrange.style.backgroundColor = 'orange';
    //btnYellow.style.backgroundColor = 'yellow';
    //btnGreen.style.backgroundColor = 'green';
    //btnBlue.style.backgroundColor = 'blue';
    //btnIndigo.style.backgroundColor = 'indigo';
    //btnViolet.style.backgroundColor = 'violet';
}

function turnOff(selected) {
    var selectedBtnClassList = selected.classList;  
    if (selectedBtnClassList.contains('cake')) {
        selectedBtnClassList.remove('cake');
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
        randomColor();
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


