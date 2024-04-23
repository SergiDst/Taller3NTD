const express = require("express");
const router = express.Router(); //manejador de rutas de express
const RssFeedSchema = require("../models/RssFeed");
//Nuevo animal
router.post("/feed", (req, res) => {
    const feed = RssFeedSchema(req.body);
    feed
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/feeds", (req, res) => {
    RssFeedSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/feed/:id", (req, res) => {
    RssFeedSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/feed/:id", (req, res) => {
    RssFeedSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/feed/:id", (req, res) => {
    RssFeedSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
