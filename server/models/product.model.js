const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
	id: { type: 'String', required: true },
	author: { type: 'String', required: true },
	title: { type: 'String', required: true },
    technique: { type: 'String', required: true },
	size: { type: 'String', required: true },
	price: { type: 'Number', required: true },
	image: { type: 'Object', required: true },
});

module.exports = mongoose.model('Product', Product);