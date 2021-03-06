const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
	id: { type: 'String', required: true },
	author: { type: 'String', required: true },
	title: { type: 'String', required: true },
    technique: { type: 'String', required: true },
	price: { type: 'Number', required: true },
	size: { type: 'String', required: true },
	image: { type: 'String', required: true },
	carusel: { type: 'Array', required: false },
	tag: { type: 'String', required: false },
	counter: { type: 'Number', required: true }
});

module.exports = mongoose.model('Product', Product);