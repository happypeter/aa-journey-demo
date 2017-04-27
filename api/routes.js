let Cat = require('./controllers/cat');
let Product = require('./controllers/product');
let User = require('./controllers/user');

module.exports = function (app) {
  app.post('/cat',Cat.add)
  app.get('/cats',Cat.list)
  app.delete('/cat',Cat.del)

  //  product
  app.post('/product/new',Product.new)
  app.get('/product/detail/:id',Product.detail)
  app.delete('/product/delete/:id',Product.del)

  app.post('/user/signup', User.signup)
  app.post('/user/signin', User.signin)
  app.get('/user/logout', User.logout)
  app.get('/user/:userId', User.getById)
}
