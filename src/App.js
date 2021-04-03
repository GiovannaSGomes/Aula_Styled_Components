import React from 'react';
import Header from './componentes/Header';
import Global from './theme/global';
import Footer from './componentes/Footer';
import Content from './componentes/Content';
function App() {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Content />
      <Footer />
    </React.Fragment>)
}

export default App;
