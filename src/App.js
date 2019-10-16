import React, {Component} from 'react';
import Header from './common/header';
import {GlobalStyle} from './style.js';
import {GlobalFontStyle} from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route,HashRouter} from 'react-router-dom';
import Detail from './pages/detail/loadable';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <GlobalFontStyle/>
        <HashRouter>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/login" component={Login}/>
          <Route path="/write" component={Write}/>
        </HashRouter>

      </Provider>
    )
  };
}

export default App;
