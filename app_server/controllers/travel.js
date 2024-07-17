// app_server/routes/travel.js
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

module.exports.travelList = function(req, res) {
    res.render('travel', { title: 'Travlr Getaways', trips: trips });
};

var express = require('express');
var router = express.Router();
var controller = require('../controllers/travlr');

router.get('/', controller.travel);

module.exports = router;
