const db = require('../db/queries.js');

async function displayRestocks(req, res) {
	const data = await db.display('restocks');
	res.render('category', { title: 'Restocks', type: 'restocks', data });
}

async function addRestock(req, res) {
	const { product_id, quantity } = req.body;
	await db.insertRestock(product_id, quantity);
	res.redirect('/restocks');
}

async function editRestock(req, res) {
	const { id, title, type, product_id, quantity } = req.body;
	const data = await db.updateRestock(id, product_id, quantity);
	const product_name = await db.getItemDetails('products', product_id);
	res.render('item', { title, type, data, product_name });
}

module.exports = {
	displayRestocks,
	addRestock,
	editRestock,
};
