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

module.exports = {
	displaySales,
	addSales,
};
