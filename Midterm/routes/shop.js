const express = require('express');
const router = express.Router();
const phonesController = require("../controllers/phonesController");

router.get( '/showPhones', phonesController.getPhones);
router.get( '/showDetails/:id', phonesController.getPhonesDetails);
router.get( '/home', phonesController.showHome);
router.get( '/', phonesController.showHome);

module.exports = router;