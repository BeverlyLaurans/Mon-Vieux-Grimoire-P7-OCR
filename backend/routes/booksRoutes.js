const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const modifyImageFile = require('../middleware/sharp');

const booksCtrl = require('../controllers/booksControllers');

router.get('/', booksCtrl.getAllBooks);
router.get("/bestrating", booksCtrl.getBestrating);
router.get('/:id', booksCtrl.getOneBook);
router.post('/', auth, multer, modifyImageFile, booksCtrl.createBook);
router.post("/:id/rating", auth, booksCtrl.createRating);
router.put('/:id', auth, multer, modifyImageFile, booksCtrl.modifyBook);
router.delete('/:id', auth, booksCtrl.deleteBook);


module.exports = router;