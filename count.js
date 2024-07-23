
let count = 0;
function sum() {
    count++

    document.getElementById('sum').style.color = 'green';
    document.getElementById('sum').innerText = count;

}
// let count=0;
function min() {
    count--

    document.getElementById('sum').style.color = 'black';
    document.getElementById('sum').innerText = count;

}

function reset() {

    document.getElementById('sum').style.color = 'red';
    document.getElementById('sum').innerText = 0;

}
