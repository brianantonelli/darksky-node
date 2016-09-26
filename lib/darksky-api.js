var request = require('request'),
    _       = require('underscore'),
    qs      = require('querystring');

function DarkSky(apiKey){
    this.baseUrl = 'https://api.darksky.net/' ;
    this.apiKey  = apiKey;
}

function getOptionsWithDefaults(options){
    return _.extend({
        exclude: [], // currently, minutely, hourly, daily, alerts, flags
        extend:  null,
        lang:   'en',
        units:  'us'
    }, options);
}

DarkSky.prototype.forecast = function(latitude, longitude, options, callback){
    var params = qs.stringify(getOptionsWithDefaults(options)),
        url    = [ this.baseUrl, 'forecast/', this.apiKey, '/', latitude, 
                   ',', longitude, '?' ].join('') + params;

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            callback(null, body);
        }
        else{
            callback(error, null)
        }
    });
};

DarkSky.prototype.timeMachine = function(latitude, longitude, time, options){
    options = getOptionsWithDefaults(options);
    // https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]
    // [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS][timezone]
};

module.exports = DarkSky;