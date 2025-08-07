const db = require('../db/queries.js');

async function displayRestocks(req, res) {
	const restocks = await db.display('restocks');
	res.render('category', { title: 'Restocks', type: 'restocks', restocks });
}

module.exports = {
	displayRestocks,
};
