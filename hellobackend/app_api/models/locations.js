
var mongoose = require('mongoose')


var openingClosingTimeSchema = new mongoose.Schema(
						     {
						          days:    {type: String, required: true},
						          opening: String,
						          closing: String,
						          closed:  {type: String, required: true}
						     }
						)

var reviewSchema = new mongoose.Schema(
					{
					   author: 	String,
					   rating: 	{type: Number, required: true, min: 0, max: 5},
					   reviewText: 	String,
					   createdOn: 	{type: Date, default: Date.now}
					}
  				      )


var locationSchema = new mongoose.Schema(
					   {
						// 'required' keyword is for validation.
						name: 	 	{type: String, required: true},
						address: 	String,

						// 'default' keyword can be with or without quotes.
						// When defining multiple properties for a field, {} are required.
						rating:  	{type: Number, default: 0, min: 0, max: 5},
						facilities: 	[String],

						// Nest 'openingClosingTimeSchema' under 'locationSchema'.
						openingTimes: 	[openingClosingTimeSchema],

						// Nest 'reviewSchema' under 'locationSchema'.
						reviews: 	[reviewSchema]
					   }
					)

// This command will build the schemas into a model.
// ---- mongoose.model('<model_name>', <schema_name>, <'collection_name'>) ----

/* Specifying 'collection_name' is optional.
 * If it is not specified, then model name will be used as Collection name 
 * with the small first alphabet and a 's' in the end.

 * So in this case, <collection_name> will be 'locations'.
 */
mongoose.model('Location', locationSchema)





















