const express = require('express');
var path = require('path');
const app= express();
const geocode = require('../src/utils/geocode')
const forecast = require('../src/utils/forecast')


const router = express.Router();
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/index/iss', ensureAuthenticated, (req, res) =>       //use router get method
  res.render('iss')
);

router.get('/index/main', ensureAuthenticated, (req, res) =>       //use router get method
  res.render('index')
);

router.get('/index/about', ensureAuthenticated, (req, res) =>
  res.render('about')
);

router.get('/index/map', ensureAuthenticated, (req, res) =>       //use router get method
  res.render('mapapi')
);

router.get('/index/weather',ensureAuthenticated, (req, res) => {
  if (!req.query.address) {
      return res.send({
          error: 'You must provide an address!'
      })
  }

  console.log(req.query.address)

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
      if (error) {
          return res.send({ error })
      }
          res.send({
              latitude,
              longitude
             })
      })
 
});


module.exports = router;