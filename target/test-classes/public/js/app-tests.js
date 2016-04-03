// Code inlined in the HTML
// Tests here

QUnit.test('max', function(assert) {
  expect(4);

  assert.strictEqual(App.max(), -Infinity, 'No parameters');
  assert.strictEqual(App.max(3, 1, 2), 3, 'All positive numbers');
  assert.strictEqual(App.max(-10, 5, 3, 99), 99, 'Positive and negative numbers');
  assert.strictEqual(App.max(-14, -22, -5), -5, 'All positive numbers');
});

QUnit.test('isOdd', function(assert) {
  expect(5);

  assert.ok(App.isOdd(5), '5 is odd');
  assert.ok(!App.isOdd(2), '5 is not odd');
  assert.ok(!App.isOdd(0), '0 is not odd');
  assert.throws(function() {
      App.isOdd(null);
    },
    /The given argument is not a number/,
    'Passing null raises an Error');
  assert.throws(function() {
      App.isOdd([]);
    },
    new Error('The given argument is not a number'),
    'Passing an array raises an Error');
});


QUnit.test('sortObj', function(assert) {
  expect(3);
  var timestamp = Date.now();

  var array = [{
    id: 1,
    timestamp: timestamp
  }, {
    id: 3,
    timestamp: timestamp + 1000
  }, {
    id: 11,
    timestamp: timestamp - 1000
  }];

  App.sortObj(array);

  assert.propEqual(array, [{
    id: 11,
    timestamp: timestamp - 1000
  }, {
    id: 1,
    timestamp: timestamp
  }, {
    id: 3,
    timestamp: timestamp + 1000
  }]);

  assert.notPropEqual(App.sortObj(array), array, 'sortObj() does not return an array');

  assert.strictEqual(App.sortObj(array), undefined, 'sortObj() returns undefined');
});
