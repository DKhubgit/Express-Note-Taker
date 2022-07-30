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

module.exports = router;