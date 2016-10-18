'db.LandingTable.save(
{
    flaps:"35",
    weight:29000,
    vapp: 0,
    vref: 123,
    vga: 0
})

db.ClimbTable.save({
    weight: 29000,
    vfri5: 146,
    vfri10: 137,
    vfri15: 133,
    vclmb: 158
})

db.FlapsTable.save({
    flaps: "15",
    weight: 29000,
    altitude: 10000,
    temperature: "Above 20",
    vr: 123,
    v2: 120
});'

* type mongod to enter mongo terminal
* mongo inside the new terminal 

## put location data in chapter 6 also review data

* the schema is in the models folder

db.Locations.save({
    name: "Coffee Palace",
    address: "10 Palace st.",
    rating: 5
})

db.Review.save({
    author: "Simon Holmes",
    rating: 5,
    timestamp: "16 July 2013",
    reviewText: "What a great place. I can\'t say enough good things about it."
})


db.locations.save(
{
   name: 'Gamers Choice',
   address: '123 High Street, Reading, RG6 1PS',
   rating: 5,
   facilities: ['Hot drinks','Food', 'Video Games'],
   coords: [-0.9690884, 51.455041],
   openingTimes: [ 
    {
        days: 'Monday - Friday',
        opening: '7:00 am',
        closing: '7:00 pm',
        closed: false
    },{
        days: 'Saturday',
        opening: '8:00 am',
        closing: '5:00 pm',
        closed: false
    },{
        days: 'Sunday',
        closed: true
    }]
})

curl -i -H "Accept: Application/json" https://chapter5-4382-bobonner.c9users.io/api/locations/57f55247402542b50816cd69

curl -i -H "Accept: Application/json" https://chapter5-4382-bobonner.c9users.io/api/locations/57f2ab6a3ff49f6b1878711e
db.locations.find() to find the data 

show collections to show all data folders


hw look at app.js really only need routes

need app.use and below

in models db.js copy all and change to match

in routes only need 3 routes for the 3 tables

use the get a location by id controller out of the controller change it to fit your schema need the get 3 times for
the different schemas

