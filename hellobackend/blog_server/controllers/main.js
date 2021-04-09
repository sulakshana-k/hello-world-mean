
// GET index.html

module.exports.index = function( request, response )
		       {
			   // 'index' refers to index.html
			   response.render( 'index', {title: 'From Controllers/main.js'} )
		       }
