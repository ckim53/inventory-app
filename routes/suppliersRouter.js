const { Router } = require('express');
const controller = require('../controllers/suppliersController');
const suppliersRouter = Router();

suppliersRouter.get('/', controller.displaySuppliers);
suppliersRouter.post('/add', controller.addSupplier);

module.exports = suppliersRouter;
