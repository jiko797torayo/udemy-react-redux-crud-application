import React from 'react';
import ReactDOM from 'react-dom';

// storeを提供する
import { createStore } from 'redux'

// 作成したstoreを全コンポーネントにわたすproviderを提供する
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

// Reactのstoreのバケツリレーをなくすためのコード
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
