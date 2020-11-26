# random-hour

> Generate a random hour.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-hour/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-hour/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-hour)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-hour/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-hour)


## Install

```
$ npm install --save random-hour 
```

## Usage

```js
var randomHour = require('random-hour');

// API
// - randomHour([options]);

// options
// - twentyFour
// - min
// - max
```

By default, returns an hour from `1` to `12` for a standard [12-hour clock](https://en.wikipedia.org/wiki/12-hour_clock):

```js
randomHour();
// => 9
```
Can optionally specify a full twenty-four:

```js
randomHour({ twentyFour: true });
// => 14
```

Optionally specify min, max, or both to limit the range.

```js
randomHour({ min: 10 });
// => 11

randomHour({ max: 10 });
// => 7

randomHour({ min: 5, max: 10 });
// => 8
```

## Related

- [random-year](https://github.com/mock-end/random-year) - Generate a random year.
- [random-month](https://github.com/mock-end/random-month) - Generate a random month.
- [random-day](https://github.com/mock-end/random-day) - Generate a random day of a month.
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

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-hour/issues/new).
