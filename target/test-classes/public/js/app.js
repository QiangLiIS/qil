var App = {
  max: function() {
    var max = -Infinity;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }

    return max;
  },
  isOdd: function(number) {
    if (typeof number !== 'number') {
      throw Error('The given argument is not a number');
    }
    return number % 2 !== 0;
  },
  sortObj: function(array) {
    array.sort(function(a, b) {
      var date1 = new Date(a.timestamp).getTime();
      var date2 = new Date(b.timestamp).getTime();

      if (date1 < date2) {
        return -1;
      } else if (date1 === date2) {
        return 0;
      } else {
        return 1;
      }
    });
  }
};
