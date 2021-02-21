import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Header, Footer } from './components/lib'
import {
  HomeLayout,
  ProductLayout,
  CartLayout,
  LoginLayout,
  RegisterLayout,
  UserProfileLayout,
  ShippingLayout,
  PaymentLayout,
  PlaceorderLayout,
  OrderIndexLayout,
  OrderDetailsLayout,
} from './layouts/lib'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginLayout} />
          <Route path='/cart/:id?' component={CartLayout} />
          <Route path='/product/:id' component={ProductLayout} />
          <Route path='/shipping' component={ShippingLayout} />
          <Route path='/payment' component={PaymentLayout} />
          <Route path='/placeorder' component={PlaceorderLayout} />
          <Route path='/orders' component={OrderIndexLayout} exact />
          <Route path='/orders/:id' component={OrderDetailsLayout} />
          <Route path='/register' component={RegisterLayout} />
          <Route path='/profile' component={UserProfileLayout} />
          <Route path='/' component={HomeLayout} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
