const Product = require('./models/product.model');

const loadProductsData = async () => {

  const data = [
    {
      id: '1',
      title: 'Lolita',
      author: 'Bartosz Kosowski',
      technique: 'Screen printing',
      size: '70/50',
      price: 180,
      image: '/posters/bartekKosowski/lolita.jpg',
      tag: 'New'
    },
    {
      id: '2',
      title: 'Change',
      author: 'Patrycja Podkoscielny',
      technique: 'Print',
      size: '70/50',
      price: 150,
      image: '/posters/patrycjaPodkoscielny/change.jpg'
    },
    {
      id: '3',
      title: 'Golden Hand',
      author: 'Wiur',
      technique: 'Screen printing',
      size: '70/50',
      price: 200,
      image: '/posters/wiur/goldenHand.jpg'
    },
    {
      id: '4',
      title: 'Landscape',
      author: 'Matiszu',
      technique: 'Print',
      size: '70/50',
      price: 150,
      image: '/posters/matiszu/mountains.jpg',
      tag: 'New'
    },
    {
      id: '5',
      title: 'Koi Fish',
      author: 'Daga Skwarska',
      technique: 'Print',
      size: '70/50',
      price: 120,
      image: '/posters/dagaSkwarska/koiFish.jpg'
    },
    {
      id: '6',
      title: 'Jaws',
      author: 'Bartosz Kosowski',
      technique: 'Screen printing',
      size: '70/50',
      price: 180,
      image: '/posters/bartekKosowski/jaws.jpg',
      tag: 'New'
    },
    {
      id: '7',
      title: 'Flora',
      author: 'Patrycja Podkoscielny',
      technique: 'Print',
      size: '70/50',
      price: 150,
      image: '/posters/patrycjaPodkoscielny/flora.jpg'
    },
    {
      id: '8',
      title: 'King',
      author: 'Wiur',
      technique: 'Screen printing',
      size: '70/50',
      price: 200,
      image: '/posters/wiur/king.jpg'
    },
    {
      id: '9',
      title: 'Smoke',
      author: 'Matiszu',
      technique: 'Print',
      size: '70/50',
      price: 150,
      image: '/posters/matiszu/smoke.jpg',
      tag: 'New'
    },
    {
      id: '10',
      title: 'Three face',
      author: 'Daga Skwarska',
      technique: 'Print',
      size: '70/50',
      price: 120,
      image: '/posters/dagaSkwarska/3face.jpg'
    },
  ];

  try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log(data);
      console.log('Loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadProductsData;