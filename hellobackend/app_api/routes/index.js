var express = require('express')
var router  = express.Router()

var ctrlLocations = require('../controllers/locations')
var ctrlReviews   = require('../controllers/reviews')

router.post('/', ctrlLocations.helloCreate);

// app_api/controllers/locations.js
/*router.post('/locations', ctrlLocations.locationsCreate);
router.get ('/locations', ctrlLocations.locationsListByDistance)
router.get ('/locations/:locationId', ctrlLocations.locationsReadOne)
router.put ('/locations/:locationId', ctrlLocations.locationsUpateOne)
router.delete('/locations/:locationId', ctrlLocations.locationsDeleteOne)


// 'reviews' is a sub-document inside 'locations'
// app_api/controllers/reviews.js
router.get ( '/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsReadOne)
router.post( '/locations/:locationId/reviews', ctrlReviews.reviewsCreate)
router.put( '/locations/:locationId/reviews:reviewId', ctrlReviews.reviewsUpdateOne)
router.delete( '/locations/:locationId/reviews:reviewId', ctrlReviews.reviewsDeleteOne)
*/
module.exports = router

