require('../models/locations')

var mongoose = require('mongoose')

// This application will find model 'Location' if we include the file in which
// this model has been built.
var Loc = mongoose.model('Location')

module.exports.helloCreate = function( request, response )
				{
					console.log("yes, called")
					sendJSONResponse( response, 200, {"status": "helloCreate: success"})
				}


module.exports.locationsCreate = function( request, response )
				{
					sendJSONResponse( response, 200, {"status": "locationsCreate: success"})
				}

module.exports.locationsListByDistance = function( request, response )
					  {
						sendJSONResponse( response, 200, {"status": "locationsListByDistance: success"})
					  }

module.exports.locationsReadOne = function( request, response )
				  {
				    if( request.params && request.params.locationId)
				    {	
				    	Loc.findById( request.params.locationId ).exec( function( error, received_data ) 
					  					        {
											   if( !received_data )
										           { 
											      sendJSONResponse( response, 404, {"message": "locationID not found!"} )
											      return;
											   }
											   else if( error )
											   {
  											      sendJSONResponse( response, 404, error )
											      return;	
											   }
											   else
											   {
											      sendJSONResponse( response, 200, received_data )
										           }
										        }
										      )
										   
				  }
				  else
				  {
				     sendJSONResponse( response, 404, {"message": "parameter not specified!"} )
				     return;
				  }
				}

module.exports.locationsUpateOne = function( request, response )
				    {
					sendJSONResponse( response, 200, {"status": "locationsUpateOne: success"})
				    }

module.exports.locationsDeleteOne = function( request, response )
				     {
					sendJSONResponse( response, 200, {"status": "locationsDeleteOne: success"})
				     }

var sendJSONResponse = function( response, arg_status, content )
				{
					response.status( arg_status)
					response.json( content)
				}
