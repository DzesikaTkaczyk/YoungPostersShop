import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getProductsLength = ({ products }) => products.data.length;
export const getRequest = ({ products }) => products.request;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getPages = ({ products }) => Math.ceil(products.amount / products.productsPerPage);
export const getPresentPage = ({ products }) => products.presentPage;

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

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST })
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });

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
	presentPage: 1
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
				data: [...action.payload.products],
      	};
		default:
			return statePart;
	};
};

/* THUNKS */
export const loadProductsRequest = () => {
	return async dispatch => {
		dispatch(startRequest());
		try {
			let res = await axios.get(`${API_URL}`);
			await new Promise((resolve, reject) => setTimeout(resolve, 2000));
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
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
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
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));

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
			dispatch(loadProducts(res.data));
			dispatch(endRequest());
		} catch(e) {
			dispatch(errorRequest(e.message));
		}
	};
};