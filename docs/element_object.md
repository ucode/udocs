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
_element_`.clientHeight` | Height of _element_ in pixels including padding and excluding border and margin | `document.querySelector('h1').clientHeight == 36px`
_element_`.clientLeft` | Left border width of _element_ in pixels | `document.querySelector('h1').clientLeft == 2px`
_element_`.clientTop` | Top border width of _element_ in pixels | `document.querySelector('h1').clientTop == 1px`
_element_`.clientWidth` | Width of _element_ in pixels including padding and excluding border and margin | `document.querySelector('h1').clientWidth == 200px`
_element_`.id` | _element_'s `id` attribute | `document.querySelector('h1').id == 'heading-id'`
_element_`.innerHTML` | _element_'s HTML content | `document.querySelector('h1').innerHTML = '<p>Changed paragraph</p>`
_element_`.localName` | _element_'s local tag name | `document.querySelector('h1').localName == 'h1'`
_element_`.outerHTML` | `DOMString` of the element's html code | `document.querySelector('h1').outerHTML = <h1></h1>`
_element_`.scrollHeight` | The amount an element is scrolled  | `document.querySelector('h1').scrollHeight = 324px`
_element_`.scrollLeft` | The amount an element is scrolled left | `document.querySelector('h1').scrollLeft = 13px`
_element_`.scrollLeftMax` | The maximum an element can be scrolled left | `document.querySelector('h1').scrollLeftMax = 600px`
_element_`.scrollTop` | The amount an element is scrolled from the top of the document |`document.querySelector('h1').scrollTop = 8px` |
_element_`.scrollTopMax` | The maximum an element can be scrolled from the top of the document | `document.querySelector('h1').scrollTopMax = 1200px`
_element_`.scrollWidth` | The amount an element's width was scrolled | `document.querySelector('h1').scrollWidth = 38px` |
_element_`.slot` | The name of the shadow DOM slot an element is inside of | `document.querySelector('h1').slot = pageContent`
_element_`.tabStop` | A boolean that determines if an element's input can be focused using the tab key | `document.querySelector('h1').tabStop = false`
_element_`.tagName` | A string equal to the name of an element's tag | `document.querySelector('h1').tagName = "h1"`

### Methods
Method | Definition | Example
---|---|---
_element_`.addEventListener(`_eventType_`,`_listener_`)` | Calls the _listener_ function (or object containing a `handleEvent` function) when an _eventType_ event occurs | `'UDocs'.charAt() == 'U'`
_element_`.animate()` | Creates and runs an animation on an element |
_element_`.closest()` | Returns the closest ancestor of an element |
_element_`.createShadowRoot()` | Creates a shadow DOM on an element |
_element_`.getAnimations()` | Returns an array containing active Animation objects on an element |
_element_`.getAttribute()` | Returns the named attribute as an Object |
_element_`.getAttributeNames()` | Returns an array of an element's attributes' names |
_element_`.getAttributeNS()` | Retrieves the value of the attribute with the specified name and namespace, and returns it as an Object. |
_element_`.getAttributeNode()` | Retrieves the node representation of the named attribute and returns it as an Attribute. |
_element_`.getAttributeNodeNS()` | Retrieves the node representation of the attribute with the specified name and namespace, and returns it as an Attribute.
_element_`.getBoundingClientRect()` | Returns the size and position of an element relative to the viewport |
_element_`.getClientRects()` | // |   
_element_`.getElementsByClassName()` | Returns all descendants of an element, that contain the given class names |  
_element_`.getElementsByTagName()` | Returns all descendants of an element, that contain a given tag name |
_element_`.getElementsByTagNameNS()` | Returns all descendants of an element, that contain a given tag name and namespace |
_element_`.hasAttribute()` | Returns a boolean based on wether an element has the given attribute |
_element_`.hasAttributeNS()`| Returns a boolean based on wether an element has the given attribute in the given namespace |
_element_`.hasAttributes()` | Returns a boolean based on wether an element has the given attribute(s) |
_element_`.insertAdjacentElement()` | Inserts a given element at a given position relative to an element |
_element_`.insertAdjacentHTML()` | Converts text into HTML or XML and inserts the resulting nodes into the tree in the given position |
_element_`.insertAdjacentText()` | Inserts a given text node at a given position relative to an element |
_element_`.matches()` | Returns a boolean based on wether an element would be selected by a given selector string |
_element_`.querySelector()` | Returns the first node that matches the given selector string relative to an element |
_element_`.querySelectorAll()` | Returns a NodeList of nodes which match the given selector string relative to an element.
_element_`.releasePointerCapture()` | Stops pointer capture for a given pointer event that was previously set |
_ChildNode_`.remove()` | Removes a given element from the children list of it's parent |
_element_`.removeAttribute()` | Removes the given Attribute from a node  |
_element_`.removeAttributeNS()` | Removes the attribute with the given name and namespace from a node |
_element_`.removeAttributeNode()` | Removes the given attribute's node representation from another given node |
_EventTarget_`.removeEventListener()` | Removes a given event listener from an element |
_element_`.requestFullscreen()` | Requests the browser to make the given element full-screen |
_element_`.requestPointerLock()` | Requests that the cursor becomes locked on a given element |
_element_`.scrollIntoView()` | Scrolls a given element into the view |
_element_`.setAttribute()` | Sets the value of a given attribute |
_element_`.setAttributeNS()` | Sets the value of an attribute with a given name and namespace |
_element_`.setAttributeNode()` | Sets the given attribute's node representation from another given node |
_element_`.setAttributeNodeNS()` | Sets the node representation of the attribute with the given name and namespace |
_element_`.setCapture()` | Sets up mouse event capture, applying all mouse events to this element |
_element_`.setPointerCapture()` | Redirects all future pointer events to the given element |
_element_`.toggleAttribute()` | Toggles a boolean attribute |
