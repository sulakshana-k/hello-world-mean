
var express = require('express')
var router  = express.Router()

var ctrlLocations = require('../controllers/locations')
var ctrlReviews   = require('../controllers/reviews')


// app_api/controllers/locations.js
router.post('/locations', ctrlLocations.locationsCreate);
router.get ('/locations', ctrlLocations.locationsListByDistance)
router.get ('/locations/:locationid', ctrlLocations.locationsReadOne)
router.put ('/locations/:locationid', ctrlLocations.locationsUpateOne)
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne)


// 'reviews' is a sub-document inside 'locations'
// app_api/controllers/reviews.js
router.get ( '/locations/:locationid/reviews', ctrlReviews.reviewsReadOne)
router.post( '/locations/:locationid/reviews', ctrlReviews.reviewsCreate)
router.put( '/locations/:locationid/reviews:reviewid', ctrlReviews.reviewsUpdateOne)
router.delete( '/locations/:locationid/reviews:reviewid', ctrlReviews.reviewsDeleteOne)

module.exports = router

