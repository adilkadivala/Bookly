const { Schema, model, Mongoos } = require("mongoose");

const bookSchema = new Schema({
  book_title: { type: String, required: true },
  book_description: { type: String, required: true },
  bookImage: { type: String, required: true },
  price: { type: String, required: true },
  select_book_category: { type: String, required: true },
});

const bookData = new model("book", bookSchema);

module.exports = bookData;
