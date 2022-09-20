# demo-bootstrap-use-sass

Demo of correct usage of `bootstap` with Dart Sass using `@use` instead of deprecated `@import`

## Install

```
npm i
```

## Build

```
npm run build
```

## Output in console

```
asset styles.css 39 bytes [compared for emit] (name: styles)
orphan modules 2.79 KiB (javascript) 937 bytes (runtime) [orphan] 7 modules
cacheable modules 50 bytes (javascript) 38 bytes (css/mini-extract)
  ./src/sass/main.scss 50 bytes [built] [code generated]
  css ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss 38 bytes [built] [code generated]
webpack 5.74.0 compiled successfully in 304 ms
```

> No warnings.

## Generated CSS

_dist/styles.css_
```css
.img-fluid{max-width:100%;height:auto}
```