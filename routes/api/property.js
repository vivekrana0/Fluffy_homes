const multer = require('multer')
const express = require('express');
const router = express.Router();
const propertyCtrl = require('../../controllers/property.js')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})


router.get('/index', propertyCtrl.index)
router.post('/create',upload.array('image', 5), propertyCtrl.create)
router.post('/delete', propertyCtrl.delete)
router.post('/myListing', propertyCtrl.myListing)
router.post('/search', propertyCtrl.search)
router.post('/liked', propertyCtrl.liked)
router.get('/favorites', propertyCtrl.favoritesIndex)

module.exports = router
