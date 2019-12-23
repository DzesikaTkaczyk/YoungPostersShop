const Cart = require('../models/cart.model');

// add new product to cart
exports.addToCart = async function (req, res) {

  try {
    const { id, title, author, price, size, image, counter } = req.body;

    let newCart = new Cart();
    newCart.id = id;
    newCart.title = title;
    newCart.author = author;
    newCart.price = price;
    newCart.size = size;
    newCart.image = image;
    newCart.counter = counter + 1;

    cartSaved = await newCart.save();
    res.status(200).json(cartSaved);

  } catch(err) {
    res.status(500).json(err);
  }

}

exports.getCart = async (req, res) => {
    try {
        res.status(200).json(await Cart.find());
    } catch(err) {
        res.status(500).json(err);
    }
};