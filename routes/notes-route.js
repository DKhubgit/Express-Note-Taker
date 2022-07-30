const express = require('express')
const fs = require('fs');
const db = require("../db/db.json");
const uniqid = require("uniqid");
const router = express.Router();


router.get("/notes", (req, res) => {
    res.send(db);
})

router.post("/notes", (req, res) => { //req will be an stringified object with "title" and "text"
    req.body.id = uniqid();
    db.push(req.body);
    res.send(db);
})

router.delete("/notes/:id", (req, res) => {
    const targetId = req.params.id;
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === targetId) {
            db.splice(i,1);
        }
    }
    res.end();
})

module.exports = router;