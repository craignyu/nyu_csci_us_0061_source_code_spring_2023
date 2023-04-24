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
const template1_string = fs.readFileSync('./views/template1.hogan', 'utf-8');

// compile the template into a usable form for hogan.js
const template1 = hogan.compile(template1_string);



// set up a global variable that we will manipulate as clients connect to the server
// because a Node.js application is constantly running, these variables persist
// (unlike in PHP which is spun up as a separate process each time Apache receives a request)
const data = {
    'counter': 0,
    'pokemon': []
};


// set our our routes

// when the user issues a 'GET' request to '/'
app.get('/', function(request, result) {
  // tell the client what kind of data we plan on sending
  result.type('html');

  // increase our counter variable by 1 each time we come to the page
  data.counter++;

  // render the hogan template with some variables
  const html = template1.render(
    {
      'counter': data.counter,
      'pokemon': data.pokemon
    }
  );

  console.log(data);

  // send the rendered HTML to the client
  result.write(html);

  // signify that we are done sending data
  result.end();
});

// handle POST requests to save a name
app.post('/savename', function(request, result) {
  // grab the name
  const pokemon = request.body.pokemon;

  // store the name
  data.pokemon.push({'name':pokemon});

  // redirect the user back to the main route
  // this is just like the 'header' function in PHP
  result.redirect('/');
  result.end();
});


// tell the app to listen on our port (this starts the server)
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
