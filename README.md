# Colors

## [color.py](color.py)

Python script to generate 1x1 image of color hex.

**Example**

    import color
    color.png(0x333333)

## [PNG file structure](https://www.w3.org/TR/PNG-Structure.html)

- PNG signature (8 bytes)
- IHDR (8 + 13 bytes)
- IDAT (4 + 4 + < 2gb)
- IEND (8 bytes)

> 4 (Chunk size, chunk type excluded) + 4 (Chunk type) + x (Chunk data)

### PNG signature

    89  50  4e  47  0d  0a  1a  0a

### IHDR

    00  00  00  0D  0C  0D  0E  0F

- Width (4 bytes)
- Height (4 bytes)
- Bit depth (1 byte)
    - Number of bits per sample
    - 1, 2, 4, 8 or 16 only
- Color type (1 byte)
    - 0, Grayscale (any depth)
    - 2, RGB (8, 16)
    - 3, Palette index (1, 2, 4, 8)
    - 4, Grayscale A (8, 16)
    - 6, RGBA (8, 16)
- Compression method (1 byte)
    - 0 only
- Filter method (1 byte)
    - 0 only
- Interlace method (1 byte)
    - 0, None
    - 1, Adam7 (render+, quality-)

### IDAT

    49  44  41  54

### IEND

    00  00  00  00  49  45  4E  44
