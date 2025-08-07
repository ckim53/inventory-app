const db = require('../db/queries.js');

async function displaySales(req, res) {
	const sales = await db.display('sales');
	res.render('category', { title: 'Sales', type: 'sales', sales });
}

async function addSales(req, res) {
	const { total } = req.body;
	await db.insertSales(total);
	res.redirect('/sales');
}

async function editSales(req, res) {
	const { id, title, type, total } = req.body;
	const data = await db.updateSale(id, total);
	res.render('item', { title, type, data }); 
}

module.exports = {
	displaySales,
	addSales,
	editSales,
};
