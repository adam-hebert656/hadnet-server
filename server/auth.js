const router = require('express').Router();
const bodyParser = require('body-parser');
const request = require('request');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

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

const createJwt = (profile) => {
  return jwt.sign(profile, 'papawatzkesucks', {
    expiresIn: "6h",
    issuer: 'Hadnet'
  });
}

router.post('/login', bodyParser.json(), (req, res) => {
  console.log('User logged in!');
  console.log('User access token:', req.body);
  let userObj = {};
  validateWithFacebook(req.body.accessToken)
    .then((response) => {
      userObj = {
        email: response.email,
        display_name: response.name,
        id_facebook: response.id
      }
      console.log("New User:", userObj);
      res.send(createJwt(userObj));
    })
    .catch((error) => {
      console.error(error);
    })
})


module.exports = router;