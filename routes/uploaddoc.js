var express = require('express');
var router = express.Router();
const {MongoClient, Db} = require('mongodb');


router.get('/',(req, res, next) => {
    var url = "mongodb://localhost:27017";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("kycaml");
        var datasetObj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("datasets").insertOne(datasetObj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
    });
    res.json({"success":"true"})

})

module.exports = router;
