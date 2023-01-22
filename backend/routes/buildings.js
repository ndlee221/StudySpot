const express = require("express")

const buildingRoutes = express.Router()

const dbo = require("../connection")

buildingRoutes.route("/buildings").get(async function (req, res) {
    const dbConnect = dbo.getDb();
  
    dbConnect
      .collection("building")
      .findOne({name: req.params.name})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
       } else {
          res.json(result);
        }
      });
  });