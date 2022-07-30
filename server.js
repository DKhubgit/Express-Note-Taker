const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3002;

const app = express();

const notes = require("./routes/notes-route");
app.use('/api', notes);

app.use(express.static('public')); //looks for the index.html file or the landing page in the public folder

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.listen(PORT, () => {
    console.log('Listening on PORT 3002');
})