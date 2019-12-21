import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getProductsLength = ({ products }) => products.data.length;
export const getRequest = ({ products }) => products.request;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getPages = ({ products }) => Math.ceil(products.amount / products.productsPerPage);
export const getPresentPage = ({ products }) => products.presentPage;

export const getProductsSort = ({ products }) => {
	const sortedProducts = [...products.data].sort((a, b) => {
		if (a[products.key] > b[products.key]) return products.direction === 'asc' ? 1 : -1;
		if (a[products.key] < b[products.key]) return products.direction === 'asc' ? -1 : 1;
        return 0;
	});
	return sortedProducts
};
export const getCounter = ({ products }) => products.amount;
export const getCart = ({ products }) => products.cart;
export const getSumPrice = ({ products }) => products.sumPrice;
export const getDiscountStatus = ({ products }) => products.discountStatus;

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST')
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');

export const LOAD_CART = createActionName('LOAD_CART');
export const SORT_PRODUCTS = createActionName('SORT_PRODUCTS')
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
export const MORE =	createActionName('MORE');
export const LESS = createActionName('LESS');
export const DISCOUNT_CODE = createActionName('DISCOUNT_CODE')
export const SUM_PRICE = createActionName('SUM_PRICE');
 

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });

export const loadCart = payload => ({ payload, type: LOAD_CART });
export const sortProducts = payload => ({ payload, type: SORT_PRODUCTS })
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const more = id => ({ id, type: MORE });
export const less = id => ({ id, type: LESS });
export const addDiscountCode = () => ({ type: DISCOUNT_CODE });
export const sumPrice = () => ({ type: SUM_PRICE });



/* INITIAL STATE */
const initialState = {
	data: [],
	request: {
		pending: false,
		error: null,
		success: null
	},
	singleProduct: {},
	amount: 0,
	productsPerPage: 6, 
	presentPage: 1,
	cart: [],
	sumPrice: 0,
	discount: 1,
	discountStatus: false,
	key: '',
	direction: ''
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
	switch (action.type) {
		case LOAD_PRODUCTS:
			return { ...statePart, data: action.payload };
		case LOAD_SINGLE_PRODUCT:
			return { ...statePart, singleProduct: action.payload };
		case START_REQUEST:
			return { ...statePart, request: { pending: true, error: null, success: null } };
		case ERROR_REQUEST:
			return { ...statePart, request: { pending: false, error: action.error, success: false } };
		case RESET_REQUEST:
			return { ...statePart, request: {pending: false, error: null, success: null }};
		case END_REQUEST:
			return { ...statePart, request: { pending: false, error: null, success: true } };
		case LOAD_PRODUCTS_PAGE:
			return {
				...statePart,
				productsPerPage: action.payload.productsPerPage,
				presentPage: action.payload.presentPage,
				amount: action.payload.amount,
				data: [...action.payload.products], };
		

		case LOAD_CART:
			return {
				...statePart,
				amount: action.payload.amount,
				cart: [...action.payload.cart], };

		case SORT_PRODUCTS:
			return {
				...statePart,
				key: action.payload.key,
				direction: action.payload.direction };

		case ADD_TO_CART:
			const selectedProduct = action.payload;
			selectedProduct.counter += 1;

			return { ...statePart, cart: statePart.cart.concat(selectedProduct)};
		case MORE:
			const wantMore = statePart.cart.find(product => product.id === action.id);
			wantMore.counter += 1;
			const productsCounterPlus = statePart.cart.map(product => product.id === action.id ? wantMore : product);
			return { ...statePart, cart: productsCounterPlus };
		case LESS:
			const wantLess = statePart.cart.find(product => product.id === action.id);
			wantLess.counter -= 1;
			const productsCounterMinus = statePart.cart.map(product => product.id === action.id ? wantLess : product);
			return { ...statePart, cart: productsCounterMinus };
		case DISCOUNT_CODE:
			return { ...statePart, discount: 0.75, discountStatus: true }
		case SUM_PRICE:
			let pricesSum
			if(statePart.cart.length !== 0) {
				let allProducts = statePart.cart.map(poster => poster.product ? poster.price * poster.counter : poster.price * poster.counter)
				allProducts = allProducts.reduce((firstPrice, newPrice) => firstPrice + newPrice);
				const withDiscount = statePart.discountStatus ? allProducts * statePart.discount : allProducts;
				pricesSum = withDiscount
			} else {
				pricesSum = 0;
			}
			return { ...statePart, sumPrice: pricesSum };
		case REMOVE_PRODUCT:
			const remove = statePart.cart.filter(product => product.id !== action.payload);
			return { ...statePart, cart: remove }
		default:
			return statePart;
	};
};

/* THUNKS */
export const loadProductsRequest = () => {
	return async dispatch => {
		dispatch(startRequest());
		try {
			let res = await axios.get(`${API_URL}/products`);
			dispatch(loadProducts(res.data));
			dispatch(endRequest());
		} catch(e) {
			dispatch(errorRequest(e.message));
		}
	};
};

export const loadSingleProductRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/${id}`);
      dispatch(loadSingleProduct(res.data));
      dispatch(endRequest());
    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadProductsByPageRequest = (page, productsPerPage) => {
  return async dispatch => {
    dispatch(startRequest());
    
    try {
      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      let res = await axios.get(`${API_URL}/range/${startAt}/${limit}`);

      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page,
      };

      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};


export const loadCartRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    
    try {
      let res = await axios.get(`${API_URL}/cart`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));

      console.log('gora')
      console.log(res)

      dispatch(loadCart(res.cart));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};