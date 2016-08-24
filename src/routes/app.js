var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
	console.dir('hello')
	res.sendFile(path.resolve('./src/views/index.html'));
});


module.exports = router;