const fs = require('fs');
const readableStream = fs.createReadStream('readable.txt');
const writableStream = fs.createWriteStream('writable.txt');

// write all the data from readable.txt to writable.txt using pipe instead of event listeners and manual write with chunks
readableStream.pipe(writableStream);

// pipes can be chained too
// readableStream.pipe(writableStream1).pipe(writableStream2).pipe(writableStream3);
