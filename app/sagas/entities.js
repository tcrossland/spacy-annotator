import 'babel-polyfill'
import { call, put, takeLatest } from 'redux-saga/effects'
import { apiJson } from './api'
import { RECEIVE_ENTITIES, REQUEST_ENTITIES, REQUEST_ENTITIES_FAILED } from '../constants'

export function* postDetectEntities({ model, paragraphs }) {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ model, paragraphs })
  }
  const { json, error } = yield call(apiJson, `http://127.0.0.1:8000/ent`, opts)
  if (json)
    yield put({ type: RECEIVE_ENTITIES, paragraphs: json })
  else
    yield put({ type: REQUEST_ENTITIES_FAILED, message: error || 'Request failed' })
}

export function* detectEntitiesSaga() {
  yield takeLatest(REQUEST_ENTITIES, postDetectEntities)
}
