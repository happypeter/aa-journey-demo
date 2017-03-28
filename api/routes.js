let Cat = require('./controllers/cat');
module.exports = function (app) {
  app.post('/cat',Cat.add)
  app.get('/cats',Cat.list)
  app.delete('/cat',Cat.del)
}
