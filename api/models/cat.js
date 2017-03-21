var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CatSchema = new Schema(
  {
    name: {type: String, unique: true}
  },
  {timestamps:true}
)
module.exports = mongoose.model('Cat',CatSchema);
