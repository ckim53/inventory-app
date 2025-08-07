const { Router } = require('express');
const controller = require('../controllers/productsController');
const productsRouter = Router();

productsRouter.get('/', controller.displayProducts);

module.exports = productsRouter;
