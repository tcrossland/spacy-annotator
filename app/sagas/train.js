import 'babel-polyfill'
import { call, put, takeLatest } from 'redux-saga/effects'
import { apiJson } from './api'
import { RECEIVE_TRAIN, REQUEST_TRAIN, REQUEST_TRAIN_FAILED } from '../constants'

export function* postTrainModel({ model, sentences }) {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ model, sentences })
  }
  const { json, error } = yield call(apiJson, `http://127.0.0.1:8000/train`, opts)
  if (json)
    yield put({ type: RECEIVE_TRAIN, sentences: json })
  else
    yield put({ type: REQUEST_TRAIN_FAILED, message: error || 'Request failed' })
}

export function* trainModelSaga() {
  yield takeLatest(REQUEST_TRAIN, postTrainModel)
}
