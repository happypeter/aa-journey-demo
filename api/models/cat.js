var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CatSchema = new Schema(
  {
    name: {type: String, unique: true},
    courses: [{
      type: ObjectId,
      ref: 'Course'
    }]
  },
  {timestamps:true}
)
module.exports = mongoose.model('Cat',CatSchema);
