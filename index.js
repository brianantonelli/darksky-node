var DarkSky = require('./lib/darksky-api');

var ds = new DarkSky('');
ds.forecast(33.9, -84.3, {}, function(err, forecast){
    console.log(err, forecast);
})