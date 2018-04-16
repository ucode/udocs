---
id: math_object
title: JavaScript Math Object
sidebar_label: Math Object
---

Math constants and functions for basic mathematical operations.

### Constants
Constant | Definition | Value
---|---|---
`Math.E` | Euler's constant | \\(2.718281828459045\\)
`Math.LN2` | \\(\log_e2\\) or \\(\ln{2}\\) | \\(0.6931471805599453\\)
`Math.LN10` | \\(\log_e{10}\\) or \\(\ln{10}\\) | \\(2.302585092994046\\)
`Math.LOG2E` | \\(\log_2e\\) | \\(1.4426950408889634\\)
`Math.LOG10E` | \\(\log_{10}e\\) | \\(0.4342944819032518\\)
`Math.PI` | Ratio of a circle's circumference to its diameter | \\(3.141592653589793\\)
`Math.SQRT1_2` | \\(\sqrt{\frac12}\\) or \\(\frac{\sqrt2}2\\) | \\(0.7071067811865476\\)
`Math.SQRT2` | \\(\sqrt2\\) | \\(1.4142135623730951\\)

### Functions
Function | Definition | Example
---|---|---
`Math.abs(`*number*`)` | Absolute value | `Math.abs(-3) == 3`
`Math.acos(`*x*`)` | \\(\arccos{x}\\) or \\(\cos ^{-1} x\\) | `Math.acos(0) == Math.PI / 2`
`Math.acosh(`*x*`)` | Inverse hyperbolic cosine: \\(\ln{(x + \sqrt{x^2 - 1})}\\) | `Math.acosh(1) == 0`
`Math.asin(`*x*`)` | \\(\arcsin{x}\\) or \\(\sin ^{-1} x\\) | `Math.asin(1) == Math.PI / 2`
`Math.asinh(`*x*`)` | Inverse hyperbolic sine: \\(\ln{(x + \sqrt{x^2 + 1})}\\) | `Math.asinh(0) == 0`
`Math.atan(`*x*`)` | \\(\arctan{x}\\) or \\(\tan ^{-1} x\\) | `Math.atan(1) == Math.PI / 4`
`Math.atanh(`*x*`)` | Inverse hyperbolic tangent: \\(\frac12\ln{\frac{1 + x}{1 - x}}\\) | `Math.atanh(0) == 0`
`Math.atan2(`*y*`,`*x*`)` | \\(\arctan \frac{y}{x}\\) | `Math.atan2(0, 1) == 0`
`Math.cbrt(`*x*`)` | \\(\sqrt[3]{x}\\) | `Math.cbrt(-8) == -2`
`Math.ceil(`*x*`)` | Smallest integer \\(\ge x\\) | `Math.ceil(2.01) == 3`
`Math.clz32(`*number*`)` | Count leading zeros of 32-bit argument | `Math.clz32(4) == 29`
`Math.cos(`*\\(\theta\\)*`)` | \\(\cos{\theta}\\) | `Math.cos(Math.PI / 2) == 0`
`Math.cosh(`*x*`)` | Hyperbolic cosine: \\(\frac{e^x + e^{-x}}2\\) | `Math.cosh(0) == 1`
`Math.exp(`*x*`)` | \\(e^x\\) | `Math.exp(3) == Math.E ** 3`
`Math.expm1(`*x*`)` | \\(e^x - 1\\) | `Math.expm1(3) == Math.E ** 3 - 1`
`Math.floor(`*x*`)` | Biggest integer \\(\le x\\) | `Math.floor(1.99) == 1`
`Math.fround(`*number*`)` | Closest single precision float value | `Math.fround(1.1) == 1.100000023841858`
`Math.hypot(`*number*`, `*number*`, `*…*`)` | Square root of sum of squares | `Math.hypot(3, 4) == 5`
`Math.imul(`*number*`, `*number*`)` | 32-bit integer multiplication | `Math.imul(3, 4) == 12`
`Math.log(`*x*`)` | \\(\log_ex\\) or \\(\ln{x}\\) | `Math.log(1) == 0`
`Math.log1p(`*number*`)` | \\(\log_e{(x + 1)}\\) or \\(\ln{(x + 1)}\\) | `Math.log(0) == 0`
`Math.log10(`*number*`)` | \\(\log_{10}x\\) | `Math.log10(1) == 0`
`Math.log2(`*number*`)` | \\(\log_2x\\) | `Math.log2(1) == 0`
`Math.max(`*number*`, `*…*`)` | Maximum value of arguments | `Math.max(1, 8, 2) == 8`
`Math.min(`*number*`, `*…*`)` | Minimum value of arguments | `Math.min(1, -3, 2) == -3`
`Math.pow(`*x*`, `*y*`)` | \\(x^y\\) | `Math.pow(2, 8) == 256`
`Math.random()` | Pseudo-random number between 0 and 1, but not including 1 | `Math.random() < 1`
`Math.round(`*number*`)` | Rounds to nearest integer | `Math.round(2.5) == 3`
`Math.sign(`*x*`)` | \begin{cases} -1 & \text{if } x \lt 0\newline0 & \text{if } x = 0\newline1 & \text{if } x \gt 0 \end{cases} | `Math.sign(-33) == -1`
`Math.sin(`*\\(\theta\\)*`)` | \\(\sin{\theta}\\) | `Math.sin(Math.PI / 2) == 1`
`Math.sinh(`*x*`)` | Hyperbolic sine: \\(\frac{e^x - e^{-x}}2\\) | `Math.sinh(0) == 0`
`Math.sqrt(`*x*`)` | \\(\sqrt{x}\\) | `Math.sqrt(16) == 4`
`Math.tan(`*\\(\theta\\)*`)` | \\(\tan{\theta}\\) | `Math.tan(Math.PI / 2) == 0`
`Math.tanh(`*x*`)` | Hyperbolic tangent: \\(\frac{\sinh x}{\cosh x}\\) or \\(\frac{e^x - e^{-x}}{e^x + e^{-x}}\\) | `Math.tanh(0) == 0`
`Math.trunc(`*number*`)` | *Only* the number to the left of the decimal | `Math.trunc(12.34) == 12`
