const {readFileSync} = require('fs');
const {convertCsv} = require('./csv.parse');

module.exports.read = () => {
const data = readFileSync('./data/pulitzer-circulation-data.csv', 'utf8');

try {
    console.table(convertCsv(data));
} catch (error) {
    console.log(error);
}

}