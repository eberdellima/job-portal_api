const router = require('express').Router()

const Jobs = require('../controllers/jobs')

router.get('/:page', new Jobs().index)

module.exports =  router