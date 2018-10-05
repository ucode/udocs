---
id: operators
title: JavaScript Operators
sidebar_label: Operators
---

Operators are symbols that perform specific mathematical or logical operations on values:
```javascript
11 + 34
17 == 17
```
**Operands** are the values on which operations are done

### Arithmetic operators
An arithmetic operator is a *mathematical* function that takes *two operands* and performs a calculation on them.

The following are arithmetic operators:

| Operator | Name | Definition  | Example |
|------|------------|-----------|---------|
| `+`   | Addition operator | *Adds* operands together. | `17 + 83` |
| `-`   | Subtraction operator | *Subtracts* an operand from another operand. | `32 - 17` |
| `/`   | Division operator | *Divides* an operand by another operand. | `12 / 3` |
| `*`   | Multiplication operator | *Multiplies* an operand by another operand. | `3 * 4` |
| `%`   | Remainder operator | Returns the *remainder* of an operand being divided by another operand. | `20 % 6` |
| `**`   | Exponentiation operator | Raises an operand to the power of another operand. | `2 ** 40` |

### Relational operators

A comparison operator compares *two operands* and returns a *Boolean* value based on whether the comparison is true.

The following are relational operators :

| Operator | Name | Definition | Example |
|------|---------|-------------|---------|
| `<`  | Strict inequality operator | Checks wether an operand is *less* than another operand and returns a *boolean* based on the comparison.| `12 < 432`
| `>`  | Strict inequality operator | Checks wether an operand is *greater* than another operand and returns a *boolean* based on the comparison. | `1223 > 312 `
| `<=` | Non-strict inequality operator | Checks wether an operands is *less* than or *equal* to another operand and returns a *boolean* based on the comparison. | `23 <= 2312`
| `>=` | Non-strict inequality operator| Checks wether an operand is *greater* than or *equal* to another operand and returns a *boolean* based on the comparison. | `3432 >= 3432`

### Equality operators

The result of evaluating an equality operator is *always* a *Boolean* based on whether the comparison is true.

The following are equality operators :

| Operator | Name | Definition | Example |
|----------|------------|------|---------|
| `==` | Equality operator operator | Checks if the operands are *equal* and returns a *boolean* based on the comparison. | `if (number == "90") then` |
| `!=` | Inequality operator operator | Checks if the operands are *NOT* equal and returns a *boolean* based on the comparison. | `(10 != 10)` |
| `===` | Identity operator operator | Checks if the operands are *strictly equal* with *no type conversion* and returns a *boolean* based on the comparison. | `198 === "198"` |
| `!==` | Nonidentity operator operator | Checks if the operands are not equal and/or not of the same type and returns a *boolean* based on the comparison. | `"684" !== 685` |

### Unary operators

A unary operation is an operation dealing with *only one* operand

The following are unary operators:

| Operator | Name | Definition | Example |
|----------|------|------------|---------|
| `!` | Logical NOT operator | Returns the opposite of it's operand. | `! true` |
| `delete` | Delete operator | Deletes a property from an object. | `delete object.property` |
| `void` | Void operator | Discards an expression's return value. | `void toString('9')` |
| `typeof` | Typeof operator | Determines the type of a given object. | `typeof "This is a string?"` |
| `+` | Unary plus operator | converts a value to the Number type. | `+'32423'` |
| `-` | Unary negation operator | Converts a value to the number Type then discards it. | `-true` |

### Increment and decrement operators
Postfix/prefix increment and postfix/prefix decrement operators:

| Operator | Name | Definition | Example |
|----------|------|------------|---------|
| `A++` | Postfix increment operator | Increase an operand by one after returning a value. | `var x = 3; y = x++;` |
| `A--` | Postfix decrement operator | Decrease an operand by one after returning a value. | `var x = 3; y = x--;` |
| `++A` | Prefix increment operator | Increase an operand by one before returning a value. | `var a = 2; b = --a;` |
| `--A` | Prefix decrement operator | Decrease an operand by one before returning a value. | `var a = 2; b = ++a;` |

### Bitwise operators

| Operator | Name | Definition | Example |
|----------|------|------------|---------|
| `&` | Bitwise AND operator | Returns a 1 in each bit position for which the corresponding bits of both operands are 1s. | `a & b` |
| <code>&#124;</code> operator | Bitwise OR | Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s. | <code>a &#124; b</code> |
| `^` | Bitwise XOR operator | Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s. | `a ^ b` |
| `~` | Bitwise NOT operator | Inverts the bits of its operand. | `	~ a` |
| <code>&#124;=</code> | Bitwise OR assignment operator | Uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable. |  <code>a &#124;=  b</code> |

### Binary logical operators

Logical operators are typically used with *boolean* values, and when they are, they return a *boolean* value.

The following are binary logical operators:

| Operator | Name | Definition | Example |
|----------|------|------------|---------|
| `&&` | Logical AND operator | Checks if *both* operands are *true* and returns a *boolean* based on the comparison. | `if (True && True) then` |
| <code>&#124;&#124;</code> | Logical OR operator | Checks if *one of* the operands are *true* and returns a *boolean* based on the comparison. | <code>if (True &#124;&#124; False) then</code>

### Assignment operators

Assignment operators assign a new value to it's left operand based on the value of it's right operand

The following are assignment operators:

| Operator | Name | Definition | Example |
|----------|------|------------|---------|
| `=` | Assignment operator | Assigns the value of the left operand based on the value of the right operand. | `var fruit = "apple"` |
| `*=` | Multiplication assignment operator | Returns a value equal to the first operand multiplied by the second operand. | `17 *= 3` |
| `/=` | Division assignment operator | Returns a value equal to the first operand divided by the second operand. | `32 /= 4` |
| `%=` | Remainder assignment operator | Returns a value equal to the remainder of the first operand divided by the second operand. | `34 %= 18` |
| `+=` | Addition assignment operator | Returns a value equal to the first operand added to the second operand. | `432 += 3242` |
| `-=` | Subtraction assignment operator | Returns a value equal to the second operand subtracted from the first operand.  | `432432 -= 25243` |
| `<<=` | Left shift assignment operator | Moves the specified amount of bits to the left and assigns the result to the variable | `x <<= y` |
| `>>=` | Right shift assignment operator | Moves the specified amount of bits to the right and assigns the result to the variable. | `x >>= y` |
| `>>>=` | Unsigned right shift assignment operator | Moves the specified amount of bits to the right and assigns the result to the variable.  | `x >>>= y` |
| `,` | Comma operator | Lets you include multiple expressions in a case that only requires a single expression. | `x = (x++, x)` |

### Conditional (Ternary) operator
| Operator | Name | Definition | Example |
|----------|------|------------|---------|
| `condition ? expr1 : expr2`| Conditional operator | The conditional operator returns one of two values based on the logical value of the condition. | `(condition ? ifTrue : ifFalse)` |
