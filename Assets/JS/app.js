function findRand() {
    var red = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var colorChange = document.getElementById('card');
    colorChange = `rgb(${red},${blue},${green})`;
    document.getElementById('card').style.background = colorChange;
    document.getElementById('box').innerText = 'Background color :  #' + colorChange;

}