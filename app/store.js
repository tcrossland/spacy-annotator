import 'babel-polyfill'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import * as reducers from './reducers'
import sagas from './sagas'
import { trainModelSaga } from './sagas/train'

const routingMiddleware = routerMiddleware(browserHistory)
const annotationApp = combineReducers(
  Object.assign(
    {},
    reducers,
    { routing: routerReducer }
  )
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  annotationApp, composeEnhancers(applyMiddleware(
    routingMiddleware,
    sagaMiddleware
  ))
)

sagaMiddleware.run(sagas)
