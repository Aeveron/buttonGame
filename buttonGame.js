var btnRed = document.getElementById('btnRed');
var btnOrange = document.getElementById('btnOrange');
var btnYellow = document.getElementById('btnYellow');
var btnGreen = document.getElementById('btnGreen');
var btnBlue = document.getElementById('btnBlue');
var btnIndigo = document.getElementById('btnIndigo');
var btnViolet = document.getElementById('btnViolet');
var secDiv = document.getElementById('secDiv');


function colorClick(clicked) {
    if (btnRed == clicked) {
        btnRed.style.backgroundColor = 'red';       
    }
    if (btnOrange == clicked) {
        btnOrange.style.backgroundColor = 'orange';
    }
    if (btnYellow == clicked) {
        btnYellow.style.backgroundColor = 'yellow';
    }
    if (btnGreen == clicked) {
        btnGreen.style.backgroundColor = 'green';
    }
    if (btnBlue == clicked) {
        btnBlue.style.backgroundColor = 'blue';
    }
    if (btnIndigo == clicked) {
        btnIndigo.style.backgroundColor = 'indigo';
    }
    if (btnViolet == clicked) {
        btnViolet.style.backgroundColor = 'violet';
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

}
