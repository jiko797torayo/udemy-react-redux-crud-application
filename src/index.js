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

// デバッグがしやすくなるライブラリ
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'

import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

// デバッグがしやすくするためのコード
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

// Reactのstoreのバケツリレーをなくすためのコード
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
