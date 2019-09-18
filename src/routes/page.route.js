const express = require('express')
const router = express.Router()

// Require the controllers WHICH WE DID NOT CREATE YET!!
const page_controller = require('../controllers/page.controller');


// a simple test url to check that all of our files are communicating correctly.
// router.get('/test', page_controller.test)

router.get('/:id', page_controller.page_details)

router.post('/create', page_controller.page_create)

router.put('/:id/update', page_controller.page_update)

router.delete('/:id/delete', page_controller.page_delete)


module.exports = router