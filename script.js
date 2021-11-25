const hex = document.getElementById('hex');
const _ = document.getElementById('download');

const SIG = [137, 80, 78, 71, 13, 10, 26, 10];
const IHDR = [00, 00, 00, 13, 73, 72, 68, 82, 
              00, 00, 00, 01, 00, 00, 00, 01, 
              08, 02, 00, 00, 00];
const IEND = [00, 00, 00, 00, 73, 69, 78, 68];
var idat = [73, 68, 65, 84];

function test() {
    const h = hex.value;
    var blob = process(h);
    download(blob, h);
}

function process(chars) {
    var uint8 = new Uint8Array(4);
    for (let i = 0; i < 3; i++) {
        uint8[i + 1] = parseInt(chars.substring(i * 2, (i + 1) * 2), 16);
    }
    // TODO : zlib, crc32
    var IDAT = [];
    var byteArray = SIG.concat(IHDR, IDAT, IEND);
    return new Blob(byteArray, {type: "octet/stream"});
}

function download(obj, name) {
    _.href = window.URL.createObjectURL(obj);
    _.download = name + '.txt';
    _.click();
    window.URL.revokeObjectURL(_.href);
}
