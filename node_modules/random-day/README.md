# random-day

> Generate a random day.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-day/blob/master/LICENSE)
  
[![build:?](https://img.shields.io/travis/mock-end/random-day/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-day)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-day/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-day)
  
  
## Install
  
```
$ npm install --save random-day 
```
  
## Usage
  
```js
var randomDay = require('random-day');
  
// API
// - randomDay([options]);
  
// options
// - year
// - month
// - min
// - max
```

By default, returns a day in a random month, from `1` to `31`. 

```js
randomDay();
// => 23
```

Optionally specify month:

```js
randomDay({ month: 1 }); // 1~31
// => 12
```

Optionally specify year when month is `2` to figure out leap years:

```js
randomDay({ year: 2016 month: 2 }); // 1~29
// => 18
```

Optionally specify min, max, or both to limit the range.

```js
randomDay({ min: 10 });
// => 11

randomDay({ max: 10 });
// => 7

randomDay({ min: 3, max: 9 });
// => 6
```

## Related
  
- [random-year](https://github.com/mock-end/random-year) - Generate a random year.
- [random-month](https://github.com/mock-end/random-month) - Generate a random month.
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
  
For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-day/issues/new).
