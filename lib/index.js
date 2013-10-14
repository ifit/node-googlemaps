"use strict";

var core        = require('./core')
  , config      = core.config
  , method      = core.method
  , setup       = core.setup
  , required    = core.required
  , optional    = core.optional
  , defaults    = core.defaults
  , location    = core.location
  , makeRequest = core.makeRequest
  ;

exports.config = config;

method(
  exports,
  setup('places'),
  required('location', 'key'),
  optional('types', 'lang', 'name', 'radius'),
  defaults([ 'rankby', 'prominence' ]),
  function(options, cb, next) {
    // radius can be passed in the request only if the rankby parameter is not 'distance'
    // Ranking results by distance will set a fixed search radius of 50km
    if (options._args.rankby === 'distance' && options._args.radius) {
      return next(new Error('googlemaps.places cannot accept radius if rankby==\'distance\''));
    } else if (!options._args.radius) {
      return next(new Error('radius is required for googlemaps.places'));
    }
    next();
  },
  location('/maps/api/place/search/json'),
  makeRequest('json')
);

method(
  exports,
  setup('geocode', {
    documentation: 'http://code.google.com/apis/maps/documentation/geocoding/'
  }),
  required('address'),
  optional('bounds', 'region', 'language'),
  location('/maps/api/geocode/json'),
  makeRequest('json')
);

// simple test
exports.geocode({
  address: '25 center st, logan, ut'
}, function(err, result) {
  if (err) throw err;
  console.log(result);
});

// get some halp
console.log(exports.geocode.help);
console.log(exports.places.help);
