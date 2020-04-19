const {createReadStream} = require('fs');

 const stream = createReadStream('./data/app.log', {
   highWaterMark: 2000,
   encoding: 'utf8',
  });

 stream.on('data', data => {
  
  stream.pause();
  console.log(data);

  setTimeout(()=> {
    stream.resume();
  }, 1000)
});

  