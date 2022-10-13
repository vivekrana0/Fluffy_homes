const multer = require('multer')
const express = require('express');
const router = express.Router();
const propertyCtrl = require('../../controllers/property.js')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})


router.get('/index', propertyCtrl.index)
router.post('/create',upload.array('image', 5), propertyCtrl.create)
router.post('/search', propertyCtrl.search)

module.exports = router
