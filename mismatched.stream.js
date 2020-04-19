const {createReadStream, createWriteStream} = require('fs');

const stream = createReadStream('./data/app.log', {
  highWaterMark: 94,
  encoding: 'utf8'
})

const writer = createWriteStream('./data/output.log');

stream.pipe(writer);