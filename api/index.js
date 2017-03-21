const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let routes = require('./routes');
routes(app);

app.listen(3008, function(){
  console.log('running on port 3008');
})
