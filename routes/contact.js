//* Imports
const express = require("express");
const contactController = require("../controllers/contact");

//* Initialaize
const router = express.Router();

//* Routes
router.post("/", contactController);

module.exports = router;
