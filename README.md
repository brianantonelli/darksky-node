# darksky-node
NodeJS API client for Dark Sky API.

# Install

```
$ npm install darksky --save
```

# Configuration

You'll need a developer key for the Dark Sky API which can you can create [here](https://darksky.net/dev/register).

# Usage

Create an instance of the Dark Sky API Client:

```
var DarkSky = require('darksky');

var darkSkyClient = new DarkSky('myApiKey');
```

## Options

All methods take the same options object:

* exclude: array containing any of: currently, minutely, hourly, daily, alerts, flags.
* extend: pass hourly for hour-by-hour data for the next 168 hours, instead of the next 48.
* lang: en or any other i18n
* units: us, si, ca, uk2, auto

## Methods

Once you have an instance of the API you can call any of the available methods

### Forecast

A Forecast Request returns the current conditions, a minute-by-minute forecast for the next hour, an hour-by-hour forecast for the next 48 hours, and a day-by-day forecast for the next week.

```
darkSkyClient.forecast(latitude, longitude, options, function(err, forecast){
    if(err) console.error(err);
    else console.dir(forecast);
});
```

### Time-Machine

A Time Machine Request returns the observed (in the past) or forecasted (in the future) hour-by-hour and daily weather conditions for a particular date.

```
darkSkyClient.timemachine(latitude, longitude, new Date(), options, function(err, forecast){
    if(err) console.error(err);
    else console.dir(forecast);
});
```
