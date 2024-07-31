const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

// Trips routes
router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripCode', ctrlTrips.tripsReadOne);

module.exports = router;
