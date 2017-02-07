import { editor } from '../../app/reducers'
import { slateToParcy } from '../../app/util/slateToParcy'
import { Raw } from 'slate'

const initialState = editor(undefined, {})

describe('the editor\'s initial state', () => {
  it('should contain a document with nodes', () => {
    expect(initialState).toBeTruthy()
    const raw = Raw.serialize(initialState)
    expect(raw).toBeTruthy()
    expect(raw.document).toBeTruthy()
    expect(raw.document.nodes).toBeTruthy()
  })
})

describe('the slate to parcy transformation', () => {
  it('should extract text and tags from the raw slate document', () => {
    const raw = Raw.serialize(initialState)
    expect(raw.document).toBeTruthy()
    const sents = slateToParcy(raw.document)
    expect(sents.length).toEqual(3)
    expect(sents[0].text).toEqual("Banco Bilbao Vizcaya Argentaria (BBVA) es una entidad bancaria española, presidida por Francisco González Rodríguez. Es uno de los mayores bancos de España, siendo la primera entidad financiera de México, segunda en España, Turquía y Perú, tercera en Venezuela y cuarta en Colombia.")
    expect(sents[0].tags.length).toEqual(11)
    expect(sents[1].text).toEqual("El banco tiene su sede social y fiscal desde 1868 en la Plaza de San Nicolás nº 4, en el Casco Viejo de la ciudad de Bilbao (Vizcaya, País Vasco), donde fue fundado como Banco de Bilbao en 1857. La mayor parte de los servicios centrales de la entidad y su sede operativa se concentran principalmente en sus oficinas centrales de Madrid, situadas en el complejo Ciudad BBVA de la zona de Las Tablas. Su sede de servicios técnicos se encuentra en la bilbaina Torre BBVA de Gran Vía, nº 1. Su principal edificio fuera de España es la Torre BBVA Bancomer, en el nº 506 del Paseo de la Reforma de la Ciudad de México.")
    expect(sents[1].tags.length).toEqual(17)
    expect(sents[2].text).toEqual("A 31 de diciembre de 2015, los activos de BBVA eran de 750.078 millones de euros, siendo la segunda entidad financiera española por volumen de activos. Esa misma fecha, contaba con 9.145 oficinas, 137.968 empleados y 66 millones de clientes, estando presente en 35 países. A 30 de junio de 2015, era el 37º banco del mundo por volumen de activos. Cotiza en la Bolsa de Madrid (BBVA) y forma parte del IBEX 35 así como del Dow Jones EURO STOXX 50.")
    expect(sents[2].tags.length).toEqual(4)
  })
})
