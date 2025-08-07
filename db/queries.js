const pool = require('./pool');

async function display(table) {
	const { rows } = await pool.query(`SELECT * FROM ${table}`);
	return rows;
}

async function insertSupplier(name, contact) {
	await pool.query(
		'INSERT INTO suppliers (name, contact_info) VALUES ($1, $2)',
		[name, contact],
	);
}

async function insertSales(total) {
	await pool.query('INSERT INTO sales (total_amount) VALUES ($1)', [total]);
}

async function insertProduct(name, sku, price, quantity, supplierId) {
	await pool.query(
		'INSERT INTO products (name, sku, price, quantity, supplier_id) VALUES ($1, $2, $3, $4, $5)',
		[name, sku, price, quantity, supplierId],
	);
}

async function insertRestock(productId, quantity, date) {
	await pool.query(
		'INSERT INTO restocks (product_id, quantity, date) VALUES ($1, $2, $3)',
		[productId, quantity, date],
	);
}

async function getItemFromTable(id, table) {
	const item = await pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
	return item.rows[0];
}

module.exports = {
	display,
	getItemFromTable,
	insertProduct,
	insertRestock,
	insertSales,
	insertSupplier,
};
