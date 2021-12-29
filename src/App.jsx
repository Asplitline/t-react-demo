// import logo from './logo.svg';
import React from 'react';

import Product from './components/product/product';

import ShowDialog from './components/showDialog';
import ShowInput from './components/showInput';
import Test from './Test';
import OuterClickExample from './components/OuterClickExample';
import ContextDemo from './examples/context-demo';

import { Inspector } from 'react-dev-inspector';

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

function App() {
  return (
    <InspectorWrapper
      keys={['control', 'shift', 'q']} // default keys
    >
      <div>
        <ShowInput />
        <ShowDialog />
        <Product />
        <Test />
        <OuterClickExample />
        <ContextDemo />
      </div>
    </InspectorWrapper>
  );
}

export default App;
