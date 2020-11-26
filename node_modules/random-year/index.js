'use strict';

var randomNatural = require('random-natural');

module.exports = function (options) {

  if (options && (options.min || options.max)) {

    if (!options.min) {
      options.min = options.max - 100;
    } else if (!options.max) {
      options.max = options.min + 100;
    }

    return randomNatural(options);
  }

  var year = (new Date()).getFullYear();

  return randomNatural({
    max: year,
    min: year - 100,
    inspected: true
  });
};
