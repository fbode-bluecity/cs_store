# ModBlue

## ModBlue: Module Template Bluecity

### Titular

### Index

- [Built With](#built-with)
- [Requirements](#requirements)
- [Build Guide](#build-guide)
  - [watch:](#--watch-)
  - [style:](#--style-)
  - [Terser:](#Terser-JS-compression)

### Built With

- [Sass](https://sass-lang.com/): Syntactically Awesome Style Sheets
- [Terser](https://terser.org/): JavaScript parser, mangler and compressor toolkit for ES6+
- [Lodash](https://lodash.com/): A modern JavaScript utility library delivering modularity, performance & extras.

### Requirements

- Sass ([download](https://sass-lang.com/install))
  - [npm](https://npmjs.com/get-npm) (OS-independant)
  - [Homebrew](https://brew.sh/index_da) (Mac)
- CMD (Windows)
- Terminal (Mac)

## Build Guide

`scss module-main.scss:<file_name>.css --watch --style=compressed`

### --watch:

- Recompile on file change as long, as file watcher is running.

### --style:

- `--style=compressed`: Removes as many extra characters as possible, the writes the entire stylesheet on a sinle line.
- `--style=expanded`: Writes each selector and declaration on it's own line, this is default.

## Terser JS compression

- Requires Terser. download via NP;: `npm install terser -g`<
- `terser module.js --output module.min.js`: Removes as many extra characters as possible, the writes the entire script on a sinle line.

## Project specific

# square buttons

- https://spin.atomicobject.com/2015/07/14/css-responsive-square/
