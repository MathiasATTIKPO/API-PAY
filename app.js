const express = require('express');
const app = express();
const paymentRoutes = require('./routes/paymentRoutes');
//const testController = require('./routes/paymentRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', paymentRoutes);
//app.use('/api', testController);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
    console.log(`disponible à http://localhost:${PORT}`);
});