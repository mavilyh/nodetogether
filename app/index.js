const express = require('express');
const app = express();

app.get('/', function(request, reponse){
	reponse.send("Hello!");
});

module.exports = app;
