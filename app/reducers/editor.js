import { Raw, Plain, Text, Document, State, Selection } from 'slate'
import { parcyToSlate } from '../util/parcyToSlate'

const initialState = Raw.deserialize({
  "nodes": [
        {
          "data": {},
          "kind": "block",
          "isVoid": false,
          "type": "paragraph",
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "kind": "range",
                  "text": "Banco Bilbao Vizcaya Argentaria",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "org"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " (",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "BBVA",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "org"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ") es una entidad bancaria ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "española",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "norp"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", presidida por ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Francisco González Rodríguez",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "person"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ". Es uno de los mayores bancos de ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "España",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", siendo la primera entidad financiera de ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "México",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", segunda en ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "España",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Turquía",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " y ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Perú",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", tercera en ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Venezuela",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " y cuarta en ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Colombia",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ".",
                  "marks": []
                }
              ]
            }
          ]
        },
        {
          "data": {},
          "kind": "block",
          "isVoid": false,
          "type": "paragraph",
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "kind": "range",
                  "text": "El banco tiene su sede social y fiscal desde ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "1868",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "date"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " en la ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Plaza de San Nicolás",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "loc"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " nº 4, en el ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Casco Viejo",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "loc"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " de la ciudad de ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Bilbao",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " (",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Vizcaya",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "País Vasco",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": "), donde fue fundado como ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Banco de Bilbao",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "org"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " en ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "1857",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "date"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ". La mayor parte de los servicios centrales de la entidad y su sede operativa se concentran principalmente en sus oficinas centrales de ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Madrid",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", situadas en el complejo ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Ciudad BBVA",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "loc"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " de la zona de ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Las Tablas",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ". Su sede de servicios técnicos se encuentra en la bilbaina ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Torre BBVA",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "loc"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " de ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Gran Vía",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "loc"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", nº 1. Su principal edificio fuera de ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "España",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "gpe"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " es la ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Torre BBVA Bancomer",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "loc"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", en el nº 506 del ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Paseo de la Reforma",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "loc"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " de la ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "Ciudad de México",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "loc"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ".",
                  "marks": []
                }
              ]
            }
          ]
        },
        {
          "data": {},
          "kind": "block",
          "isVoid": false,
          "type": "paragraph",
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "kind": "range",
                  "text": "A ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "31 de diciembre de 2015",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "date"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", los activos de ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "BBVA",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "org"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " eran de 750.078 millones de euros, siendo la segunda entidad financiera ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "española",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "norp"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": " por volumen de activos. Esa misma fecha, contaba con 9.145 oficinas, 137.968 empleados y 66 millones de clientes, estando presente en 35 países. A ",
                  "marks": []
                },
                {
                  "kind": "range",
                  "text": "30 de junio de 2015",
                  "marks": [
                    {
                      "data": {},
                      "kind": "mark",
                      "type": "date"
                    }
                  ]
                },
                {
                  "kind": "range",
                  "text": ", era el 37º banco del mundo por volumen de activos. Cotiza en la Bolsa de Madrid (BBVA) y forma parte del IBEX 35 así como del Dow Jones EURO STOXX 50.",
                  "marks": []
                }
              ]
            }
          ]
        }
      ]
}, { terse: true })

const applyTag = (node, tag, idx) => {
  node
    .addMark(tag.start, tag.len, {type: tag.type})
}

const sentenceToNode = ({ text, tags }) => {
  const node = Text.createFromString(text)
  tags.forEach(t => node.addMark(t.start, t.len, {type: t.type}))
  return node
}

export const editor = (state = initialState, action) => {
  switch (action.type) {
    case 'EDITOR_STATE':
      return action.state
    case 'MARK':
      return state.transform().toggleMark(action.mark).apply()
    case 'RECEIVE_ENTITIES':
      const nextState = parcyToSlate(action.paragraphs)
      return Raw.deserialize(nextState, { terse: true })
    default:
      return state
  }
}
