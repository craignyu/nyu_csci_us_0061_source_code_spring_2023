// import the required modules
const express = require('express'); // main server
const bodyParser = require('body-parser'); // parsing POST requests
const fs = require('fs'); // file system access
const hogan = require('hogan.js');

// create an express app using the module
const app = express();

// define the port number we plan on using for our server
const port = 12345;

// tell the app to use the public 'middleware'
// this will allow us to serve public content to the client
// via the 'public' folder
app.use(express.static('public'));

// Use the body-parser middleware to parse the request body for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// load any templates we plan on using with this app
const template2_string = fs.readFileSync('./views/template2.hogan', 'utf-8');

// compile the template into a usable form for hogan.js
const template2 = hogan.compile(template2_string);


// set our our routes

// when the user issues a 'GET' request to '/'
app.get('/', function(request, result) {
  // tell the client what kind of data we plan on sending
  result.type('html');

  // data we want to render - note that we are planning on rendering this array of objects into a series of <li> tags
  const data = [
    {name: 'Pikachu', address: '123 Main Street'},
    {name: 'Charmander', address: '456 Elm Street'},
    {name: 'Squirtle', address: '789 West 4th Street'}
  ]

  // render the hogan template with some variables
  const html = template2.render({
    title: 'My Super Awesome Website',
    items: data
  });

  // send the rendered HTML to the client
  result.write(html);

  // signify that we are done sending data
  result.end();
});


// tell the app to listen on our port (this starts the server)
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
