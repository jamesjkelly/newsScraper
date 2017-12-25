//  mongoose
const mongoose = require("mongoose");
//  schema class
const Schema = mongoose.Schema;

// note schema
const NoteSchema = new Schema({
  body: {
    type: String
  }
});
const Note = mongoose.model("Note", NoteSchema);

// export note model
module.exports = Note;
