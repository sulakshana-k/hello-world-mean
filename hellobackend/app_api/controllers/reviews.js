var mongoose = require('mongoose')
var Loc = mongoose.model('Location')

module.exports.reviewsCreate = function( request, response )
				{
					sendJSONResponse( response, 200, {"status" : "reviewsCreate - success"} )
				}


module.exports.reviewsReadOne 
		= function( arg_request, arg_response )
  		  {
		     if( arg_request.params && arg_request.params.locationId && arg_request.params.reviewId )
		     {
			Loc.findById( arg_request.params.locationId )
				.select( 'name, reviews' )
					.exec( function( error, arg_location_data )
					       {
						 var review_l; var our_response_l;	
						 if( !arg_location_data )
						 {
						    sendJSONResponse( arg_response, 404, { "message" : "No data available!"} )
						    return;
						 }
						 else if( error )
						 {
						    sendJSONResponse( arg_response, 404, error )
						    return;
						 }
						      
						 if( arg_location_data.reviews && ( arg_location_data.reviews.length > 0 ) )
						 {
						    review_l = arg_location_data.reviews.id( arg_request.params.reviewId )
						    if( !review_l )
						    {
							sendJSONResponse( arg_response, 404, {'message': 'Review Id not found!'} )
						    }
						    else
						    {
							sendJSONResponse( arg_response, 200, { location: 
													{ 
													   name: location.name, 
													   id: arg_request.params.locationId
													}, review: review_l 
                                                                                             })
						    }
						}
						else
						{
						   sendJSONResponse( arg_response, 404, {"message": "No reviews to show!"})
						}
					       }
					     )
		   }
		}

module.exports.reviewsUpdateOne = function( request, response )
				  {
					sendJSONResponse( response, 200, {"status" : "reviewsUpdateOne - success"} )
				  }


module.exports.reviewsDeleteOne = function( request, response )
				  {
					sendJSONResponse( response, 200, {"status" : "reviewsDeleteOne - success"} )
				  }

var sendJSONResponse = function( response, arg_status, arg_content )
		       {
			  response.status( arg_status )
			  response.json( arg_content )
		       }
