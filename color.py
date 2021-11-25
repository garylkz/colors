import zlib

b4 = lambda i : i.to_bytes(4, 'big')

SIG = b'\x89PNG\r\n\x1a\n'
IHDR = b'\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x02\x00\x00\x00\x90wS\xde'
IEND = b'\x00\x00\x00\x00IEND'

def png(h: int) -> None:
    out = hex(h)[2:] + '.png'
    s = zlib.compress(b4(h))
    IDAT = b4(len(s)) + b'IDAT' + s + b4(zlib.crc32(s))
    open(out, 'wb').write(SIG + IHDR + IDAT + IEND)
