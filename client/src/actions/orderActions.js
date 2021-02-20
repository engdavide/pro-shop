import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_GET_ALL_REQUEST,
  ORDER_GET_ALL_FAIL,
  ORDER_GET_ALL_SUCCESS,
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

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
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

    const { data } = await axios.get('/api/orders', config)

    dispatch({
      type: ORDER_GET_ALL_SUCCESS,
      success: true,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_GET_ALL_FAIL,
      error: error,
    })
  }
}
