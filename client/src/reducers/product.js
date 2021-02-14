import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from '../actions/types'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { loading: true }
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true, ...state }
    case GET_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload }
    case GET_PRODUCT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
