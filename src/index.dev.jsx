import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Layout from './components/layout';
import Home from './components/home'; // 主页
import Work from './components/work'; //悠闲小作
import Experience from './components/experience'; // 经验分享
import Photograph from './components/photograph'; // 摄影
import Detail from './components/detail'; // 详情页


const render = () => {
	ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        <Route path="/dist/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="/work" component={Work}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/photograph" component={Photograph}/>
          <Route path="/detail/:id" component={Detail}/>
        </Route>
      </Router>
    </AppContainer>,
		document.getElementById('root')
	);
};

// initial render
render();

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/layout', () => {
		render()
	});
}