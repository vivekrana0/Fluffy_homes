const multer = require('multer')
const express = require('express');
const router = express.Router();
const propertyCtrl = require('../../controllers/property.js')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})


router.post('/create',upload.single('image'), propertyCtrl.create)

module.exports = router
