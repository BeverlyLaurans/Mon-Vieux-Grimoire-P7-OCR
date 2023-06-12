const express = require('express');
const mongoose = require('mongoose');

const app = express();

const booksRoutes = require('./routes/booksRoutes');
const usersRoutes = require('./routes/usersRoutes');
// const path = require('path');

mongoose.connect('mongodb+srv://beverly:$Superpwd***@monvieuxgrimoirep7.hztg3q6.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/books', booksRoutes);
app.use('/api/auth', usersRoutes);

module.exports = app;