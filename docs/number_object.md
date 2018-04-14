---
id: number_object
title: JavaScript Number Object
sidebar_label: Number Object
---

Number constants and functions for converting and testing numbers.

### Constants
Constant | Definition | Value
---|---|---
`Number.EPSILON` | Smallest possible difference between 2 different JavaScript numbers | \\(2.220446049250313 \times 10^{-16}\\)
`Number.MAX_SAFE_INTEGER` | Biggest *safe* JavaScript integer | \\(2^{53} - 1\\)
`Number.MAX_VALUE` | Biggest possible number | \\(1.7976931348623157 \times 10^{308}\\)
`Number.MIN_SAFE_INTEGER` | Smallest *safe* JavaScript integer | \\(-(2^{53} - 1)\\)
`Number.MIN_VALUE` | Smallest possible number bigger than `0` | \\(5 \times 10^{-324}\\)
`Number.NaN` | Not a number | `NaN`
`Number.NEGATIVE_INFINITY` | Negative infinity | `-Infinity`
`Number.POSITIVE_INFINITY` | Positive infinity | `Infinity`

### Functions
Function | Definition | Example
---|---|---
`Number.isNaN(`*number*`)` | Checks if argument is `NaN` | `Number.isNaN('abc')`
`Number.isFinite(`*number*`)` | Checks if argument is not `Infinity` or `-Infinity` | `Number.isFinite(5)`
`Number.isInteger(`*number*`)` | Checks if argument is an integer | `Number.isInteger(3)`
`Number.isSafeInteger(`*number*`)` | Checks if argument is a safe integer | `Number.isSafeInteger(2 ** 53 - 1)`
`Number.parseFloat(`*number*`)` | Same as `parseFloat` | `Number.parseFloat('1.2')`
`Number.parseInt(`*number*`)` | Same as `parseInt` | `Number.parseInt('2')`
