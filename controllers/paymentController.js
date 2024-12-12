const axios = require('axios');

exports.initiatePayment = async (req, res) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'PAYDUNYA-MASTER-KEY': process.env.PAYDUNYA-MASTER-KEY,
      'PAYDUNYA-PRIVATE-KEY': process.env.PAYDUNYA-PRIVATE-KEY,
      'PAYDUNYA-TOKEN': process.env.PAYDUNYA-TOKEN
    };

    const data = {
      recipient_phone: req.body.recipient_phone,
      amount: req.body.amount,
      support_fees: req.body.support_fees || 1,
      send_notification: req.body.send_notification || 1
    };

    //const response = await axios.post('https://app.paydunya.com/api/v1/dmp-api', data, { headers });
    const response = await axios.post('https://app.paydunya.com/api/v1/softpay/t-money-togo', data, { headers });
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error('Erreur de paiement:', error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, error: 'Erreur lors de l’initiation du paiement' });
  }
};
