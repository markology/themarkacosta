var express = require('express');
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');
var textbelt = require('./../../public/js/text.js');
  

// create reusable transporter object using the default SMTP transport

// setup e-mail data with unicode symbols

var transporter = nodemailer.createTransport('smtps://markjacobacosta%40gmail.com:kornkid12@smtp.gmail.com');



// send mail with defined transport object



router.post('/contact', handleEmail); // handle the route at yourdomain.com/sayHello

function handleEmail(req, res) {
	var mailOptions = {
		from: req.body.from,
		to: 'markjacobacosta@gmail.com',
		subject: req.body.subject,
		text: req.body.text
	}

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        res.send(error);
	    }
	    res.send({info: info.response})
	});
}


router.post('/text', function(req, res){
	console.log(req.body)
	textbelt('6095131269', "asd", undefined,function(err){
		if(err){
		}
	} )


});


router.get('/', function(req, res) {
	res.sendFile(path.resolve('./src/views/index.html'));
});


module.exports = router;