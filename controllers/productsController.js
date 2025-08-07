const db = require('../db/queries.js');

async function displayProducts(req, res) {
	const products = await db.display('products');
	res.render('category', { title: 'Products', type: 'products', products });
}

module.exports = {
	displayProducts,
};
