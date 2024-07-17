// src/routes/payments.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/', paymentController.createPayment);
router.post('/:paymentId/process', paymentController.processPayment);
router.get('/:paymentId', paymentController.getPaymentStatus);
router.post('/:paymentId/refund', paymentController.handleRefund);

module.exports = router;
