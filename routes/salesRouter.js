const { Router } = require('express');
const controller = require('../controllers/salesController');
const salesRouter = Router();

salesRouter.get('/', controller.displaySales);
salesRouter.post('/add', controller.addSales);

module.exports = salesRouter;
