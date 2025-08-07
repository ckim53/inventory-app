const { Router } = require('express');
const controller = require('../controllers/restocksController');
const restocksRouter = Router();

restocksRouter.get('/', controller.displayRestocks);
restocksRouter.post('/add', controller.addRestock);

module.exports = restocksRouter;
