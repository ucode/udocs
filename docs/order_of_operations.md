---
id: order_of_operations
title: JavaScript Order of Operations
sidebar_label: Order of Operations
---

JavaScript generally follows the same order of operations as arithmetic. JavaScript has some additional arithmetic and algebraic operations of its own.

## Arithmetic/Algebraic Order of Operations
Higher level is higher precedence
Level | Operator | Syntax | Associativity | Example
------|----------|--------|---------------|--------
20 | Grouping | `(` *expression* `)` | left | `2 * (3 + 4)`
16 | Logical not | `!` *value* | left | `!true`
16 | Bitwise not | `~` *value* | left | `~3`
16 | Unary plus | `+` *value* | left | `+5`
16 | Negation | `-` *value* | left | `-7`
15 | Exponentiation | *value* `**` *value* | right | `2 ** 3`
14 | Multiplication | *value* `*` *value* | left | `3 * 4`
14 | Division | *value* `/` *value* | left | `12 / 6`
14 | Remainder | *value* `%` *value* | left | `8 % 3`
13 | Addition | *value* `+` *value* | left | `2 + 3`, `'a' + 'b'`
13 | Subtraction | *value* `-` *value* | left | `9 - 7`
12 | Bitwise left shift | *value* `<<` *value* | left | `4 << 1`
12 | Bitwise right shift | *value* `>>` *value* | left | `4 >> 1`
12 | Bitwise unsigned right shift | *value* `>>>` *value* | left | `-3 >>> 2`
11 | Less than | *value* `<` *value* | left | `3 < 4`
11 | Less than or equal | *value* `<=` *value* | left | `5 <= 4`
11 | Greater than | *value* `>` *value* | left | `6 > 2`
11 | Greater than or equal | *value* `>=` *value* | left | `7 >= 1`
