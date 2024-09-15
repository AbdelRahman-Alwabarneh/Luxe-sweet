const express = require('express');
const router = express.Router();
const chefController = require('../controllers/chefController');

// مسار لجلب جميع الشيفات
router.get('/chefs', chefController.getAllChefs);

// مسار لتحديث حالة الموافقة لشيف
router.put('/chefs/approval', chefController.updateApprovalStatus);
router.get('/chefs/active-count', chefController.getActiveChefsCount);
router.post('/chefs/send-email', chefController.sendEmailNotification); // Ensure this line exists

module.exports = router;
