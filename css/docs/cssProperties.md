# CSS Selectors

CSS selectors are powerful tools for targeting elements in your HTML document and applying styles. By understanding these selectors, you can achieve precise control over the look and feel of your website.

## Basic Selectors

* **Element Selector:** Targets specific HTML elements, like `<h1>` or `<p>`.
    - Example: `h1 { color: blue; }` (styles all `<h1>` elements in blue)
* **Class Selector:** Targets elements with a specific class attribute (e.g., `.error`).
    - Example: `.error { background-color: red; }` (styles all elements with `class="error"` red)
* **ID Selector:** Targets a unique element identifier.
    - Example: `#my-button { font-size: 1.5em; }` (styles the element with `id="my-button"`)
* **Universal Selector:** Selects all elements (use cautiously).
    - Example: `* { margin: 0; padding: 0; }` (removes default margins and padding for all elements)

## Combinator Selectors

* **Descendant Selector:** Targets elements within another element.
    - Example: `nav div ul { list-style: none; }` (removes list style from `ul` elements nested within `nav div`)
* **Child Selector:** Targets direct children of an element.
    - Example: `section > article { border: 1px solid #ccc; }` (styles direct `article` children of `section`)
* **Sibling Selector:** Targets elements next to each other.
    - Example: `h2 + p { font-weight: bold; }` (styles the `p` element that follows an `h2` sibling)

## Attribute Selectors

* **Attribute Existence Selector:** Selects elements with a specific attribute.
    - Example: `img[alt] { display: block; }` (styles images with an `alt` attribute)
* **Attribute Value Selector:** Selects elements with a specific attribute value.
    - Example: `a[href="#top"] { color: green; }` (styles links with `href="#top"` green)

## Pseudo-Classes and Pseudo-Elements

* **Pseudo-Classes:** Style elements based on state or condition.
    - Example: `a:hover { text-decoration: underline; }` (underlines links on hover)
    - Example: `input:focus { outline: 2px solid blue; }` (adds a blue outline to focused input fields)
* **Pseudo-Elements:** Style specific parts of an element.
    - Example: `p::first-letter { font-size: 1.5em; }` (enlarges the first letter of `<p>` elements)
    - Example: `button::after { content: "»"; }` (adds a right arrow after `<button>` elements)

## Additional Selectors

* **nth-child(n) and nth-of-type(n):** Select elements based on their position among siblings.
    - Example: `li:nth-child(3) { background-color: yellow; }` (styles the third `li` element in each list yellow)
    - Example: `p:nth-of-type(2) { color: red; }` (styles the second `<p>` element in each parent red)
* **:not(selector):** Excludes elements from a selection.
    - Example: `a:not(.button) { text-decoration: none; }` (removes text decoration from all links except those with the class `button`)
* **:has(selector):** Selects elements that contain other elements.
    - Example: `div:has(h2) { border: 1px solid #ccc; }` (styles all `div` elements that contain an `h2` heading inside)
* **:is(selector1, selector2, ...):** Matches elements against a list of selectors.
    - Example: `.important:is(.warning, .error) { background-color: red; }` (styles elements with either the class `warning` or `error`, also having the class `important`)



## CSS Units
CSS has several different units for expressing a length.

Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.

Absolute Lengths
The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.

Unit	Description
- **cm**	centimeters
- **mm**	millimeters
- **in**	inches (1in = 96px = 2.54cm)
- **px** *	pixels (1px = 1/96th of 1in)
- **pt**	points (1pt = 1/72 of 1in)
- **pc**	picas (1pc = 12 pt)
* Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.

Relative Lengths
Relative length units specify a length relative to another length property. Relative length units scale better between different rendering mediums.

Unit	Description	
- **em**	Relative to the font-size of the element (2em means 2 times the size of the current font)	
- **ex**	Relative to the x-height of the current font (rarely used)	
- **ch**	Relative to width of the "0" (zero)	
- **rem**	Relative to font-size of the root element	
- **vw**	Relative to 1% of the width of the viewport*	
- **vh**	Relative to 1% of the height of the viewport*	
- **vmin**	Relative to 1% of viewport's* smaller dimension	
- **vmax**	Relative to 1% of viewport's* larger dimension	
- **%**	Relative to the parent element


## Background Properties
- background-color
- background-image
- background-repeat
- background-attachment
- background-position
- background (shorthand property)

## CSS Outline

An outline is a line drawn outside the element's border.

CSS has the following outline properties:
- outline-style
- outline-color
- outline-width
- outline-offset
- outline
``` 
p.ex4 {outline: thick ridge pink;}
```