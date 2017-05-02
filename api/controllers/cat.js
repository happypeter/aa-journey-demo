let Cat = require('../models/cat');

// add new catetory
exports.add = function (req, res) {
  let _category = req.body;
  // name=?
  let category = new Cat(_category);
  category.save(function (err, category) {
    if (err) return res.status(403).json({err,msg:'添加失败请重试'});
    res.json({
      msg: '分类添加成功',
      category
    })
  })
}


exports.list = function (req, res) {
  Cat.find({},'name',function (err, cats) {
    if (err) return res.status(500).json({err, msg: '获取分类失败，请重试'});
    res.json({
      msg: '获取分类成功',
      cats
    })
  })
}

// del?id=id
exports.del = function (req,res) {
  var id = req.query.id;
  if (id) {
    Cat.remove({_id: id}, function (err,category) {
      if (err) return res.status(400).json({msg:'删除分类失败，请重试'});
      res.json({
        msg: '删除成功'
      })
    })
  }else {
    res.status(400).json({msg:'请求失败'})
  }
}
