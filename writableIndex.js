const fs = require('fs');
const readableStream = fs.createReadStream('readable.txt');
const writableStream = fs.createWriteStream('writable.txt');


readableStream.setEncoding('utf8');

// write all the data from readable.txt to writable.txt
readableStream.on('data', function (chunk) {
  writableStream.write(chunk);
});

// when the read operation is finished
readableStream.on('end', function () {
  // close the writable stream
  writableStream.end();
  console.log('write operation completed');
});
