var mongoose = require('mongoose');
var ClimbTable = mongoose.model('ClimbTable');
var Flaps5Table = mongoose.model('Flaps5Table');
var Flaps10Table = mongoose.model('Flaps10Table');
var Flaps15Table = mongoose.model('Flaps15Table');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.airplaneReadOne = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.climbTableID) {
    ClimbTable
      .findById(req.params.climbTableID)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "climbTableID not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No climbTableID specified');
    sendJSONresponse(res, 404, {
      "message": "No climbTableID in request"
    });
  }
};

module.exports.airplaneReadTwo = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.flaps5TableID) {
    Flaps5Table
      .findById(req.params.flaps5TableID)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "flaps5TableID not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No flaps5TableID specified');
    sendJSONresponse(res, 404, {
      "message": "No flaps5TableID in request"
    });
  }
};


module.exports.airplaneReadThree = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.flaps10TableID) {
    Flaps10Table
      .findById(req.params.flaps10TableID)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "flaps10TableID not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No flaps10TableID specified');
    sendJSONresponse(res, 404, {
      "message": "No flaps10TableID in request"
    });
  }
};

module.exports.airplaneReadFour = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.flaps15TableID) {
    Flaps15Table
      .findById(req.params.flaps15TableID)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "flaps15TableID not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No flaps15TableID specified');
    sendJSONresponse(res, 404, {
      "message": "No flaps15TableID in request"
    });
  }
};


