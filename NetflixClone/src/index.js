import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const persistedState = localStorage.getItem("reduxState") 
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

const store = createStore(RootReducer, persistedState, composeWithDevTools());

store.subscribe(()=> {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


