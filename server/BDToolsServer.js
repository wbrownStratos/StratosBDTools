"use strict";
var express = require('express'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({ extended: false }),
    app = express(),
    rest = require('./REST.js');
    var authCode = "";
    var config = require('./config.js');
    var request = require('request');

//===============ROUTES===============

app.get('/linkedIn', urlencodedParser, function(req, res) {

    console.log("call back accessed!");
    console.log(req.query.code);
    var authCode = req.query.code;

    var options = { method: 'POST',
      url: 'https://www.linkedin.com/uas/oauth2/accessToken',
      headers:
       { 'content-type': 'application/x-www-form-urlencoded',
         },
      form:
       { grant_type: 'authorization_code',
         code: authCode,
         redirect_uri: 'http://localhost:5050/linkedIn',
         client_id: '86ynp1825qyafx',
         client_secret: 'sKQwr1yZ2iGpqzGz' } };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });

  });
app.get('/BDTools', urlencodedParser, function(req, res) {

    console.log("Tools accessed!");
    console.log(req.body);
   //set up POST request options
    rest.getJSON(config.linkedInOptions,
        function(statusCode, result)
        {
            // do stuff here when ready
            console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
        });

  });

app.get('/options', urlencodedParser, function(req, res) {

    console.log("Options accessed!");
    console.log(req.body);
    res.send(config.linkedInOptions);
  });

////===============PORT=================
//
var port = process.env.PORT || 5050; //select your port or let it pull from your .env file
app.listen(port);
console.log("listening on " + port + "!");