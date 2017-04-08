// config.js
// This file contains private configuration details.
// Do not add it to your Git repository.

// ===== Tools API options ====//
  var linkedInClientID = "86ynp1825qyafx",
  linkedInResponseType = "code",
  linkedInRedirectURI = "http://localhost:5050/callback",
  mongodbPort = "27017",
  linkedInClientSecret = "sKQwr1yZ2iGpqzGz";

var linkedInOptions = {
    host: 'www.linkedin.com',
    port: 443,
    path: '/oauth/v2/authorization' + "?" + linkedInRedirectURI + "&" + linkedInClientID + "&" + linkedInRedirectURI,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
module.exports = {

  'linkedInOptions':linkedInOptions
};

