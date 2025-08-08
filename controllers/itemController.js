const db = require('../db/queries.js');

async function getItem(req, res) {
	const { title, type, id } = req.query;
	const data = await db.getItemDetails(type, id);
	const singular = title?.endsWith('s') ? title.slice(0, -1) : title;
	res.render('item', { title: singular, type, data });
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
	const data = await db.getItemDetails(type, id);
	res.render('edit', { id, title, type, data, products, suppliers });
}

async function deleteItem(req, res) {
	const { title, type, id } = req.query;
	await db.deleteItemFromTable(type, id);
	const data = await db.display(type);
	res.render('category', { title, type, data });
}

module.exports = {
	deleteItem,
	getItem,
	showAddForm,
	showEditForm,
};
