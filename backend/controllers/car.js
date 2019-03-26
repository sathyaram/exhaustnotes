const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
const mongoose = require("mongoose");

// Get all Cars from DB
router.get("/api/cars/:page", (req, res) => {
  Car.find({})
    .sort({ date: -1 })
    .limit(5)
    .skip(5 * req.params.page)
    .then(items => {
      console.log(items);
      res.json(items);
    });
});

module.exports = router;
