import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_GET_ALL_REQUEST,
  ORDER_GET_ALL_FAIL,
  ORDER_GET_ALL_SUCCESS,
  CART_REMOVE_ALL_ITEMS,
} from './types'
import axios from 'axios'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/orders', order, config)

    if (data) {
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: CART_REMOVE_ALL_ITEMS,
      })
    }
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      error: error,
    })
  }
}

export const getAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_GET_ALL_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    console.log('sending axios request')
    const { data } = await axios.get('/api/orders', config)
    console.log(data)
    dispatch({
      type: ORDER_GET_ALL_SUCCESS,
      success: true,
      payload: data,
    })
  } catch (error) {
    console.log(`error in getAllOrders: ${error}`)
    dispatch({
      type: ORDER_GET_ALL_FAIL,
      error: error,
    })
  }
}
