let Cat = require('./controllers/cat');
let Course = require('./controllers/course');
let User = require('./controllers/user');

module.exports = function (app) {
  app.post('/cat',Cat.add)
  app.get('/cats',Cat.list)
  app.delete('/cat',Cat.del)

  //  course
  app.post('/course/new',Course.new)
  app.get('/course/detail/:id',Course.detail)
  app.get('/courses', Course.findAll)
  app.delete('/course/delete/:id',Course.del)

  app.post('/user/signup', User.signup)
  app.post('/user/signin', User.signin)
  app.get('/user/logout', User.logout)
  app.get('/user/:userId', User.getById)
}
