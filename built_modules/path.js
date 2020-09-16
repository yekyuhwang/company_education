const path = require(`path`);

console.log(__filename);
console.log(path.dirname(__filename));

console.log(path.parse(__filename));
console.log(path.sep);

console.log(`home${path.sep}node${path.sep}project`);

console.log(__dirname, `${path.sep}pubilc`);

console.log(path.join(__dirname, `${path.sep}pubilc`));
