const { Schema, model } = require("mongoose");

const contectSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  message: { type: String, require: true },
});

const Contact = new model("contact", contectSchema);

module.exports = Contact;
