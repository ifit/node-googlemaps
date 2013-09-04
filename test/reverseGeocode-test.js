var vows = require('vows'),
  assert = require('assert'),
  gm = require('../lib/googlemaps');

vows.describe('reverseGeocode').addBatch({
  'Simple reverse geocode (41.850033 , -87.6500523)': {
    topic: function(){
      gm.reverseGeocode('41.850033,-87.6500523' , this.callback , 'false' , 'en')
    },
    'returns as a valid request': function(err, result){
      if (err) throw err;
      assert.equal(result.status , 'OK');
    },
    // For some reason the location of "Chicago" is constantly changing
    //   according to Google.  I thought that it would be a constant I could
    //   rely on for these tests.  If I have to change it one more time,
    //   I'm going to just comment them all out.
    'returns expected name (Pilsen)': function(err, result){
      var locality = result.results[0].address_components.filter(function(el) {
        return el.types.indexOf('locality') !== -1;
      })[0];
      assert.equal(locality.long_name , 'Chicago')
    }
  }
}).export(module);

/* Reverse geocode query results
{
   "status":"OK",
   "results":[
      {
         "types":[
            "postal_code"
         ],
         "formatted_address":"Chicago, IL 60664, USA",
         "address_components":[
            {
               "long_name":"60664",
               "short_name":"60664",
               "types":[
                  "postal_code"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.85,
               "lng":-87.65
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.8468524,
                  "lng":-87.6531476
               },
               "northeast":{
                  "lat":41.8531476,
                  "lng":-87.6468524
               }
            }
         }
      },
      {
         "types":[
            "postal_code"
         ],
         "formatted_address":"Chicago, IL 60695, USA",
         "address_components":[
            {
               "long_name":"60695",
               "short_name":"60695",
               "types":[
                  "postal_code"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.85,
               "lng":-87.65
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.8468524,
                  "lng":-87.6531476
               },
               "northeast":{
                  "lat":41.8531476,
                  "lng":-87.6468524
               }
            }
         }
      },
      {
         "types":[
            "postal_code"
         ],
         "formatted_address":"Chicago, IL 60688, USA",
         "address_components":[
            {
               "long_name":"60688",
               "short_name":"60688",
               "types":[
                  "postal_code"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.85,
               "lng":-87.65
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.8468524,
                  "lng":-87.6531476
               },
               "northeast":{
                  "lat":41.8531476,
                  "lng":-87.6468524
               }
            }
         }
      },
      {
         "types":[
            "postal_code"
         ],
         "formatted_address":"Chicago, IL 60686, USA",
         "address_components":[
            {
               "long_name":"60686",
               "short_name":"60686",
               "types":[
                  "postal_code"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.85,
               "lng":-87.65
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.8468524,
                  "lng":-87.6531476
               },
               "northeast":{
                  "lat":41.8531476,
                  "lng":-87.6468524
               }
            }
         }
      },
      {
         "types":[
            "postal_code"
         ],
         "formatted_address":"Chicago, IL 60696, USA",
         "address_components":[
            {
               "long_name":"60696",
               "short_name":"60696",
               "types":[
                  "postal_code"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.85,
               "lng":-87.65
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.8468524,
                  "lng":-87.6531476
               },
               "northeast":{
                  "lat":41.8531476,
                  "lng":-87.6468524
               }
            }
         }
      },
      {
         "types":[
            "postal_code"
         ],
         "formatted_address":"Chicago, IL 60290, USA",
         "address_components":[
            {
               "long_name":"60290",
               "short_name":"60290",
               "types":[
                  "postal_code"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.85,
               "lng":-87.65
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.8468524,
                  "lng":-87.6531476
               },
               "northeast":{
                  "lat":41.8531476,
                  "lng":-87.6468524
               }
            }
         }
      },
      {
         "types":[
            "street_address"
         ],
         "formatted_address":"2398 S Morgan St, Chicago, IL 60608, USA",
         "address_components":[
            {
               "long_name":"2398",
               "short_name":"2398",
               "types":[
                  "street_number"
               ]
            },
            {
               "long_name":"S Morgan St",
               "short_name":"S Morgan St",
               "types":[
                  "route"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            },
            {
               "long_name":"60608",
               "short_name":"60608",
               "types":[
                  "postal_code"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.8507318,
               "lng":-87.6512722
            },
            "location_type":"RANGE_INTERPOLATED",
            "viewport":{
               "southwest":{
                  "lat":41.8485102,
                  "lng":-87.6544809
               },
               "northeast":{
                  "lat":41.8548054,
                  "lng":-87.6481856
               }
            },
            "bounds":{
               "southwest":{
                  "lat":41.8507321,
                  "lng":-87.6514084
               },
               "northeast":{
                  "lat":41.8525835,
                  "lng":-87.6512581
               }
            }
         }
      },
      {
         "types":[
            "neighborhood",
            "political"
         ],
         "formatted_address":"Pilsen, Chicago, IL, USA",
         "address_components":[
            {
               "long_name":"Pilsen",
               "short_name":"Pilsen",
               "types":[
                  "neighborhood",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.8541996,
               "lng":-87.6656086
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.834724,
                  "lng":-87.6882622
               },
               "northeast":{
                  "lat":41.861129,
                  "lng":-87.6344429
               }
            },
            "bounds":{
               "southwest":{
                  "lat":41.834724,
                  "lng":-87.6882622
               },
               "northeast":{
                  "lat":41.861129,
                  "lng":-87.6344429
               }
            }
         }
      },
      {
         "types":[
            "postal_code"
         ],
         "formatted_address":"Chicago, IL 60608, USA",
         "address_components":[
            {
               "long_name":"60608",
               "short_name":"60608",
               "types":[
                  "postal_code"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.8464166,
               "lng":-87.6679765
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.830238,
                  "lng":-87.703045
               },
               "northeast":{
                  "lat":41.8696659,
                  "lng":-87.6415179
               }
            },
            "bounds":{
               "southwest":{
                  "lat":41.830238,
                  "lng":-87.703045
               },
               "northeast":{
                  "lat":41.8696659,
                  "lng":-87.6415179
               }
            }
         }
      },
      {
         "types":[
            "administrative_area_level_3",
            "political"
         ],
         "formatted_address":"Chicago, IL, USA",
         "address_components":[
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "administrative_area_level_3",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.7766541,
               "lng":-87.658113
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.644335,
                  "lng":-87.9402669
               },
               "northeast":{
                  "lat":42.023131,
                  "lng":-87.5236609
               }
            },
            "bounds":{
               "southwest":{
                  "lat":41.644335,
                  "lng":-87.9402669
               },
               "northeast":{
                  "lat":42.023131,
                  "lng":-87.5236609
               }
            }
         }
      },
      {
         "types":[
            "locality",
            "political"
         ],
         "formatted_address":"Chicago, IL, USA",
         "address_components":[
            {
               "long_name":"Chicago",
               "short_name":"Chicago",
               "types":[
                  "locality",
                  "political"
               ]
            },
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.850033,
               "lng":-87.6500523
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.644335,
                  "lng":-87.9402669
               },
               "northeast":{
                  "lat":42.023131,
                  "lng":-87.5236609
               }
            },
            "bounds":{
               "southwest":{
                  "lat":41.644335,
                  "lng":-87.9402669
               },
               "northeast":{
                  "lat":42.023131,
                  "lng":-87.5236609
               }
            }
         }
      },
      {
         "types":[
            "administrative_area_level_2",
            "political"
         ],
         "formatted_address":"Cook, Illinois, USA",
         "address_components":[
            {
               "long_name":"Cook",
               "short_name":"Cook",
               "types":[
                  "administrative_area_level_2",
                  "political"
               ]
            },
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":41.7376587,
               "lng":-87.697554
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":41.4695339,
                  "lng":-88.2634779
               },
               "northeast":{
                  "lat":42.1543239,
                  "lng":-87.1111619
               }
            },
            "bounds":{
               "southwest":{
                  "lat":41.4695339,
                  "lng":-88.2634779
               },
               "northeast":{
                  "lat":42.1543239,
                  "lng":-87.1111619
               }
            }
         }
      },
      {
         "types":[
            "administrative_area_level_1",
            "political"
         ],
         "formatted_address":"Illinois, USA",
         "address_components":[
            {
               "long_name":"Illinois",
               "short_name":"IL",
               "types":[
                  "administrative_area_level_1",
                  "political"
               ]
            },
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":40.6331249,
               "lng":-89.3985283
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":36.970298,
                  "lng":-91.5130789
               },
               "northeast":{
                  "lat":42.5083379,
                  "lng":-87.0199349
               }
            },
            "bounds":{
               "southwest":{
                  "lat":36.970298,
                  "lng":-91.5130789
               },
               "northeast":{
                  "lat":42.5083379,
                  "lng":-87.0199349
               }
            }
         }
      },
      {
         "types":[
            "country",
            "political"
         ],
         "formatted_address":"United States",
         "address_components":[
            {
               "long_name":"United States",
               "short_name":"US",
               "types":[
                  "country",
                  "political"
               ]
            }
         ],
         "geometry":{
            "location":{
               "lat":37.09024,
               "lng":-95.712891
            },
            "location_type":"APPROXIMATE",
            "viewport":{
               "southwest":{
                  "lat":18.7763,
                  "lng":170.5957
               },
               "northeast":{
                  "lat":71.5388,
                  "lng":-66.8850749
               }
            },
            "bounds":{
               "southwest":{
                  "lat":18.7763,
                  "lng":170.5957
               },
               "northeast":{
                  "lat":71.5388,
                  "lng":-66.8850749
               }
            }
         }
      }
   ]
}
*/

// vim: set expandtab sw=2:
