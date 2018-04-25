---
id: forms_html
title: HTML Forms
sidebar_label: HTML Form Structure
---
HTML Forms allow users to send data to the web site. Most of the time that data is sent to the web server, but the web page can also intercept it to use it on its own.

An HTML Form is made of one or more widgets. Those widgets can be text fields (single line or multiline), select boxes, buttons, checkboxes, or radio buttons. Most of the time those widgets are paired with a label that describes their purpose — properly implemented labels are able to clearly instruct users on what to enter into a form input.

**KEY POINTER!**
Before starting to code, it's always better to step back and take the time to think about your form. Designing a quick mockup will help you to define the right set of data you want to ask your user. If you have a really big or complicated form and your visitors won't want to fill it out!

## HTML5 Basic Form Structure
| Element &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| Description |
| --- | --- |
|[`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") | defines a form and attributes that determine the behavior of this form. Each time you want to create an HTML form, you must start it by using this element, putting all the contents inside. | 
|[`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form.")|  a convenient way to create groups of widgets that share the same purpose, for styling and semantic purposes. You can label a `<fieldset>` by including a [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend "The HTML <legend> element represents a caption for the content of its parent <fieldset>.") element just below the opening `<fieldset>` tag.| 
| `<legend>` |describes the purpose of the `<fieldset>`it is included inside.|
|[`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label "The HTML <label> element represents a caption for an item in a user interface.")|used to define a label for an HTML form widget.|
| [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user.")|used to create interactive controls for web-based forms in order to accept data from the user. |
|[`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options:")|Dropdown widget used with one or more `<option>` elements as it's children (the options visitors can select).|
|[`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea "The HTML <textarea> element represents a multi-line plain-text editing control.")|represents a multi-line plain-text editing control.|
|[`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms, or anywhere in a document that needs simple, standard button functionality.")| makes a clickable button, which can be used in forms, or anywhere in a document that needs simple, standard button functionality.|

- Note the syntax of `<input>` vs. `<textarea></textarea>`. The `<input>` tag is an empty element, meaning that it doesn't need a closing tag. On the contrary, [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea "The HTML <textarea> element represents a multi-line plain-text editing control.") is not an empty element, so you have to close it with the proper ending tag.

Here is a little example:

``` html
<form action="/my-fruit-form-page" method="post">
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small">
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium">
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large">
      <label for="size_3">Large</label>
    </p>
    <p>
      <select id="simple" name="simple">
        <option>Banana</option>
        <option>Cherry</option>
        <option>Lemon</option>
      </select>
    </p>
  </fieldset>
</form>
```
Some Form Basics
-----------------

On the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user.") element, the most important attribute is the `type` attribute. This attribute defines the way the `<input>` element behaves. If this attribute is not set, the default type is `text`.

### Input Types
| type &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| description |
| --- | --- |
|[`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)| A push button with no default behavior.|
|[`checkbox`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)| A check box allowing single values to be selected/deselected.|
| [`color`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)| A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text ([more info](https://www.w3.org/TR/html5/forms.html#color-state-(type=color))).|
|[`date`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)|A control for entering a date (year, month, and day, with no time).|
|[`datetime-local`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local)| A control for entering a date and time, with no time zone.|
|[`email`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)|  A field for editing an e-mail address.|
|[`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden)| A control that is not displayed but whose value is submitted to the server.|
|[`image`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image)| A graphical submit button. You must use the **src** attribute to define the source of the image and the **alt** attribute to define alternative text. You can use the **height** and **width** attributes to define the size of the image in pixels.|
|[`month`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month)| A control for entering a month and year, with no time zone.
|[`number`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)|A control for entering a number.|
|[`password`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password)| A single-line text field whose value is obscured. Use the **maxlength** and **minlength** attributes to specify the maximum length of the value that can be entered.|
|[`radio`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)| A radio button, allowing a single value to be selected out of multiple choices.
|[`range`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)| A control for entering a number whose exact value is not important.|
|[`reset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset)| A button that resets the contents of the form to default values.
|[`search`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)|  A single-line text field for entering search strings. Line-breaks are automatically removed from the input value.
|[`submit`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit)| A button that submits the form.
|[`tel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)|  A control for entering a telephone number.
|[`text`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)| A single-line text field. Line-breaks are automatically removed from the input value.
|[`time`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time)|  A control for entering a time value with no time zone.
|[`url`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url)|  A field for entering a URL.
|[`week`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week)|  A control for entering a date consisting of a week-year number and a week number with no time zone.|


Form Validation: Getting the right info in the right field
-------------
Some attributes that can be used to validate `<input>` elements.
| type &nbsp; &nbsp; &nbsp;| description |
| --- | --- |
|[`minlength`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-minlength) and [`maxlength`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-maxlength)| Set a minimum and maximum acceptable lengths for a password or other input.|
|`max` and `min`| Set a max or min for a number.  Example: `<input type="number" id="number" name="amount" value="1" min="1" max="10">`|
|`pattern`| When you set this the text or content needs to match what you set. Example: `<input id="secretCode" type="password" pattern="ILove" title="Enter the Secret Code for this Website">`|
|`required`| Us this if you want to make an input mandatory. When this attribute is set, the form won't submit (and will display an error message) when the input is empty (the input will also be considered invalid). Example `<input id="choose" name="i_like" required>`|
|`size`| Use this to make sure the password area is big enough for the min or max length. Example: `<input id="pin" type="password" inputmode="numeric" minlength="4" maxlength="8" size="8">`|





