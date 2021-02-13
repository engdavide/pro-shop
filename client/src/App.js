import React from 'react'
import { Container } from 'react-bootstrap'
import { Header, Footer } from './components/lib'
import HomeLayout from './layouts/HomeLayout'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeLayout />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
