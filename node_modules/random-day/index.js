'use strict';

var pickItem      = require('pick-item');
var randomNatural = require('random-natural');

var MIN  = 1;
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

module.exports = function (options) {

  options = options || {};

  var MAX;

  if (options.month) {
    var month = randomNatural.fixme(options.month, 1, 12, true);

    MAX = days[month - 1];
  } else {
    MAX = pickItem(days);
  }

  if (options.year && MAX === 28) {
    if (options.year % 4 === 0) {
      MAX = 29;
    }
  }

  var min = options.min ? randomNatural.fixme(options.min, MIN, MAX, true) : MIN;
  var max = options.max ? randomNatural.fixme(options.max, MIN, MAX, false) : MAX;

  return randomNatural({
    min: min,
    max: max,
    inspected: true
  });
};
