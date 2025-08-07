const { Router } = require('express');
const controller = require('../controllers/salesController');
const salesRouter = Router();

salesRouter.get('/', controller.displaySales);

module.exports = salesRouter;
