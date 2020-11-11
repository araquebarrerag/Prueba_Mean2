var express = require("express");
var router = express.Router();
var Pais = require("../models/dataSchema");

router.post("/create", (req, res, next) => {
  var nuevoPais = new Pais({
    nombre: req.body.nombre,
    capital: req.body.capital,
  });
  nuevoPais.save((err, pais) => {
    if (err) res.status(500).json({ errmsg: err });
    res.status(200).json({ msg: pais });
  });
});

router.get("/read", (req, res, next) => {
  Pais.find({}, (err, paises) => {
    if (err) res.status(500).json({ errmsg: err });
    res.status(200).json({ msg: paises });
  });
});

router.put("/update", (req, res, next) => {
  Pais.findById(req.body._id, (err, pais) => {
    if (err) res.status(500).json({ errmsg: err });
    pais.nombre = req.body.nombre;
    pais.capital = req.body.capital;
    pais.save((err, pais) => {
      if (err) res.status(500).json({ errmsg: err });
      res.status(200).json({ msg: pais });
    });
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Pais.findOneAndRemove({ _id: req.params.id }, (err, pais) => {
    if (err) res.status(500).json({ errmsg: err });
    res.status(200).json({ msg: pais });
  });
});

module.exports = router;
