// import logo from './logo.svg';
import React from 'react';

import Product from './components/product/product';
import ShowDialog from './components/showDialog';
import ShowInput from './components/showInput';
import Test from './Test';
import OuterClickExample from './components/OuterClickExample';
import ContextDemo from './examples/context-demo';

function App() {
  return (
    <div>
      <ShowInput />
      <ShowDialog />
      <Product />
      <Test />
      <OuterClickExample />
      <ContextDemo />
    </div>
  );
}

export default App;
