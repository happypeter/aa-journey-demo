const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());

let dbURL = 'mongodb://localhost:27017/aa-api';
mongoose.Promise = global.Promise;
mongoose.connect(dbURL)
var db = mongoose.connection;
db.once('open',function () {
  console.log('mongodb connect success');
})


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
