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

module.exports = {
	displayProducts,
	addProduct,
};
