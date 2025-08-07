const db = require('../db/queries.js');

async function displaySuppliers(req, res) {
	const suppliers = await db.display('suppliers');
	res.render('category', { title: 'Suppliers', type: 'suppliers', suppliers });
}

async function addSupplier(req, res) {
	const { name, contact } = req.body;
	await db.insertSupplier(name, contact);
	res.redirect('/suppliers');
}

module.exports = {
	displaySuppliers,
	addSupplier,
};
