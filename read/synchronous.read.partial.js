// @ts-nocheck
const {openSync, readSync} = require('fs');
const {convertCsv} = require('./csv.parse');

module.exports.read = () => {

fd = openSync('./data/app.log', 'r');
console.log(fd);
let count = 0;

do {
  
  const buffer = Buffer.alloc(200);
  
  count = readSync(fd,buffer, 0, buffer.length, null);
  
  //console.log('***********************', count, buffer.toString())
  
} while (count > 0);

}