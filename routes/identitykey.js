var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

//encryption functions
var crypto = require("crypto");
//var sha256 = require('crypto-js/sha256');
//var hmacSHA512 = require('crypto-js/hmac-sha512');
//var Base64 from 'crypto-js/enc-base64';

const fs = require("fs");

/* GET identity key listing. */
router.post('/', function(req, res, next) {
    //const metadata = {"parabellum_customer_id": "UID of Nenad", "email": "nenad@email.com", "country": "rs", "note":"I am testing adding metadata to ID verification."};
    const metadata = req.body
    const pkey = crypto.createPrivateKey({format: 'pem', key: fs.readFileSync("./routes/passbase-test-private-key.pem")});
    const encrypted_metadata = crypto.privateEncrypt(pkey, Buffer.from(JSON.stringify(metadata))).toString('base64');
    //console.log(encrypted_metadata);
  res.send(encrypted_metadata);
});

module.exports = router;
