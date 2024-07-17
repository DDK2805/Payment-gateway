// src/controllers/paymentController.js
const Payment = require('../models/Payment');
const Transaction = require('../models/Transaction');

exports.createPayment = async (req, res) => {
  const { userId, amount, currency } = req.body;

  try {
    const payment = new Payment({ userId, amount, currency });
    await payment.save();

    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.processPayment = async (req, res) => {
  const { paymentId } = req.params;
  const { paymentMethod, cardNumber, expiryDate, cvv } = req.body;

  try {
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Process payment logic here (mocked for simplicity)
    payment.status = 'completed';
    await payment.save();

    const transaction = new Transaction({
      paymentId: payment._id,
      type: 'payment',
      status: 'completed',
    });
    await transaction.save();

    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPaymentStatus = async (req, res) => {
  const { paymentId } = req.params;

  try {
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.handleRefund = async (req, res) => {
  const { paymentId } = req.params;
  const { amount } = req.body;

  try {
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Process refund logic here (mocked for simplicity)
    const transaction = new Transaction({
      paymentId: payment._id,
      type: 'refund',
      status: 'completed',
    });
    await transaction.save();

    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
