const config = require('../config/config');
const PaymentRequest = require('../models/paymentModel');
const axios = require('axios');

const pydunyaClient = {
    validatePayment: async (paymentMethod, amount, recipient_phone) => {
        try {
            const response = await axios.post('https://app.paydunya.com/api/v1/dmp-api', {
                apiKey: config.paydunyaApiKey,
                publickey: config.paydunyaPublicKey,
                secretKey: config.paydunyaApiSecret,
                token: config.paydunyaToken,
                paymentMethod: paymentMethod,
                recipient_phone: recipient_phone,
                amount: amount,
                support_fees: true,
                send_notification: true,
                recipient_email: null // Remplacez par l'adresse email du destinataire si disponible
            });
            return response.data;

        } catch (error) {
            console.error('Erreur lors de la validation du paiement:', error);
            throw new Error('Payment validation failed');
        }
    }
};

exports.processPayment = async (req, res) => {
    const {paymentMethod, amount, recipient_phone} = req.body;
    const paymentRequest = new PaymentRequest(paymentMethod, amount, recipient_phone);

    try {
        const result = await pydunyaClient.validatePayment(paymentRequest.paymentMethod, paymentRequest.amount , paymentRequest.recipient_phone);
        if (result.status === "success") {
            res.json({ message: "Payment validated successfully", data: result });
        } else {
            res.status(400).json({ error: "Payment validation failed" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};