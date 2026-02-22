import React from 'react';
import Header from './assets/component/header';
import Footer from './assets/component/footer';
import Product from './assets/component/Product';
import Login from './assets/pages/login';
import Signup from './assets/pages/signup';

function App() {
  return (
    <>
      <Header />
      <Signup />
      <Login /> 
      <Product />
      <Footer />
    </>
  );
}

export default App;