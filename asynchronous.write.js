
const {constants, writeFile} = require('fs');


writeFile('./data/app.log', 'data to write', (err) => {
    err ? console.log(err) : console.log('file saved!')
});


writeFile('./data/app.log', 'data to write with options', 
    
    {mode: constants.S_IWUSR | constants.S_IRUSR}, 

    (err) => {
        err ? console.log(err) : console.log('file saved!')
});
