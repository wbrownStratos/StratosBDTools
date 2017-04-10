// config.js
// This file contains private configuration details.
// Do not add it to your Git repository.

// ===== Tools API options ====//
  var linkedInClientID = "client_id=86ynp1825qyafx",
  linkedInResponseType = "response_type=code",
  linkedInRedirectURI = "redirect_uri=http://localhost:5050/linkedIn",
  mongodbPort = "27017",
  linkedInClientSecret = "sKQwr1yZ2iGpqzGz";

var linkedInOptions = {
    host: 'www.linkedin.com',
    port: 443,
    path: '/oauth/v2/authorization' + '?' + linkedInResponseType + '&' + linkedInClientID + '&' + linkedInRedirectURI,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
module.exports = {

  'linkedInOptions':linkedInOptions
};

