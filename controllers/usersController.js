const db = require('../db/queries.js');

async function displayMessages(req, res) {
	const messages = await db.getAllMessages();
	res.render('index', { title: 'Mini Messageboard', messages: messages });
}

module.exports = {
	displayMessages,
};
