# random-millisecond

> Generate a random millisecond.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-millisecond/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-millisecond/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-millisecond)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-millisecond/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-millisecond)


## Install

```
$ npm install --save random-millisecond 
```

## Usage

```js
var randomMillisecond = require('random-millisecond');
  
// API
// - randomMillisecond([options]);
  
// options
// - min
// - max
```

By default, returns a minute from `0` to `999`. Idea is for generating a clock time.
  
```js
randomMillisecond();
// => 379
```

Optionally specify min, max, or both to limit the range.

```js
randomMillisecond({ min: 100 });
// => 188

randomMillisecond({ max: 400 });
// => 235

randomMillisecond({ min: 100, max: 400 });
// => 324
```

## Related

- [random-year](https://github.com/mock-end/random-year) - Generate a random year.
- [random-month](https://github.com/mock-end/random-month) - Generate a random month.
- [random-day](https://github.com/mock-end/random-day) - Generate a random day of a month.
- [random-hour](https://github.com/mock-end/random-hour) - Generate a random hour.
- [random-minute](https://github.com/mock-end/random-minute) - Generate a random minute.
- [random-second](https://github.com/mock-end/random-second) - Generate a random second.
- [random-weekday](https://github.com/mock-end/random-weekday) - Generate a random weekday.
- [random-datetime](https://github.com/mock-end/random-datetime) - Generate a random date. 
- [random-ampm](https://github.com/mock-end/random-ampm) - Return am or pm. Very simple.
- [random-timestamps](https://github.com/mock-end/random-timestamps) - Generate a timestamp. 
- [random-hammertime](https://github.com/mock-end/random-hammertime) - Generate a random hammertime. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-millisecond/issues/new).
