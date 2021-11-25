import zlib


# common functions
def b4(i: int): return i.to_bytes(4, 'big')
def chunk(b: bytes): return b4(len(b) - 4) + b + b4(zlib.crc32(b))


# constants
SIG = b'\x89PNG\r\n\x1a\n'
IHDR = b'IHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x02\x00\x00\x00'
IEND = b'\x00\x00\x00\x00IEND'


def png(hex: int, *, out: str = 'out') -> None:
    idat = b'IDAT' + zlib.compress(b4(hex))
    open(f'{out}.png', 'wb').write(SIG + chunk(IHDR) + chunk(idat) + IEND)
