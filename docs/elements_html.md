---
id: elements_html
title: HTML Elements and Tags
sidebar_label: HTML Elements & Tags Reference List
---

An HTML element is defined by a starting tag. If the element contains other content, it ends with a closing tag.

|Start Tag &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|Content|End Tag &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|
|---------|---|---------
| `<!--` | Between these tags goes a comment. Comments don't display in the browser so you can make notes with them. | `-->` |
| `<!DOCTYPE>` | The `<!DOCTYPE>` declaration should be the very first thing in your HTML document. It's not really an HTML tag, it's and instruction that tells the browser what version of HTML is on the way - use it for "No Quirks!"  |  |
| `<a>` | Anchor tags mark the beginning and/or the end of a hypertext link.  |`</a>` |
| `<article>` | The `<article>` tag is for independent, self-contained content. Example: Forum Post or a Blog Post  |`</article>` |
| `<br/>` | This creates a line break on the rendered page. | |
| `<del>` | Text between these tags shows a line through it. It's usually near an `<ins>` element. | `</del>` |
| `<div>` | This is division content. `<div>` tags are block elements used for styling when no other semantic tag is appropriate. The inline element version is `<span>`. | `</div>` |
| `<em>` | The `<em>` element marks text that has stress emphasis. It is italic by default. | `</em>` |
| `<h1>` | This is heading rank one content. Heading tags go to `<h6></h6>` | `</h1>` |
| `<ins>` | Inserted text goes in here and there is usually a `<del>` element near. | `</ins>` |
| [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li "The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.") | The **HTML `<li>` element** is used to represent an item in a list. It must be contained in a parent element: an ordered list ([`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.")), an unordered list ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.")), or a menu ([`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.")). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter. |
| `<main>` | Specifies the main content of a document. | `</main>` |
| `<nav>` | Navigation links go between these tags. | `</nav>` |
| [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") | The **HTML `<ol>` element** represents an ordered list of items, typically rendered as a numbered list. |
| `<p>` | This is paragraph content. | `</p>` |
| `<span>` | This is a generic container (like `<div>`), which does not really represent anything. It can be used to group **inline** elements for styling purposes.  | `</span>` |
| `<strong>` | This is used for important text and makes it stand out (bold by default). | `</strong>` |

## HTML5 Elements and Tags: Table Elements
The HTML `<table>` element represents tabular data — that is, information presented in a table made up of rows and columns that have cells containing data.

| Start Tag &nbsp; &nbsp; &nbsp; &nbsp; | Content | End Tag &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|
-------|---|-------
| `<table>` | This starts a table and holds all of the table elements. | `/table>` |
| `<caption>` | The Table Caption element specifies the caption (or title) of a table, and if used is always the first child of a `<table>`.  |`</caption>` |
| `<thead>` | The `<thead>` element defines a set of rows that's the head of the **columns** of the table. |`</thead>` |
| `<tr>` | The `<tr>` element defines a row of cells in a table. The row's cells can then be made using a mix of `<th>` (header cell) elements and `<td>` (data cell) elements. |`</tr>` |
| `<th>` | The `<th>` element defines **a cell** as header of a group of table cells - in a row or a column. |`</th>` |
| `<tbody>` | The Table Body element holds a set of table row (`<tr>`) elements. It's a semantic tag useful for styling and accessibility. |`</tbody>` |
| `<td>` | The `<td>` element defines **a cell** of a table that contains data. |`</td>` |
| `<tfoot>` | The HTML `<tfoot>` element defines a set of **rows** summarizing the columns of the table. |`</tfoot>` |



## HTML5 Elements and Tags: Form Elements
The `<form>` tag is used to create an HTML form for user input. The `<form>` element can contain one or more of the following form elements:

|Start Tag &nbsp; &nbsp; &nbsp;|Content|End Tag &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|
|------|---|------
| `<form>` | This is the start of a form and all of the form elements go between these tags. | `</form>` |
| `<fieldset>` | The  `<fieldset>` element is used to group several controls as well as labels (`<label>`) within a web form. | `</fieldset>` |
| `<label>` | Used to tell the user what to put in the input. | `</label>` |
| `<legend>` | Holds a caption for the content of its parent `<fieldset>`. | `</legend>` |
| `<input>` | The `<input>` tag specifies a field where the user can enter data. The input type varies depending on the attributes. |`</input>` |
| `<textarea>` | In a text area,  the user can enter an unlimited number of characters.  |`</textarea>` |
| `<select>` | The `<select>` element is used to create a drop-down list. The `<option>` tags inside the `<select>` element define the available options in the list.  |`</select>` |
| `<option>` | The `<option>` tag defines an option in a select list.  |`</option>` |
| `<button>` | The `<button>` element represents a clickable button, which can be used in forms, or anywhere in a document that needs simple, standard button functionality.  |`</button>` |

