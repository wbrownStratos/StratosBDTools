"use strict";
    var config = require('./config.js');
    var rest = require('./REST.js');


//====== Tools Getters ======//
  rest.getJSON(linkedInOptions,
        function(statusCode, result)
        {
            // do stuff here when ready
            console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
//            res.statusCode = statusCode;
//            res.send(result);
        });
