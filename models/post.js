const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Un schéma détermine la structure du document en base
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
