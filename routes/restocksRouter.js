const { Router } = require('express');
const controller = require('../controllers/restocksController');
const restocksRouter = Router();

restocksRouter.get('/', controller.displayRestocks);

module.exports = restocksRouter;
