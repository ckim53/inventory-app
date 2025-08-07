const db = require('../db/queries.js');

async function displayRestocks(req, res) {
	const restocks = await db.display('restocks');
	res.render('category', { title: 'Restocks', type: 'restocks', restocks });
}

async function addRestock(req, res) {
	const { product_id, quantity } = req.body;
	await db.insertRestock(product_id, quantity);
	res.redirect('/restocks')
}

module.exports = {
	displayRestocks,
	addRestock,
};
