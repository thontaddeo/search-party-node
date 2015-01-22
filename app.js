var express = require('express');
var myApp = express();
myApp.use(express.static(__dirname + '/app'));
myApp.listen(process.env.PORT || 3000);
