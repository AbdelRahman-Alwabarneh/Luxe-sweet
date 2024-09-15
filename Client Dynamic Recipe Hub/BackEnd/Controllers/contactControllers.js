const Contacts = require("../Models/contactModels");


exports.Contact = async (req, res) => {
  try {
    const { Name, Email, Message } = req.body;

    if (!Name || !Email || !Message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // استخدام Model.create() لإدراج المستخدم الجديد
    const contact = await Contacts.create({
      name: Name,
      email: Email,
      message: Message,
    });

    res
      .status(201)
      .json({ message: "contact created successfully", user: contact });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
