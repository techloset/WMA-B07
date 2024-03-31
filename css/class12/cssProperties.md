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

## CSS Media Queries
CSS media queries are a powerful tool used in responsive web design to apply different styles to a webpage based on the characteristics of the device it's being viewed on, such as screen width, height, orientation, and resolution. Here are several examples of CSS media queries targeting different device characteristics:

```
/* Apply styles when screen width is 600px or less */
@media screen and (max-width: 600px) {
  /* CSS styles go here */
}


/* Apply styles when screen width is between 600px and 900px */
@media screen and (min-width: 600px) and (max-width: 900px) {
  /* CSS styles go here */
}


/* Apply styles when screen is in portrait orientation */
@media screen and (orientation: portrait) {
  /* CSS styles go here */
}

/* Apply styles when screen is in landscape orientation */
@media screen and (orientation: landscape) {
  /* CSS styles go here */
}


/* Apply styles for printing */
@media print {
  /* CSS styles go here */
}


/* Apply styles when device aspect ratio is 16:9 */
@media screen and (aspect-ratio: 16/9) {
  /* CSS styles go here */
}


/* Apply styles when device aspect ratio is 16:9 */
@media screen and (aspect-ratio: 16/9) {
  /* CSS styles go here */
}


/* Apply styles when device is in landscape orientation and width is less than 800px */
@media screen and (orientation: landscape) and (max-width: 800px) {
  /* CSS styles go here */
}


/* Apply styles when user prefers dark color scheme */
@media (prefers-color-scheme: dark) {
  /* CSS styles go here */
}

/* Apply styles when user prefers light color scheme */
@media (prefers-color-scheme: light) {
  /* CSS styles go here */
}


```

## CSS Animations / transition

CSS animations and transitions are essential tools for adding dynamic effects to web pages. Here's a comprehensive list of CSS animation and transition properties:

**Transition Properties:**
transition-property: Specifies the CSS property to which the transition effect is applied.
transition-duration: Specifies the duration of the transition effect.
transition-timing-function: Specifies the speed curve of the transition effect.
transition-delay: Specifies a delay before the transition effect starts.

Transition Property: Animating CSS Changes

The transition-property property in CSS allows you to create smooth animations when the values of certain CSS properties change on an element. This is particularly useful for enhancing user experience by making web pages feel more dynamic and interactive.

How it Works

To create a transition effect, you typically use the transition property, which is a shorthand for several transition-related properties. Here's a breakdown of the key components:

transition-property: This property specifies which CSS properties will be animated during the transition. You can list one or multiple properties separated by commas. Here are some common examples:

background-color
width
height
opacity
transform (for animations involving positioning, rotation, scaling, etc.)
transition-duration: This property defines the total time it takes for the animation to complete, specified in milliseconds (ms) or seconds (s). For example, transition-duration: 2s would create a 2-second animation.

transition-timing-function (optional): This property controls the pacing or speed curve of the animation. It accepts various values that affect how the animation progresses over time. Some common options include:

ease (default): Slow start, speeds up, then slows down at the end.
linear: Consistent speed throughout the animation.
ease-in: Starts slowly and accelerates towards the end.
ease-out: Starts quickly and decelerates towards the end.
ease-in-out: Combines a slow start and end with a faster middle section.
cubic-bezier(n,n,n,n): Allows you to define your own custom timing curve using Bézier curves.

**Animation Properties:**
animation-name: Specifies the name of the @keyframes animation.
animation-duration: Specifies the duration of the animation.
animation-timing-function: Specifies the speed curve of the animation.
animation-delay: Specifies a delay before the animation starts.
animation-iteration-count: Specifies the number of times an animation should be played.
animation-direction: Specifies whether the animation should play in reverse or alternate cycles.
animation-fill-mode: Specifies what values are applied by the animation outside the time it is executing.
animation-play-state: Specifies whether the animation is running or paused.
**Shorthand Properties**:
transition: Shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.
animation: Shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.
Other Relevant Properties:
@keyframes: Specifies the animation code. It is used within the animation-name property.
transform: Applies a 2D or 3D transformation to an element.
@supports: Checks if the browser supports CSS features.


```

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Transition Example</title>
<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: blue;
        transition: width 1s ease-in-out;
    }

    .box:hover {
        width: 200px;
    }
</style>
</head>
<body>
    <div class="box"></div>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Animation Example</title>
<style>
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner {
        width: 100px;
        height: 100px;
        border: 10px solid #333;
        border-top-color: red;
        border-radius: 50%;
        animation: rotate 2s linear infinite;
    }
</style>
</head>
<body>
    <div class="spinner"></div>
</body>
</html>



```

## CSS Grid

