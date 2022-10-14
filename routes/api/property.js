const multer = require("multer");
const express = require("express");
const router = express.Router();
const propertyCtrl = require("../../controllers/property.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// GET /api/property/index
router.get("/index", propertyCtrl.index);
// GET /api/property/favorites
router.get("/favorites", propertyCtrl.favoritesIndex);
// POST /api/property/create
router.post("/create", upload.array("image", 5), propertyCtrl.create);
// POST /api/property/delete
router.post("/delete", propertyCtrl.delete);
// POST /api/property/myListing
router.post("/myListing", propertyCtrl.myListing);
// POST /api/property/search
router.post("/search", propertyCtrl.search);
// POST /api/property/liked
router.post("/liked", propertyCtrl.liked);

module.exports = router;
