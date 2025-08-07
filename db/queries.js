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

async function updateProduct(id, name, sku, price, quantity, supplier_id) {
	await pool.query(
		`UPDATE products SET name=$1, sku=$2, price=$3, quantity=$4, supplier_id=$5 WHERE id=$6`,
		[name, sku, price, quantity, supplier_id, id],
	);
	const item = await pool.query(`SELECT * FROM products WHERE id = $1`, [id]);
	return item.rows[0];
}

async function updateSupplier(id, name, contact_info) {
	await pool.query(
		`UPDATE suppliers SET name=$1, contact_info=$2 WHERE id=$3`,
		[name, contact_info, id],
	);
	const item = await pool.query(`SELECT * FROM suppliers WHERE id = $1`, [id]);
	return item.rows[0];
}

async function updateRestock(id, product_id, quantity) {
	await pool.query(
		`UPDATE restocks SET product_id=$1, quantity=$2 WHERE id=$3`,
		[product_id, quantity, id],
	);
	const item = await pool.query(`SELECT * FROM restocks WHERE id = $1`, [id]);
	return item.rows[0];
}

async function updateSale(id, total_amount) {
	await pool.query(`UPDATE sales SET total_amount=$1 WHERE id=$2`, [
		total_amount,
		id,
	]);
	const item = await pool.query(`SELECT * FROM sales WHERE id = $1`, [id]);
	return item.rows[0];
}

module.exports = {
	display,
	getItemFromTable,
	insertProduct,
	insertRestock,
	insertSales,
	insertSupplier,
	updateProduct,
	updateRestock,
	updateSale,
	updateSupplier,
};
