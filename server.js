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

  /* Run: npm install body-parser --save */
  