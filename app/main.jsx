import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { routerActions, syncHistoryWithStore } from 'react-router-redux'
import { Annotator } from './components/Annotator'

const history = syncHistoryWithStore(browserHistory, store)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/">
          <IndexRoute component={Annotator}/>
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app')
  )
}

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', render)
} else {
  render()
}
