
const express = require('express');
const router = express.Router();
const Contacts = require('../Controllers/contactControllers');

router.post('/', Contacts.Contact);

module.exports = router;
