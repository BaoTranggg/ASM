
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

const router = express.Router();
//var Database = require('./db/database');
var routes = require('./routes/controller');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');

// Website routes
app.use('/', routes);

const conn_str = 'mongodb+srv://Trang:hehehaha@cluster0.mf7tllb.mongodb.net/product'
mongoose.connect(
    conn_str,
    { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    },(err) => {
    if (err) {
    console.log("error in connection");
    } else {
    console.log("mongodb is connected");
    }});

const port = process.env.port || 5000;
app.listen(port);
console.log('Web Server is listening at port ' + port);

module.exports = router;

