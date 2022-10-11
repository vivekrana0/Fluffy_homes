const express = require('express');
const router = express.Router();
const propertyCtrl = require('../../controllers/property')

router.post('/create', propertyCtrl.create)

module.exports = router
