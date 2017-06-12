var express = require('express');
var IOTA = require('iota.lib.js');

var iota = new IOTA({
    'host': 'http://iotatoken.nl',
    'port': 14265
});
var app = express();
app.use('/jslibs', express.static(__dirname + '/jslibs'));
app.use('/jsfiles', express.static(__dirname + '/jsfiles'));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/getNodeInfo', function(req, res) {
    iota.api.getNodeInfo(function(error, data) {
    if (error) {
        console.error(error);
		res.send(error);
    } else {
        console.log(data);
		res.send(data);
    }
	});
});
app.get('/tips', function(req, res) {
   iota.api.getTips(function(error, data) {
    if (error) {
        console.error(error);
		res.send(error);
    } else {
        console.log(data);
		res.send(data);
    }
	});
});
app.get('/getSeedInfo', function(req, res){
	var seed = "KAKWKSKKAKAKWII9999KAK";
	iota.api.getNewAddress(seed, function(err,data){
		console.log(data);
		res.send(data);
	});
})
var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("iota library started at localhost:" + port);
 });