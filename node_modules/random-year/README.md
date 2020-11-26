# random-year

> Generate a random year.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-year/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-year/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-year)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-year/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-year)


## Install

```
$ npm install --save random-year 
```

## Usage

```js
var randomYear = require('random-year');

// API
// - randomYear([options]);

// options
// - min
// - max
```

By default, `max` is the current year and `min` is 100 years smaller than `max`.

```js
randomYear();
// => 1998
```

Optionally specify min, max, or both to limit the range.

```js
randomYear({ max: 2000 }); // min will be 1900
// => 1967

randomYear({ min: 1900 }); // max will be 2000
// => 1989

randomYear({ min: 1900, max: 2100 });
// => 2003
```

## Related

- [random-month](https://github.com/mock-end/random-month) - Generate a random month.
- [random-day](https://github.com/mock-end/random-day) - Generate a random day of a month.
- [random-hour](https://github.com/mock-end/random-hour) - Generate a random hour.
- [random-minute](https://github.com/mock-end/random-minute) - Generate a random minute.
- [random-second](https://github.com/mock-end/random-second) - Generate a random second.
- [random-millisecond](https://github.com/mock-end/random-millisecond) - Generate a random millisecond.
- [random-weekday](https://github.com/mock-end/random-weekday) - Generate a random weekday.
- [random-datetime](https://github.com/mock-end/random-datetime) - Generate a random date. 
- [random-ampm](https://github.com/mock-end/random-ampm) - Return am or pm. Very simple.
- [random-timestamps](https://github.com/mock-end/random-timestamps) - Generate a timestamp. 
- [random-hammertime](https://github.com/mock-end/random-hammertime) - Generate a random hammertime. 


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-year/issues/new).
