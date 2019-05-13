# number-case
Simple prototype for number case

## Usage
You can use module in different ways

### As function:
```node
let caser = require('number-case')()

caser(1, 'st', 'nd', 'th');  // '1st'
caser(2, 'st', 'nd', 'th');  // '2nd'
caser(5, 'st', 'nd', 'th');  // '5th'
```
```node
let caser = require('number-case')({space: ' '})

caser(1, 'number', 'numbers');  // '1 number'
caser(2, 'number', 'numbers');  // '2 numbers'
caser(5, 'number', 'numbers');  // '5 numbers'
```

### As prototype:
```node
Number.prototype.case = require('number-case')({isPrototype: true})

1..case('st', 'nd', 'th');  // '1st'
2..case('st', 'nd', 'th');  // '2nd'
5..case('st', 'nd', 'th');  // '5th'
```
```node
Number.prototype.case = require('number-case')({space: ' ', isPrototype: true})

1..case('number', 'numbers');  // '1 number'
2..case('number', 'numbers');  // '2 numbers'
5..case('number', 'numbers');  // '5 numbers'
```

## Default parameters:
```node
{
  space: '',
  isPrototype: false
}
```