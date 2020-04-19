const {createReadStream, createWriteStream} = require('fs');

const stream = createReadStream('./data/app.log', {
  highWaterMark: 94,
  encoding: 'utf8'
})

const writer = createWriteStream('./data/output.log');

let iterator = 0;

stream.on('data', data => {

  stream.pause();
  console.log(++iterator);

  writer.write(data);

  setTimeout(() => {
    stream.resume();
  },2000)
})