"use strict";
var express = require('express'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({ extended: false }),
    app = express(),
    rest = require('./REST.js');
    var authCode = "";
    var config = require('./config.js');

//===============ROUTES===============

app.get('/callback', urlencodedParser, function(req, res) {

    console.log("call back accessed!");
    console.log(req.query.code);
    var authCode = req.query.code;
   //set up POST request options

  });
app.get('/BDTools', urlencodedParser, function(req, res) {

    console.log("Tools accessed!");
    console.log(req);
   //set up POST request options
    rest.getJSON(config.linkedInOptions,
        function(statusCode, result)
        {
            // do stuff here when ready
            console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
        });

  });

////===============PORT=================
//
var port = process.env.PORT || 5050; //select your port or let it pull from your .env file
app.listen(port);
console.log("listening on " + port + "!");