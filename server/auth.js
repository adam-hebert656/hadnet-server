const router = require('express').Router();
const bodyParser = require('body-parser');
const request = require('request');
const _ = require('lodash');

const validateWithFacebook = (accessToken) => {
  return new Promise((resolve, reject) => {
    request({
      url: "https://graph.facebook.com/me?fields=email,name",
      qs: {access_token: accessToken}
    },
    (err, response, body) => {
      if (!err) {
        resolve(JSON.parse(body));
      } else {
        reject(err);
      }
    })
  })
}

const retrieveProfilePic = (accessToken, userId) => {
  return new Promise((resolve, reject) => {
    request({
      url: `http://graph.facebook.com/${userId}/picture`,
      qs: {access_token: accessToken}
    }, (err, response, body) => {
      if (!err) {
        resolve(JSON.parse(body));
      } else {
        reject(err);
      }
    })
  })
}

router.post('/login', bodyParser.json(), (req, res) => {
  console.log('User logged in!');
  console.log('User access token:', req.body);
  const userObj = {};
  validateWithFacebook(req.body.accessToken)
    .then((response) => {
      console.log("Response from Facebook Graph API:", response);
      _.extend(userObj, response);
      return retrieveProfilePic(req.body.accessToken, userObj.id);
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    })
})


module.exports = router;