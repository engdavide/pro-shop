import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'

import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { Message, Loader } from '../components/lib'

export const UserProfileLayout = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null) //not in use

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile
  const loadingUpdate = userUpdateProfile.loading
  const errorUpdate = userUpdateProfile.error

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [history, dispatch, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUserProfile({ id: user._id, name, email, password }))
  }
  return (
    <Row>
      <Col md={3}>
        <h1>User Profile</h1>
        {error || errorUpdate ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          ''
        )}
        {success && <Message variant='success'>User Profile Updated!</Message>}
        {loading || loadingUpdate ? <Loader /> : ''}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Update User Info
          </Button>
        </Form>
      </Col>
      <Col md={6}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}
