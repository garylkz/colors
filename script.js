const c = document.getElementById('c');
const h = document.getElementById('h');
const d = document.getElementById('d');

function fill() {
    var ctx = c.getContext('2d');
    ctx.fillStyle = '#' + h.value;
    ctx.fillRect(0, 0, 1, 1);
}

function download() {
    d.href = c.toDataURL();
    d.download = h.value.toLowerCase() + '.png';
    d.click();
}
