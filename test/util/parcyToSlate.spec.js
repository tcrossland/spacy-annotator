import { parcyToSlate } from '../../app/util/parcyToSlate'

describe('the parcy to slate transformation', () => {
  it('should extract the editor state from the parcy response', () => {
    const response = {
      paragraphs: [{
        tags: [
          { start: 0, end: 20, type: "ORG" },
          { start: 33, end: 37, type: "ORG" },
          { start: 63, end: 71, type: "NORP" },
          { start: 87, end: 115, type: "PERSON" },
          { start: 149, end: 155, type: "GPE" },
          { start: 197, end: 203, type: "GPE" },
          { start: 216, end: 222, type: "GPE" },
          { start: 224, end: 231, type: "GPE" },
          { start: 234, end: 238, type: "GPE" },
          { start: 251, end: 260, type: "GPE" },
          { start: 273, end: 281, type: "GPE" },
        ],
        text: "Banco Bilbao Vizcaya Argentaria (BBVA) es una entidad bancaria española, presidida por Francisco González Rodríguez. Es uno de los mayores bancos de España, siendo la primera entidad financiera de México, segunda en España, Turquía y Perú, tercera en Venezuela y cuarta en Colombia."
      }]
    }
    const state = parcyToSlate(response.paragraphs)
    expect(state).toBeTruthy()
    expect(state.nodes).toBeTruthy()
    expect(state.nodes.length).toEqual(1)
    expect(state.nodes[0]).toBeTruthy()
    expect(state.nodes[0].nodes).toBeTruthy()
    expect(state.nodes[0].nodes.length).toEqual(1)
    expect(state.nodes[0].nodes[0].ranges).toBeTruthy()
    expect(state.nodes[0].nodes[0].ranges.length).toEqual(22)
    expect(state.nodes[0].nodes[0].ranges[4]).toEqual({kind: "range", marks: [{data:{}, kind: "mark", type: "norp"}], text: "española"})
  })
})
