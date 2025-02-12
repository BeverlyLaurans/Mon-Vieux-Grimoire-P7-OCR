const multer = require('multer');

// Association des types aux formats correspondants
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

// Options de stockage des fichiers téléchargés
const storage = multer.diskStorage({
  // Gestion du dossier de destination
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  // Gestion du nom de fichier
  filename: (req, file, callback) => {
    const originalName = file.originalname;
    // Retrait de l'extension récupérée dans le nom du fichier
    const nameWithoutExtension = originalName.split('.').slice(0, -1).join('.');
    const name = nameWithoutExtension.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({ storage: storage }).single('image');