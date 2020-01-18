const router = require('express').Router()

const Jobs = require('../controllers/jobs')

router.get('/', new Jobs().index)

module.exports =  router