import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Layout from './components/layout';
import Home from './components/home'; // 主页
import Work from './components/work'; //悠闲小作
import Experience from './components/experience'; // 经验分享
import Photograph from './components/photograph'; // 摄影


ReactDOM.render(
	<Router history={browserHistory}>
    <Route path="/dist/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/work" component={Work}/>
      <Route path="/experience" component={Experience}/>
      <Route path="/photograph" component={Photograph}/>
      <Route path="/detail/:filename" component={Detail}/>
    </Route>
  </Router>,
	document.getElementById('root')
);
