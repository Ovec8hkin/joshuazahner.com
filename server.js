var express = require('express');
var path = require('path');
var nodeMailer = require('nodemailer');

var app = express();
var port = 3000;

//app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(path.resolve(__dirname, './build', 'index.html')));
});

app.listen(port, function(req, res){
    console.log('Server is running at port: 3000');
    console.log(__dirname)
});