// const Contact = require('../models/Contact');

// // Get all messages
// exports.getContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find();
//     res.status(200).json(contacts);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Respond to a message
// exports.respondContact = async (req, res) => {
//   try {
//     const { contactId, response } = req.body;
//     const contact = await Contact.findById(contactId);
//     if (!contact) {
//       return res.status(404).json({ message: 'Contact not found' });
//     }
//     contact.response = response;
//     await contact.save();
//     res.status(200).json(contact);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Set up Nodemailer transporter with Gmail configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'abedalmajedalajarmah@gmail.com', // Your email address
    pass: 'ndgx zdev lywb gohb' // Your email password or app-specific password
  },
});

// Get all messages
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Respond to a message
exports.respondContact = async (req, res) => {
  try {
    const { contactId, response } = req.body;
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    contact.response = response;
    await contact.save();

    // Send email
    const mailOptions = {
      from: 'abedalmajedalajarmah@gmail.com',
      to: contact.email,
      subject: 'Response to your contact message',
      text: response,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Response sent and email dispatched successfully' });
  } catch (error) {
    console.error('Error sending response or email:', error);
    res.status(500).json({ error: error.message });
  }
};


// Get count of messages
exports.getMessageCount = async (req, res) => {
  try {
    const count = await Contact.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
