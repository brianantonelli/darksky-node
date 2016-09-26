var DarkSky = require('./lib/darksky-api');

var ds = new DarkSky('');

ds.forecast(33.9, -84.3, { exclude: [ 'minutely', 'hourly', 'daily', 'alerts', 'flags' ] }, function(err, forecast){
    console.log('forecast', forecast);
})

ds.timemachine(33.9, -84.3, new Date(), {}, function(err, forecast){
    console.log('timemachine', forecast);
})