function increment() {
    let count = document.getElementById('counter').innerText;
    count = parseInt(count) || 0;
    count++;
    document.getElementById('counter').innerText = count;
}
function decrement() {
    let count = document.getElementById('counter').innerText;
    count = parseInt(count) || 0;
    count--;
    document.getElementById('counter').innerText = count;
}

function reset() {
    document.getElementById('counter').innerText = 0;
}