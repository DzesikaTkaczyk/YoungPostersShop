import React from 'react';
import Alert from '../../common/Alert/Alert';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const addProduct = (productId) => {
	if (typeof(Storage) !== "undefined") {

		let yourProducts = localStorage.getObj("productId")
		console.log(yourProducts)
		console.log(localStorage.getObj('productId'))


		localStorage.setItem("productId", productId)
		console.log(productId)

	} else {
    	//na pozniej
		//return <Alert variant='error'>Sorry, your browser does not support Web Storage...</Alert>
	}
}; 

export default addProduct;