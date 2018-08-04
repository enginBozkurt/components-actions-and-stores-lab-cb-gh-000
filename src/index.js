import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import bandReducer from './reducers/band_reducer';
import BandInput from './components/band_input_component';

const store = createStore(bandReducer);


const renderApp = () => {
  if(typeof window !== 'undefined'){
    ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'));
  }
}

store.subscribe(renderApp);
store.dispatch({})
