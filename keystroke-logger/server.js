const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const PORT = process.env.PORT || 3000

const app = express()

// middleware to parse incoming requests with json and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware for serving files from local directory
app.use(express.static('public'));


// set request routes to html responses
app.get('/package', (req, res) => {
    sendEmail(req.body);
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))