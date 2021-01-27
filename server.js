const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

//============MIDDLEWARE
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));

//===========MONGOOSE DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true , useFindAndModify: false , useCreateIndex: true , useUnifiedTopology: true });
let db = mongoose.connection;

//======CHECK FOR MONGO CONNECTION
db.once('open', function(){
    console.log('Connected to MongoDB')
})
//=====CHECK DB ERRORS
db.on('error', function(err){
    console.log(err)
})

//============API-ROUTES
require("./routes/api-routes.js")(app)

//===========HTML-PATHS
const html = path.resolve(__dirname, './public/html')

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