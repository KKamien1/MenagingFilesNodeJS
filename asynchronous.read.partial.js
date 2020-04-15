// @ts-nocheck
const {open, read} = require('fs');
const {convertCsv} = require('./csv.parse');


open('./data/pulitzer-circulation-data.csv', 'r', (err, fd) => {
  if (err) {
    console.log(err);
  }
  const buffer = Buffer.alloc(200);
  read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
  });
});