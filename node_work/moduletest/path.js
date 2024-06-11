const path = require('path');

console.log(__filename);
console.log('path : '+path.dirname(__filename));

console.log(path.extname(__filename));
console.log(path.extname('index.html'));

console.log(path.join('/temp','abc.txt'));
console.log(path.join(path.dirname(__filename),path.basename(__filename)));

console.log(path.parse('/temp/upload/abc.txt'));