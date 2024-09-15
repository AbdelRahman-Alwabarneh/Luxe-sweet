const express = require('express');
const { getContacts, respondContact,getMessageCount } = require('../controllers/contactController');
const router = express.Router();

router.get('/', getContacts);
router.put('/respond', respondContact);
// New route to get count of messages
router.get('/messages/count', getMessageCount);

module.exports = router;
