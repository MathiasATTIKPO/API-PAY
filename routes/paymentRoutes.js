const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/testController');

// Route POST pour initier un paiement
router.post('/initiate', paymentController.initiatePayment);

module.exports = router;
