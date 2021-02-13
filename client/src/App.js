import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Header, Footer } from './components/lib'
import { HomeLayout, ProductLayout } from './layouts/lib'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeLayout} exact />
        <Route path='/product/:id' component={ProductLayout} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
