
const {writeFile, appendFile} = require('fs');





appendFile('./data/app.log', 
    'append data to write \n',
    (err) => {err ? console.log(err) : console.log('file saved!')
});

// The same as writeFile with 'a' flag

writeFile('./data/app.log', 
    'data to write \n',
    {flag: 'a'},  
    (err) => {err ? console.log(err) : console.log('file saved!')
});
