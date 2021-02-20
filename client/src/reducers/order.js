import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_GET_ALL_REQUEST,
  ORDER_GET_ALL_SUCCESS,
  ORDER_GET_ALL_FAIL,
} from '../actions/types'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      }
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      }
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const orderIndexReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_GET_ALL_REQUEST:
      return {
        loading: true,
      }
    case ORDER_GET_ALL_SUCCESS:
      return {
        loading: false,
        success: true,
        orders: action.payload,
      }
    case ORDER_GET_ALL_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
