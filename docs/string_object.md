---
id: string_object
title: JavaScript String Object
sidebar_label: String Object
---

String functions, properties, and methods for analyzing, converting, and transforming strings.

### Functions
Function | Definition | Example
---|---|---
`String.fromCharCode(`*number*`, `*…*`)` | Converts a series of UTF-16 code units to a String | `String.fromCharCode(85, 68, 111, 99, 115, 32, 0x221e) == 'UDocs ∞'`
`String.fromCodePoint(`*number*`, `*…*`)` | Converts a series of UTF-16 code points to a String | `String.fromCodePoint(85, 68, 111, 99, 0x29cc) == 'UDoc⧌'`
<code>String.raw&#96;*template*&#96;</code> | Raw form of *template* string | <code>String.raw&#96;U\nDocs&#96; == 'U\\nDocs'</code>

### Properties
Property | Definition | Example
---|---|---
*string*`.length` | Number of characters | `'UDocs'.length == 5`

### Methods
Method | Definition | Example
---|---|---
*string*`.charAt()` | First character | `'UDocs'.charAt() == 'U'`
*string*`.charAt(`*index*`)` | Character at position *index*, starting at `0` | `'UDocs'.charAt(3) == 'c'`
*string*`.charCodeAt()` | First UTF-16 code unit | `'⟌ division'.codePointAt() == 0x27cc`
*string*`.charCodeAt(`*index*`)` | UTF-16 code unit at position *index*, starting at `0` | `'Cube root ∛'.charCodeAt(10) == 0x221b`
*string*`.codePointAt()` | First UTF-16 code point | `'∜16'.codePointAt() == 0x221c`
*string*`.codePointAt(`*index*`)` | UTF-16 code point at position *index*, starting at `0` | `'For all ∀'.codePointAt(8) == 0x2200`
*string*`.concat(`*string*`, `*…*`)` | Concatenates, or joins, strings | `'UD'.concat('o', 'cs') == 'UDocs'`
*string*`.includes(`*search*`)` | Determines if *search* is within *string* | `'UDocs'.includes('cs')`
*string*`.includes(`*search*`, `*position*`)` | Determines if *search* is within *string* starting at *position* | `!'UDocs'.includes('cs', 4)`
*string*`.endsWith(`*search*`)` | Determines if *string* ends with *search* | `'UDocs'.endsWith('cs')`
*string*`.endsWith(`*search*`, `*endPosition`)` | Determines if *string* ending at *endPosition* ends with *search* | `!'UDocs'.endsWith('cs', 3)`
*string*`.indexOf(`*search*`)` | Index of the first occurrence of *search* or `-1` | `'UDocs'.indexOf('cs') == 3`
*string*`.indexOf(`*search*`, `*position*`)` | Index of the first occurrence of *search* starting from *position* or `-1` | `'UDocs'.indexOf('cs', 4) == -1`
*string*`.lastIndexOf(`*search*`)` | Index of the last occurrence of *search* or `-1` | `'UDocsUDocs'.lastIndexOf('cs') == 8`
*string*`.lastIndexOf(`*search*`, `*position*`)` | Index of the last occurrence of *search* starting from *position* or `-1` | `'UDocsUDocs'.lastIndexOf('cs', 7) == 3`
*string*`.localeCompare(`*compare*`, `*locale*`)` | \begin{cases} \text{negative number} & \text{if string } \lt \text{compare}\newline0 & \text{if string } == \text{compare}\newline\text{positive number} & \text{if string } \gt \text{compare} \end{cases} | `'晚安'.localeCompare('你早', 'zh-CN') == 1`
*string*`.match(`*regexp*`)` | Array with matched string and capture groups from *regexp* | `'UDocs'.match(/o(.)s/)[1] == 'c'`
*string*`.normalize(`*form*`)` | Unicode Normalization Form, defaults to `'NFC'` | `'ñandu\u0301'.normalize().length == 5`
*string*`.padEnd(`*length*`, `*padding*`)` | Pads end of *string* to reach *length* with *padding*, *padding* defaults to a space | <code>'UDocs'.padEnd(7) == 'UDocs &nbsp;'</code>
*string*`.padStart(`*length*`, `*padding*`)` | Pads start of *string* to reach *length* with *padding*, *padding* defaults to a space | <code>'UDocs'.padStart(7, '-') == '--UDocs'</code>
*string*`.repeat(`*count*`)` | *String* repeated *count* times | `'UD'.repeat(3) == 'UDUDUD'`
*string*`.replace(`*search*`, `*replacement*`)` | *String* with *search* **string** or **regular expression** replaced by *replacement* **string** or **function** | `'UDocs'.replace(/..cs/, 'Code') == 'UCode'`
*string*`.search(`*regexp*`)` | First match **index** of *regexp* or `-1` | `'UDocs'.search('.s') == 3`
*string*`.slice(`*start*`)` | *String* from index *start*, or index *start* `+` *string*`.length` if *start* is negative | `'UDocs'.slice(-2) == 'cs'`
*string*`.slice(`*start*`, `*end*`)` | *String* from index *start*, or index *start*`+`*string*`.length` if *start* is negative **to** index *end*`-1`, or index *end*`-1+`*string*`.length` if *end* is negative | `'UDocs'.slice(1, -1) == 'Doc'`
*string*`.split(`*separator*`, `*limit*`)` | *String* split into an array separated by *separator* up to an **optional _limit_** of strings, splits every letter if *separator* is empty string | `'UDocs'.split('o')[1] == 'cs'`
*string*`.startsWith(`*search*`)` | Determines if *string* starts with *search* | `'UDocs'.startsWith('UD')`
*string*`.startsWith(`*search*`, `*startPosition`)` | Determines if *string* starting at *startPosition* starts with *search* | `'UDocs'.startsWith('cs', 3)`
*string*`.substr(`*start*`)` | *String* from index *start*, or index *start* `+` *string*`.length` if *start* is negative | `'UDocs'.substr(-2) == 'cs'`
*string*`.substr(`*start*`, `*length*`)` | *String* from index *start*, or index *start*`+`*string*`.length` if *start* is negative **to** *length* characters | `'UDocs'.substr(1, 3) == 'Doc'`
*string*`.substring(`*start*`)` | *String* from index *start* | `'UDocs'.substring(3) == 'cs'`
*string*`.substring(`*start*`, `*end*`)` | *String* between index *start* and *end*, not including *end* | `'UDocs'.substring(1, 4) == 'Doc'`
*string*`.toLocaleLowerCase(`*locale*`)` | Lowercase *string* in *locale* | `'UΔocs'.toLocaleLowerCase('el') == 'uδocs'`
*string*`.toLocaleUpperCase(`*locale*`)` | Uppercase *string* in *locale* | `'Uδocs'.toLocaleUpperCase('el') == 'UΔOCS'`
*string*`.toLowerCase()` | Lowercase *string* | `'UDocs'.toLowerCase() == 'udocs'`
*string*`.toString()` | String representation of *string*, for when you don't know *string* is a string | `'UDocs'.toString() == 'UDocs'`
*string*`.toUpperCase()` | Uppercase *string* | `'UDocs'.toUpperCase() == 'UDOCS'`
*string*`.trim()` | Whitespace removed from left and right sides | `' UDocs  '.trim() == 'UDocs'`
*string*`.trimLeft()` | Whitespace removed from left side | `' UDocs  '.trimLeft() == 'UDocs  '`
*string*`.trimRight()` | Whitespace removed from right side | `' UDocs  '.trimRight() == ' UDocs'`
*string*`.valueOf()` | Primitive string version of *string* | `new String('UDocs').valueOf() == 'UDocs'`
