---
id: element_object
title: JavaScript Element Object
sidebar_label: Element Object
---

Element objects represent DOM elements. Below are properties and methods for analyzing and transforming elements.

### Properties
Property | Definition | Example
---|---|---
_element_`.attributes` | `NamedNodeMap` of _live_ _element_ attributes | `document.querySelector('img').attributes[0].name == 'src'`
_element_`.classList` | `DOMTokenList` of _live_ _element_'s classes | `document.querySelector('h1').classList.add('new-class')`
_element_`.className` | _element_'s class name | `document.querySelector('h1').className == 'main-class'`
_element_`.clientHeight` | Height of _element_ in pixels including padding and excluding border and margin | `document.querySelector('h1').clientHeight == 36`
_element_`.clientLeft` | Left border width of _element_ in pixels | `document.querySelector('h1').clientLeft == 2`
_element_`.clientTop` | Top border width of _element_ in pixels | `document.querySelector('h1').clientTop == 1`
_element_`.clientWidth` | Width of _element_ in pixels including padding and excluding border and margin | `document.querySelector('h1').clientWidth == 200`
_element_`.id` | _element_'s `id` attribute | `document.querySelector('h1').id == 'heading-id'`
_element_`.innerHTML` | _element_'s HTML content | `document.querySelector('h1').innerHTML = '<p>Changed paragraph</p>`
_element_`.localName` | _element_'s local tag name | `document.querySelector('h1').localName == 'h1'`

### Methods
Method | Definition | Example
---|---|---
_element_`.addEventListener(`_eventType_`,`_listener_`)` | Calls the _listener_ function (or object containing a `handleEvent` function) when an _eventType_ event occurs | `'UDocs'.charAt() == 'U'`
