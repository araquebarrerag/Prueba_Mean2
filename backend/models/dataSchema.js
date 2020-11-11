var mongoose = require("mongoose");

var paisSchema = mongoose.Schema({
  nombre: { type: String },
  capital: { type: String },
});

module.exports = mongoose.model("country", paisSchema);
