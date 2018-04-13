---
id: order_of_operations
title: JavaScript Order of Operations
sidebar_label: Order of Operations
---

JavaScript generally follows the same order of operations as arithmetic. JavaScript has some additional arithmetic and algebraic operations of its own.

### Arithmetic/Algebraic Order of Operations
Higher level is higher precedence
Level | Operator | Syntax | Associativity | Examples
------|----------|--------|---------------|---------
20 | Grouping | `(` *expression* `)` | left | `2 * (3 + 4) == 14`
16 | Logical not | `!` *value* | left | `!true == false`
16 | Bitwise not | `~` *value* | left | `~3 == -4`
16 | Unary plus | `+` *value* | left | `+'5' == 5`
16 | Negation | `-` *value* | left | `-7 == 0 - 7`
15 | Exponentiation | *value* `**` *value* | right | `2 ** 3 == 8`
14 | Multiplication | *value* `*` *value* | left | `3 * 4 == 12`
14 | Division | *value* `/` *value* | left | `12 / 6 == 2`
14 | Remainder | *value* `%` *value* | left | `8 % 3 == 2`
13 | Addition | *value* `+` *value* | left | `2 + 3 == 5`, `'a' + 'b' == 'ab'`
13 | Subtraction | *value* `-` *value* | left | `9 - 7 == 2`
12 | Bitwise left shift | *value* `<<` *value* | left | `4 << 1 == 8`
12 | Bitwise right shift | *value* `>>` *value* | left | `4 >> 1 == 2`
12 | Bitwise unsigned right shift | *value* `>>>` *value* | left | `-4 >>> 24 == 255`
11 | Less than | *value* `<` *value* | left | `3 < 4`
11 | Less than or equal | *value* `<=` *value* | left | `5 <= 4`
11 | Greater than | *value* `>` *value* | left | `6 > 2`
11 | Greater than or equal | *value* `>=` *value* | left | `7 >= 1`
10 | Equality | *value* `==` *value* | left | `8 == 8`, `'a' == 'a'`
10 | Inequality | *value* `!=` *value* | left | `7 != 9`, `'a' != 'b'`
10 | Strict equality | *value* `===` *value* | left | `8 === 8`, `'a' === 'a'`
10 | Strict inequality | *value* `!==` *value* | left | `8 !== '8'`, `'4' !== 4`
9 | Bitwise and | *value* `&` *value* | left | `5 & 4 == 4`
8 | Bitwise xor | *value* `^` *value* | left | `6 ^ 3 == 5`
7 | Bitwise or | *value* &#124; *value* | left | `2`&nbsp;&#124;&nbsp;`1 == 3`
6 | Logical and | *value* `&&` *value* | left | `true && true`
5 | Logical or | *value* &#124;&#124; *value* | left | `true`&nbsp;&#124;&#124;&nbsp;`false`
4 | Conditional | *condition* `?` *value* `:` *value* | right | `(true ? 1 : 2) == 1`
3 | Assignment | *name* `=` *value* | right | `(gold = 5) == 5`
1 | Comma | *value* `,` *value* | left | `(5 + 6, 3 + 4) == 7`