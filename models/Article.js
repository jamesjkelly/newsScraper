//  mongoose
const mongoose = require("mongoose");
// schema
const Schema = mongoose.Schema;

//  article schema
const ArticleSchema = new Schema({
   title: {
    type: String,
    required: true
  },
   link: {
    type: String,
    required: true
  },
   notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
