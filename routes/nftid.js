var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* GET identity key listing. */
router.post('/', function(req, res, next) {
    res.send(`Need to figure out what to save to NFT that must responde with the NFT ID from the blockchain network`);
});

module.exports = router;
