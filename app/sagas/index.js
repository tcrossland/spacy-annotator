import { detectEntitiesSaga } from './entities'
import { trainModelSaga } from './train'

export default function* sagas() {
  yield [
    trainModelSaga(),
    detectEntitiesSaga()
  ]
}
