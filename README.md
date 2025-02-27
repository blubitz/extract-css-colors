# extract-css-colors

This ES module extracts all CSS colors from an element and its children.

## Installation
```bash
npm i extract-css-colors
```

## Usage

### Syntax

```js
cssColors(element)
```

### Return value

```js
["rgb(0, 0, 0)", "rgba(0, 0, 0, 0)", ...]
```
An array of strings. Each string being either a `rgb()` value or `rgba()` value. Color values include all colors found in the element and its children.

### Example

```js
import cssColors from './node_modules/css-colors/index.js'

const el = document.getElementById('yourElement')
console.log( cssColors(el) )

/*
Array(12) [ "rgb(0, 0, 0)", "rgba(0, 0, 0, 0)", "rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(0, 128, 0)", "rgb(255, 153, 0)", "rgb(128, 0, 128)", "rgb(255, 192, 203)", "rgb(100, 200, 100)", "rgb(165, 42, 42)", … ]
*/
```

## Notes

Only the following CSS properties are used by the module to generate the color palette.

| CSS Property       | Source of Colors    |
|-------------------|--------------------|
| color              | Text color         |
| backgroundColor    | Background color   |
| borderTopColor     | Top border color   |
| borderRightColor   | Right border color |
| borderBottomColor  | Bottom border color|
| borderLeftColor    | Left border color  |
| backgroundImage    | Background gradient|

## License

MIT

## Contributing

If you want to help fix a bug or add new features,
1. Fork this repository
2. Apply changes
4. Submit a pull request