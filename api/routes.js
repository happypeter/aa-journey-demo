let Cat = require('./controllers/cat');
let Product = require('./controllers/product');
module.exports = function (app) {
  app.post('/cat',Cat.add)
  app.get('/cats',Cat.list)
  app.delete('/cat',Cat.del)

  //  product
  app.post('/product/new',Product.new)
  app.get('/product/detail/:id',Product.detail)
  app.delete('/product/delete/:id',Product.del)

}
