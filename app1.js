require('dotenv').config(); // Charge les variables d'environnement
const express = require('express');
const paymentRoutes = require('./routes/paymentRoutes'); // Import des routes de paiement

const app = express();
app.use(express.json()); // Pour pouvoir lire le JSON dans les requêtes

// Utilise les routes définies dans paymentRoutes.js
app.use('/api/payments', paymentRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
