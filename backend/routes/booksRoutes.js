const express = require('express');
const router = express.Router();

// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

const booksCtrl = require('../controllers/booksControllers');

router.get('/', booksCtrl.getAllBooks);
router.get('/:id', booksCtrl.getOneBook);
// router.get("/bestrating", booksCtrl.findBestrating);
// router.post('/', auth, multer, booksCtrl.createBook);
router.post('/', booksCtrl.createBook);
// router.put('/:id', auth, booksCtrl.modifyBook);
router.put('/:id', booksCtrl.modifyBook);
// router.delete('/:id', auth, booksCtrl.deleteBook);
router.delete('/:id', booksCtrl.deleteBook);
// router.post("/:id/rating", auth, booksCtrl.createRating);

module.exports = router;