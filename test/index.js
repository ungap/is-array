var isArray = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
delete Array.isArray;

if (typeof process !== 'undefined') {
  var i = 0;
  Object.defineProperty(Array, 'isArray', {
    get: function () {
      if (!i++)
        return void 0;
      return isArray;
    }
  });
}

var isArray = require('../cjs');
test();

function test() {
  console.assert(isArray([]));
  console.assert(!isArray({}));
}
