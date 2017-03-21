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
