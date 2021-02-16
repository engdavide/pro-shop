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
          <Route path='/cart/:id?' component={CartLayout} />
          <Route path='/register' component={RegisterLayout} />
          <Route path='/' component={HomeLayout} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
