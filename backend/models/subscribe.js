const mongoose = require("mongoose");

const subscriber = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
module.exports = mongoose.model("subscribe", subscriber);
