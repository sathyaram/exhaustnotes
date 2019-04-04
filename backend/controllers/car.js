const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
const mongoose = require("mongoose");

// Get all Cars from DB
// router.get('/api/cars', (req, res) => {
//   Car.find({}).then((items) => {
//     // console.log(items)
//     res.json(items)
//   })
// })

router.get("/api/cars/:page", (req, res) => {
  Car.find({})
    .sort({ date: -1 })
    .limit(6)
    .skip(6 * req.params.page)
    .then(items => {
      if (items.length > 0) {
        res.json({ items: items, page: req.params.page + 1 });
      } else {
        res.json({ items: items, page: false });
      }
    });
});

module.exports = router;
