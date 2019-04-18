const fs = require('fs');
const readline = require('readline');


// READ FILE LINE BY LINE.
let rl = readline.createInterface({
    input: fs.createReadStream('test.txt')
});

// event is emitted after each line
rl.on('line', function(line) {
    console.log('line: ' + line);
});

// end
rl.on('close', function(line) {
    console.log('file closed');
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~

// READ WHOLE FILE.
const contents = fs.readFileSync('test.txt', 'utf8');
console.log('whole file contents:')
console.log(contents);