const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
	id: { type: 'String', required: true },
	author: { type: 'String', required: true },
	title: { type: 'String', required: true },
	price: { type: 'Number', required: true },
	size: { type: 'String', required: true },
	image: { type: 'String', required: true },
	counter: { type: 'Number', required: true }
});

module.exports = mongoose.model('Cart', Cart);