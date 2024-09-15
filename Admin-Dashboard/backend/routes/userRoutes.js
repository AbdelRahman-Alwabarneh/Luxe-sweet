// const express = require('express');
// // const { getUsers, updateUser } = require('../controllers/userController');
// const { getUsers, updateUser, getActiveUserCount } = require('../controllers/userController');

// const router = express.Router();

// router.get('/', getUsers);
// router.put('/update', updateUser);
// router.get('/count', getActiveUserCount); // Add this line
// module.exports = router;
// File: routes/userRoutes.js


// const express = require('express');
// const { getUsers, updateUser, getActiveUserCount } = require('../controllers/userController');

// const router = express.Router();

// router.get('/', getUsers);
// router.put('/update', updateUser);
// router.get('/count', getActiveUserCount);

// module.exports = router;



// const express = require('express');
// const { getUsers, updateUser, getActiveUserCount } = require('../controllers/userController');

// const router = express.Router();

// router.get('/', getUsers);
// router.put('/update', updateUser);
// router.get('/count', getActiveUserCount); // المسار للحصول على عدد المستخدمين النشطين

// module.exports = router;

const express = require('express');
const { getUsers, updateUser, getActiveUserCount } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.put('/update', updateUser);
router.get('/count', getActiveUserCount); // هذا المسار مهم لجلب عدد المستخدمين النشطين من قاعدة البيانات

module.exports = router;