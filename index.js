require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static('public'));

app.get('/', (req, res) => {
  // Utilisez path.join pour construire le chemin complet du fichier HTML
  const indexPath = path.join(__dirname, 'public', 'html', 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
