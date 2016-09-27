var mongoose = require('mongoose');

var FlapsTable = new mongoose.Schema({
    flaps: String,
    weight: Number,
    altitude: Number,
    temperature: String, //above or below
    vr: Number,
    v2: Number
});

var ClimbTable = new mongoose.Schema({
    weight: Number,
    vfri5: Number,
    vfri10: Number,
    vfri15: Number,
    vclmb: Number
});

var LandingTable = new mongoose.Schema({
    weight: Number,
    vapp: Number,
    vref: Number,
    vga: Number,
});

mongoose.model('Location', locationSchema);