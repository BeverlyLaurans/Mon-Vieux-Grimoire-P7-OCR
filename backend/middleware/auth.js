const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
    // Récupération du token dans l'en-tête
       const token = req.headers.authorization.split(' ')[1];
       // Décodage et vérification du token
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       // Stockage de l'id du user authentifié dans la propriété auth
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};