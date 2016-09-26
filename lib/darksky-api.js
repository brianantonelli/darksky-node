var request = require('request'),
    _       = require('underscore'),
    qs      = require('querystring'),
    moment  = require('moment');

function DarkSky(apiKey){
    this.baseUrl = 'https://api.darksky.net/';
    this.apiKey  = apiKey;
}

function getParamsWithDefaults(options){
    var opts = _.extend({
        exclude: [], // currently, minutely, hourly, daily, alerts, flags
        extend:  null,
        lang:   'en',
        units:  'us'
    }, options);

    opts.exclude = opts.exclude.join(',');

    return qs.stringify(opts);
}

DarkSky.prototype.forecast = function(latitude, longitude, options, callback){
    var params = getParamsWithDefaults(options),
        url    = [ this.baseUrl, 'forecast/', this.apiKey, '/', latitude,
                   ',', longitude, '?', params ].join('');

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            callback(null, body);
        }
        else{
            callback(error, null)
        }
    });
};

DarkSky.prototype.timemachine = function(latitude, longitude, time, options, callback){
    var params        = getParamsWithDefaults(options),
        timeFormatted = moment(time).unix(); //.format('YYYY-MM-DD[T]HH:mm:SS'),
        url           = [ this.baseUrl, 'forecast/', this.apiKey, '/', latitude,
                   ',', longitude, ',', timeFormatted, '?', params ].join('');

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            callback(null, body);
        }
        else{
            callback(error, null)
        }
    });
};

module.exports = DarkSky;