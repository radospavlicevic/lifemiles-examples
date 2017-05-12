import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Examples from 'views/Examples/index';
import NotFound from 'views/NotFound/';

const publicPath = '/';

export const routeCodes = {
  EXAMPLES: publicPath,
  // EXAMPLES: `${ publicPath }examples`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ Examples } />
          <Route path={ routeCodes.EXAMPLES } component={ Examples } />
          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    );
  }
}
