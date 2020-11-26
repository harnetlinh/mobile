'use strict';

var randomNatural = require('random-natural');

module.exports = function (options) {

  options = options || {};

  var twentyFour = options.twentyFour;

  var MIN = twentyFour ? 0 : 1;
  var MAX = twentyFour ? 23 : 12;

  var min = options.min ? randomNatural.fixme(options.min, MIN, MAX, true) : MIN;
  var max = options.max ? randomNatural.fixme(options.max, MIN, MAX, false) : MAX;

  return randomNatural({
    min: min,
    max: max,
    inspected: true
  });
};
