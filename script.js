const div = document.getElementById('div'); // body
const i = document.getElementById('i'); // input
const c = document.getElementById('c'); // canvas
const d = document.getElementById('d'); // download

function fill(rgb) {
    var _c = c.getContext('2d');
    _c.fillStyle = rgb;
    _c.fillRect(0, 0, 1, 1);
}

function onInput() {
    var l = i.value.length;
    // i.style.width = ((l < 3) ? 4 : l + 1) +'ch';
    var rgb = (l != 0 && l % 3 == 0) ? '#' + i.value : 'white';
    div.style.background = rgb;
    fill(rgb);
}

function download() {
    var l = i.value.length;
    if (l % 3 != 0) {
        alert('Input is not hex.');
        return;
    } 
    d.href = c.toDataURL();
    d.download = '#' + ((l == 0) ? 'fff' : i.value.toLowerCase()) + '.png';
    d.click();
}

fill('white');