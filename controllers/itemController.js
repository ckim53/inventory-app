const db = require('../db/queries.js');

async function getItem(req, res) {
	const { title, type, id } = req.query;
	const data = await db.getItemFromTable(id, type);
	res.render('item', { title: title.slice(0, -1), type, data });
}

module.exports = {
	getItem,
};
