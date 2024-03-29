/* fs module is imported */
const fs = require('fs');
/* a readable stream is created */
const readableStream = fs.createReadStream('readable.txt');
let data = '';
/* data event is used to get the data chunks and concatanate it to data variable */
readableStream.on('data', (chunk) => {
  data += chunk;
});
/* end event is used here to log the data in console when reading is completed */
readableStream.on('end', () => {
    console.log(data);
});

// read asynchronously the stream
async function readStream() {
  const readableStream = fs.createReadStream('readable.txt');
  data = '';
  for await (const chunk of readableStream) {
    console.log('reading async chunk', chunk);
    data += chunk;
  }
  console.log(data);
}

readStream();
