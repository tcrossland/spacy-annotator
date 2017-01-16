import 'babel-polyfill'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from './reducers'

const routingMiddleware = routerMiddleware(browserHistory)
const annotationApp = combineReducers(
  Object.assign(
    {},
    reducers,
    { routing: routerReducer }
  )
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  annotationApp,
  composeEnhancers(applyMiddleware(routingMiddleware))
)
