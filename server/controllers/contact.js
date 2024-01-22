const Contact = require("../models/contect-model");

const contactform = async (req, res) => {
  try {
    const response = req.body;

    await Contact.create(response);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = { contactform };
