var obj_mongoose = require('mongoose')


var URI = 'mongodb://localhost:27017/test';

obj_mongoose.connect( URI, {useNewUrlParser: true} );

obj_mongoose.connection.on('connected', function()
					{
					    console.log('Connected!');
					})

obj_mongoose.connection.on('error', function( argError )
				    {
					console.log('Error: ', argError);
				    })

obj_mongoose.connection.on('disconnected', function()
					   {
					       console.log('disconnected!');
					   })





require('./locations')
