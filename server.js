const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3002;

const notes = require("./routes/notes-route");
app.use('/api', notes);

app.use(express.static('public')); //looks for the index.html file or the landing page in the public folder

app.listen(PORT, () => {
    console.log('Listening on PORT 3002');
})