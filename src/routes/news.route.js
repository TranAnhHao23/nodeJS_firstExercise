const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewsController');


route.use('/:slug', newsController.show);

// phải để ở dưới cùng, vì cấu trúc đọc từ trên xuống, match path này sẽ đúng sẽ auto ra newsController.index
route.use('/', newsController.index);



module.exports = route;

