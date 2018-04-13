---
id: strings
title: JavaScript Strings
sidebar_label: Strings
---

A JavaScript string is a sequence of characters. Strings can be created by writing the characters in between quotes or double quotes:
```javascript
'a string'
"a string"
```

### Escape Sequences
JavaScript can treat certain characters special by writing a `\` before. This is called an *escape sequence*. The following are all the valid escape sequences for JavaScript strings:
| Code | Character  |
|------|------------|
| `\'`   | Quote or apostrophe |
| `\"`   | Double quote |
| `\\`   | Backslash  |
| `\b`   | Backspace  |
| `\f`   | Form feed  |
| `\n`   | Newline    |
| `\r`   | Carriage return |
| `\t`   | Tab        |
| `\v`   | Vertical tab |
| `\0`   | Null       |
| `\`[0 to 3 digits] | Octal escape sequence |
| `\x`[2 digits] | Hexadecimal escape sequence |
| `\u`[4 digits] | Unicode escape sequence |
| `\u{`[1 to 6 digits]`}` | Unicode code point escape sequence |
| `\c`[letter] | Control escape sequence |


