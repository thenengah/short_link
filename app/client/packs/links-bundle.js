import "@babel/polyfill";
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Links from '../bundles/Links/components/Links';
import reducer from '../bundles/Links/reducer'

const App = (props, railsContext) => {
  const store = createStore(reducer,  props)
  return (
    <Provider store={store}>
      <Links />
    </Provider>
  );
};

ReactOnRails.register({ App })
