import testSaga from 'redux-saga-test-plan'
import { call, put } from 'redux-saga/effects'
import { apiJson } from '../../app/sagas/api'
import { postTrainModel, trainModelSaga } from '../../app/sagas/train'
import {
  RECEIVE_TRAIN,
  REQUEST_TRAIN,
  REQUEST_TRAIN_FAILED
} from '../../app/constants'

describe('training saga', () => {
  const model = 'es'
  const paragraphs = [
    { test: "Hello", tags: [] }
  ]
  const req = { model, paragraphs }
  const opts = {
    method: "POST",
    body: JSON.stringify(req)
  }

  it('should call training endpoint and create a put effect for a successful response', () => {
    const json = paragraphs
    expect(() => {
      testSaga(postTrainModel, req)
      .next()
      .call(apiJson, `http://127.0.0.1:8000/train`, opts)
      .next({ json })
      .put({ type: RECEIVE_TRAIN, paragraphs: json })
      .next()
      .isDone()
    }).not.toThrow()
  })

  it('should call training endpoint and create a put effect for a failure response', () => {
    const error = "Something failed"
    expect(() => {
      testSaga(postTrainModel, req)
      .next()
      .call(apiJson, `http://127.0.0.1:8000/train`, opts)
      .next({ error })
      .put({ type: REQUEST_TRAIN_FAILED, message: error })
      .next()
      .isDone()
    }).not.toThrow()
  })
})
