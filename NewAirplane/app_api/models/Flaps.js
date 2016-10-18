var mongoose = require('mongoose');

var climbTable = new mongoose.Schema ({
	weight: Number,
	VFRIFlap5: Number,
	VFRIFlap10: Number,
	VFRIFlap15: Number,
	VCLMB: Number
});

var flaps5Table = new mongoose.Schema({
  temperature: String,
              weight:Number,
              altitude:{Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
              Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
              Number:{Vr:Number,V1:Number}}
});

var flaps10Table = new mongoose.Schema({
  temperature: String,
              weight:Number,
              altitude:{Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
              Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
              Number:{Vr:Number,V1:Number}}
});

var flaps15Table = new mongoose.Schema({
  temperature: String,
              weight:Number,
              altitude:{Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
              Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number}, Number:{Vr:Number,V1:Number},
              Number:{Vr:Number,V1:Number}}
});

var landingTable = mongoose.Schema ({
	flap: Number,
	weight: Number,
	Vapp: Number,
	Vref: Number,
	Vga: Number
});

mongoose.model('ClimbTable', climbTable, 'climbTable')

mongoose.model('Flaps5Table', flaps5Table, 'flaps5Table')

mongoose.model('Flaps10Table', flaps10Table, 'flaps10Table')

mongoose.model('Flaps15Table', flaps15Table, 'flaps15Table')

mongoose.model('LandingTable', landingTable, 'landingTable')