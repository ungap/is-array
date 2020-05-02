var isArray = require('../cjs');
test();

function test() {
  console.assert(isArray([]));
  console.assert(!isArray({}));
}
