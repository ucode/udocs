---
id: tables_html
title: HTML Tables
sidebar_label: HTML Tables
---


## HTML5 Table Elements
The HTML `<table>` element represents tabular data — that is, information presented in a table made up of rows and columns that have cells containing data.

| Start Tag &nbsp; &nbsp; &nbsp; &nbsp;| Content | End Tag |
|--------|---|---
| `<table>` | This starts a table and holds all of the table elements. | `/table>` |
| `<caption>` | The Table Caption element specifies the caption (or title) of a table, and if used is always the first child of a `<table>`.  |`</caption>` |
| `<thead>` | The `<thead>` element defines a set of rows that's the head of the **columns** of the table. |`</thead>` |
| `<tr>` | The `<tr>` element defines a row of cells in a table. The row's cells can then be made using a mix of `<th>` (header cell) elements and `<td>` (data cell) elements. |`</tr>` |
| `<th>` | The `<th>` element defines **a cell** as header of a group of table cells - in a row or a column. |`</th>` |
| `<tbody>` | The Table Body element holds a set of table row (`<tr>`) elements. It's a semantic tag useful for styling and accessibility. |`</tbody>` |
| `<td>` | The `<td>` element defines a cell of a table that contains data. |`</td>` |
| `<tfoot>` | The HTML `<tfoot>` element defines a set of rows summarizing the columns of the table. |`</tfoot>` |


### Simple Table Example
``` html
<p>Table with thead, tfoot, and tbody</p>
<table>
<caption>Awesome caption</caption>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body content cell that goes in column 1</td>
      <td>Body content cell that goes in column 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>
```

