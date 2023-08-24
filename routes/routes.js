const express = require('express');
const router = express.Router();
const multer = require('multer');

const homeController = require('../controller/home_controller');

const upload = multer({ dest: 'public/' });


router.get('/', homeController.home);
router.get('/:id', homeController.view);
router.post('/upload', upload.single('csv'), homeController.upload);
router.get('/delete/:id', homeController.delete);

module.exports = router;