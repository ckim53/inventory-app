const db = require('../db/queries.js');

async function displayProducts(req, res) {
	const products = await db.display('products');
	res.render('category', { title: 'Products', type: 'products', products });
}

async function addProduct(req, res) {
	const { name, sku, price, quantity, supplier_id } = req.body;
	await db.insertProduct(name, sku, price, quantity, supplier_id);
	res.redirect('/products');
}

async function editProduct(req, res) {
	const { id, title, type, name, sku, price, quantity, supplier_id } = req.body;
	const data = await db.updateProduct(
		id,
		name,
		sku,
		price,
		quantity,
		supplier_id,
	);
	res.render('item', { title, type, data }); 
}

module.exports = {
	displayProducts,
	addProduct,
	editProduct,
};
