const express = require('express')
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3000;


//===========PATHS
const public = path.resolve(__dirname, './public');
const html = path.resolve(__dirname, './public/html')

//============MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))


//============HTML-ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(html, 'index.html'))
})
app.get('/stats', (req, res) => {
    res.sendFile(path.join(html, 'stats.html'))
})
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(html, 'exercise.html'))
})


//============APP LISTENING
app.listen(PORT, () => console.log("LISTENING ON " + PORT))