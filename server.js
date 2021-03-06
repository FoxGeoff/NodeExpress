/* https://malcoded.com/posts/angular-backend-express/ */

/*TS: import * as express from 'express' */
const express = require('express');
const app = express();
/*
In this case, we tell it to listen on port 8000. 
We also pass in a callback-function, that is called, 
once the server has successfully started. 
Inside there we log our successful start to the console.
*/
app.listen(8000, () => {
    console.log('Server started!')
  })

  app.route('/api/cats').get((req, res) => {
    res.send({
      cats: [{ name: 'lilly' }, { name: 'lucy' }],
    })
  })

  app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name']
    res.send({ name: requestedCatName })
  })

  /* Run: npm install body-parser --save 
  
  Another method of a REST-API is creating a 
  new object at the endpoint. This method is 
  different to the methods we looked at before 
  because it is using the HTTP-post-request 
  instead of the get-request
  
  */
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.route('/api/cats').post((req, res) => {
  res.send(201, req.body)
})

/* Changing an Object at an Endpoint */
app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body)
  })

/* Delete */
app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
  })

/* Enabling CORS 

run: npm install cors --save
https://expressjs.com/en/resources/middleware/cors.html

Simple Usage (Enable All CORS Requests)

*/
const cors = require('cors');
app.use(cors());

app.get('/api/cats', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

/*
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
*/  
