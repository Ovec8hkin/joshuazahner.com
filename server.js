var express = require('express');
var path = require('path');
var nodeMailer = require('nodemailer')
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

//app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, './build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'joshuazahner@gmail.com',
            pass: 'Sadie97!'
        }
    });
    let mailOptions = {
        from: req.body.email, // sender address
        to: "joshuazahner@gmail.com", // list of receivers
        subject: "Contact", // Subject line
        text: req.body.message, // plain text body
        html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(path.resolve(__dirname, './build', 'index.html')));
});

app.listen(port, function(req, res){
    console.log('Server is running at port: 3000');
    console.log(__dirname)
});