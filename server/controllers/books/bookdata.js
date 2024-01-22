const bookData = require("../../models/book-modal");

const getbookdata = async (req, res) => {
  try {
    const response = await bookData.find();

    if (!response) {
      res.status(404).json({ msg: "No books Found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getbookdata };
