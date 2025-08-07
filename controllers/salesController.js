const db = require('../db/queries.js');

async function displaySales(req, res) {
	const sales = await db.display('sales');
	res.render('category', { title: 'Sales', type: 'sales', sales });
}

module.exports = {
	displaySales,
};
