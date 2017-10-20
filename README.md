# Ng Latinize
[![npm version](https://badge.fury.io/js/ng-latinize.svg)](https://badge.fury.io/js/ng-latinize)
[![Bower](https://img.shields.io/bower/v/ng-latinize.svg)]()
[![dependency Status](https://david-dm.org/eraycetinay/ng-latinize.svg)](https://david-dm.org/eraycetinay/ng-latinize.svg)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

Angularjs directive and angularjs filter; which use latinize.js to convert accents (diacritics) from strings to latin characters.

# Installation
```
npm install ng-latinize
bower install ng-latinize
```
# Features
- Using as directive and filter.
- Delete inappropriate characters
- Capitalization option.
# Usage
- Add latinize.js and ng-latinize.js to your source.
```
<script src="bower_components/latinize/latinize.js"></script>
<script src="bower_components/ng-latinize/dist/ng-latinize.js"></script>
```
### Basic Setup
- Add ng-latinize directive to your input element.
```
<input type="text" ng-model="test" ng-latinize />
```
- Add ngLatinize filter anywhere you need.
```
{{ text | ngLatinize }}
```
### Capitalize Setup
- Add capitalize param to your input or variable
```
<input type="text" ng-model="test" data-capitalize="true" ng-latinize />
{{ anothertext | ngLatinize:true }}
```
## Example
If you enter **ỆᶍǍᶆṔƚÉ áéíóúýčďěňřšťžů** to the input below.
```
<input type="text" ng-model="accentedLetter" />
{{ accentedLetter | ngLatinize:true }}
```
It will convert the string to **EXAMPLE AEIOUYCDENRSTZU**.
## License
[MIT](LICENSE) license.
