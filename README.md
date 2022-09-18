A hex color generator...

## [color.html](color.html)

...website. 
Wait, am I supposed to further explain it? 
Anyway, [here](color.html).

## [color.py](color.py)

...script. 
But seriously, why did I made this?
[To learn more](https://www.w3.org/TR/PNG-Structure.html).

**Usage**

```py
import color
color.png(0x333333)
```

## To learn more (abridged)

A simple `.png` file structure

1. PNG signature (8 bytes)
2. IHDR (4 + 4 + 13 bytes)
3. IDAT (4 + 4 + x : x < 2gb)
4. IEND (4 + 4 bytes)

> 4 (chunk size) + 4 (chunk type) + ...  

### PNG signature

 ```
 89  50  4e  47  0d  0a  1a  0a  # 8 bytes
\x89PNG\r\n\x1a\n               # hex string
```

### IHDR

```
00  00  00  0D  0C  0D  0E  0F
\x00\x00\x00\rIHDR
```

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

```
XX  XX  XX  XX  49  44  41  54
XXXXIDAT
```

- **zlib compression** is *required* for this section's data bytes
- **CRC check** is *needed* for this chunk 

### IEND

```
00  00  00  00  49  45  4E  44
\x00\x00\x00\x00IEND
```
