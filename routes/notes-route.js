const express = require('express')
const fs = require('fs');
const db = require("../db/db.json");
const router = express.Router();

router.get("/notes", (req, res) => {
    res.send(db);
})

module.exports = router;