const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController');


route.use('/', siteController.home);

route.use('/search', siteController.search);

route.use('/contact', siteController.contact);

module.exports = route;

