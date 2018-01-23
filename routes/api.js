var express = require('express');
var router = express.Router();
var Travel = require('../models/travel');
var Reservation = require('../models/reservation');


/* GET number of travels and reservations */
/*
router.get('/chart', function (req, res, next) {
    Travel.find(function (err, travels) {
        var Travels=travels.length;
        Reservation.find(function (err, reservations) {
            var Reservations=reservations.length;
            var chart= [ { 'Travels': Travels,'Reservations': Reservations } ];
      if (err) { res.send(err); }
      res.json(chart);
     });
    });
  });
*/


  /* GET number of travels and reservations */
router.get('/chart', function (req, res, next) {
    Travel.find(function (err, travels) {
        var chart= [];
        for(i=0;i<travels.length;i++)
        { chart[i]= { 'starting': travels[i].starting, 'arrival': travels[i].arrival, 'price': travels[i].price } ; }          
       if (err) { res.send(err); }
      res.json(chart);
     });
    });

module.exports = router;



