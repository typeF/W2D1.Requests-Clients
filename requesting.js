var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function(err){
  throw err;
})
.on('response', function (response){
  console.log("Response status code: " + response.statusCode);
  console.log("Response headers: " + response.headers['content-type']);
  console.log("Downloading image...");
})
.pipe(fs.createWriteStream('./future.jpg'))
.on('finish', function(){
  console.log("Download complete.");
});



// Create a new .js file and using request, make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')

// If you wanted to improve user experience, you might wish to let the user know what is happening, perhaps with two console.log statements:
// console.log('Downloading image...');
// console.log('Download complete.');