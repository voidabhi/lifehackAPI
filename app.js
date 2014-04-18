
var express = require('express');
var app = express();

app.get('/',function(req,res){
	// input , validation , processing and output 
	res.json({'msg':'this is a sample test message'});
});

app.listen(process.env.PORT || 3124);