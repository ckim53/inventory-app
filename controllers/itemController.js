const db = require('../db/queries.js');

async function getItem(req, res) {
	const { title, type, id } = req.query;
	const data = await db.getItemFromTable(id, type);
	const product_name =
		type == 'restocks' ? await db.getProductById(data.product_id) : null;
	res.render('item', { title: title.slice(0, -1), type, data, product_name });
}

async function showAddForm(req, res) {
	const products = await db.display('products');
	const suppliers = await db.display('suppliers');
	res.render('add', { products, suppliers });
}

async function showEditForm(req, res) {
	const products = await db.display('products');
	const suppliers = await db.display('suppliers');
	const { title, type, id } = req.query;
	const data = await db.getItemFromTable(id, type);
	res.render('edit', { id, title, type, data, products, suppliers });
}

module.exports = {
	getItem,
	showAddForm,
	showEditForm,
};
