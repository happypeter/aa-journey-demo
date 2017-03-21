let Cat = require('./controllers/cat');
module.exports = function (app) {
  app.post('/cat',Cat.add)
}
