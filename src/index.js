import React from 'react';
import ReactDOM from 'react-dom';

// storeを提供する
import { createStore, applyMiddleware } from 'redux'

// 作成したstoreを全コンポーネントにわたすproviderを提供する
import { Provider } from 'react-redux'

// 非同期処理を可能にするためのライブラリ
// actionの代わりに関数を返すことができる
import thunk from 'redux-thunk'

// リンク用パッケージ
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import reducer from './reducers'

import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

// Reactのstoreのバケツリレーをなくすためのコード
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
