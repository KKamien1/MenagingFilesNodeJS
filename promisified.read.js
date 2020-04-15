const fs = require('fs');
const {convertCsv} = require('./csv.parse');
const {promisify} = require('util');


const readFilePromise = promisify(fs.readFile);

    // With promisify 


    readFilePromise('./data/pulitzer-circulation-data.csv', 'utf8')
    .then(data => console.table(convertCsv(data)))
    .catch(err => console.log(err));


    // Async Await 

const read = async () => {
    const data = await readFilePromise('./data/pulitzer-circulation-data.csv', 'utf8');
    console.table(convertCsv(data))
}

read();