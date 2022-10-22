require('dotenv').config();
let express = require('express');
const req = require('express/lib/request');
let app = express();

console.log("Hello World");
app.use('/public', express.static(__dirname + '/public'));

// app.get('/',function(req, res){
//  res.send('Hello Express');
// });

app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/json', function(req,res) {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({'message':'HELLO JSON'});
    } else {
        res.json({'message':'Hello json'});
    }
});

app.get('/now', function(req, res, next) {
    console.log("Handling /now ....");
    req.time = new Date().toString();
    next();
}, function(req,res) {
    res.json({'time':req.time});
});

app.get('/:word/echo', req, res) {
    req.json({'echo':req.params.word});
}
































 module.exports = app;
