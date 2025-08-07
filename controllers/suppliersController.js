const db = require('../db/queries.js');

async function displaySuppliers(req, res) {
	const suppliers = await db.display('suppliers');
	res.render('category', { title: 'Suppliers', type: 'suppliers', suppliers });
}

module.exports = {
	displaySuppliers,
};
