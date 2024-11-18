const express = require('express');
const app = express();
const paymentRoutes = require('./routes/paymentRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', paymentRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});