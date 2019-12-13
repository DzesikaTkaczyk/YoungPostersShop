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
      image: '../../../public/posters/bartekKosowski/lolita'
    },
    {
      id: '2',
      title: 'Change',
      author: 'Patrycja Podkoscielny',
      technique: 'Print',
      size: '70/50',
      price: 150,
      image: { src: '../../../public/posters/patrycjaPodkoscielny/change'}
    },
    {
      id: '3',
      title: 'Golden Hand',
      author: 'Wiur',
      technique: 'Screen printing',
      size: '70/50',
      price: 200,
      image: { src: '../../../public/posters/wiur/goldenHand'}
    },
    {
      id: '4',
      title: 'Landscape',
      author: 'Matiszu',
      technique: 'Print',
      size: '70/50',
      price: 150,
      image: { src: '../../../public/posters/matiszu/landscape1'}
    },
    {
      id: '5',
      title: 'Koi Fish',
      author: 'Daga Skwarska',
      technique: 'Print',
      size: '70/50',
      price: 120,
      image: { src: '../../../public/posters/dagaSkwarska/koiFish'}
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