const express = require('express');
const router = express.Router();
const indexcontrollers = require("../controllers/indexcontrollers")

/* GET home page. */
router.get('/', indexcontrollers.home );
router.get('/detalle/:id', indexcontrollers.detalle );

module.exports = router;
