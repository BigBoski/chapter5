var express = require('express');
var router = express.Router();
var ctrlAirplane = require('../controller/airplane');

/* Locations pages */
router.get('/climbTable/:climbTableID', ctrlAirplane.airplaneReadOne);
router.get('/flaps5Table/:flaps5TableID', ctrlAirplane.airplaneReadTwo);
router.get('/flaps10Table/:flaps10TableID', ctrlAirplane.airplaneReadThree);
router.get('/flaps15Table/:flaps15TableID', ctrlAirplane.airplaneReadFour);
router.get('/landingTable/:landingTableID', ctrlAirplane.airplaneReadFive);

module.exports = router;
