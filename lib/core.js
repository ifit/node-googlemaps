"use strict";

var qs         = require('querystring')
  , request    = require('request')
  , crypto     = require('crypto')
  , stewardess = require('stewardess')
  , util       = require('util')
  , help       = {}
  , context
  ;

var _config = {
  'stagger-time': 200,
  'encode-polylines': true,
  'secure': true,
  'proxy': null,
  'google-client-id': null,
  'google-private-key': null
};


// ugly on the inside, so it can be pretty on the outside

exports.config      = config;
exports.method      = method;
exports.setup       = setup;
exports.required    = required;
exports.optional    = optional;
exports.defaults    = defaults;
exports.location    = location;
exports.makeRequest = makeRequest;

function method() {
  var exports = arguments[0];

  var stack =
    stewardess()
    .error(function(err, options, cb) {
      cb(err, options._data);
    })
    .done(function(options, cb) {
      cb(null, options._data);
    });

  for (var i = 1; i < arguments.length; ++i) {
    stack.add(arguments[i]);
  }

  exports[context] = stack.bind();
  exports[context].help = help[context].join('\n');
}

function config(key, value) {
  if (typeof key === 'object') {
    var settings = key;
    for (var key in settings) {
      config(key, settings[key]);
    }
  } else if (arguments.length === 1) {
    return _config[key];
  } else {
    if (key === 'google-private-key') {
      if (value) {
        // Google private keys are URL friendly base64, needs to be replaced with base64 valid characters
        value = value.replace(/-/g,'+').replace(/_/g,'/');
        value = new Buffer(value, 'base64');
      } else {
        value = null;
      }
    }
    _config[key] = value;
  }
}

function makeRequest(type) {
  return function(options, cb, next) {
    var path = buildUrl(options._path, options._args);

    if (options.urlOnly) return cb(null, path);

    var requestOptions = {
      uri: path
    }

    if (options.encoding) requestOptions.encoding = encoding;
    if (config('proxy')) requestOptions.proxy = config('proxy');

    request(requestOptions, function (err, res, data) {
      if (err) return next(err);
      options._data = data;
      if (res.statusCode !== 200) {
        return next(new Error("Response status code: " + res.statusCode));
      }
      if (type === 'json') {
        options._data = JSON.parse(data);
      }
      return next();
    });
  }
}

function buildUrl(path, args) {
  var maxlen = 2048;
  if (config('google-client-id') && config('google-private-key')) {
    args.client = config('google-client-id');
    path = path + "?" + qs.stringify(args);

    // Create signer object passing in the key, telling it the key is in base64 format
    var signer = crypto.createHmac('sha1', config('google-private-key'));

    // Get the signature, telling it to return the sig in base64 format
    var signature = signer.update(path).digest('base64');
    signature = signature.replace(/\+/g,'-').replace(/\//g,'_');
    path += "&signature=" + signature;
  } else {
    path = path + "?" + qs.stringify(args);
  }
  if (path.length > maxlen) {
    var msg = "Request too long for google to handle (" + path.length + "/2048 characters).";
    if (options.debug) {
      msg += " " + path;
    }
    throw new Error(msg);
  }
  path = 'maps.googleapis.com' + path;
  path = (config('secure') ? 'https://' : 'http://') + path;
  return path;
}

function setup(name, docs) {
  context = name;
  help[context] = [ 'googlemaps.' + name + ':' ];
  for (var i in docs) {
    helper(i + ': ' + docs[i]);
  }
  return function(options, cb, next) {
    options._name = name;
    options._args = {};
    options._args.sensor = (typeof options.sensor !== 'undefined' ? options.sensor : false);
    next();
  }
}

function helper(str) {
  help[context].push('  ' + str);
}

function location(path) {
  helper('path: ' + path);
  return function(options, cb, next) {
    options._path = path;
    next();
  }
}

function required() {
  var args = arrayify(arguments);
  helper('required: ' + args.join(', '));
  return function(options, cb, next) {
    for (var i = 0; i < args.length; ++i) {
      var key = args[i];
      if (!options[key]) {
        return next(new Error(key + ' is required for googlemaps.' + options._name));
      }
      options._args[key] = options[key];
    }
    next();
  }
}

function optional() {
  var args = arrayify(arguments);
  helper('optional: ' + args.join(', '));
  return function(options, cb, next) {
    for (var i = 0; i < args.length; ++i) {
      var key = args[i];
      if (options[key]) {
        options.a_rgs[key] = options[key];
      }
    }
    next();
  }
}

function defaults() {
  var args = arrayify(arguments);
  helper('defaults: ' + args.map(function(v) {
    return v[0] + ':' + v[1];
  }).join(', '));
  return function(options, cb, next) {
    for (var i = 0; i < args.length; ++i) {
      var key = args[i][0];
      var val = args[i][1];
      if (typeof options[key] === 'undefined') {
        options._args[key] = val;
      }
    }
    next();
  }
}

function arrayify(args) {
  return args.length === 1 ? [args[0]] : Array.apply(null, args);
}
