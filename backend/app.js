const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

// const rateLimit = require('express-rate-limit');
const config = require('./config/config');

const app = express();

const booksRoutes = require('./routes/booksRoutes');
const usersRoutes = require('./routes/usersRoutes');
const path = require('path');

mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(helmet());
app.use(mongoSanitize());

// // Limite de requêtes
// const limiter = rateLimit({
//   windowMs: 60 * 1000,
//   max: 25,
//   message: 'Trop de requêtes effectuées. Veuillez réessayer plus tard.',
// });

// app.use(limiter);

// Chemin vers le répertoire pour les fichiers
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/books', booksRoutes);
app.use('/api/auth', usersRoutes);

module.exports = app;