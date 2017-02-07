import _ from 'lodash'

const createMark = ({start, end, type}) => ({
  data: {},
  kind: "mark",
  type: _.lowerCase(type)
})

const createRange = ({text, tags}) => t => ({
  kind: 'range',
  text: text.substring(t[0], t[1]),
  marks: _.map(_.filter(tags, { start: t[0], end: t[1] }), createMark)
})

const createBlock = o => {
  var breaks = _.sortBy(_.uniq(_.reduce(o.tags, (a, t) => _.concat(a, t.start, t.end), [0, o.text.length])), _.identity)
  var pairs = _.zip(_.initial(breaks), _.tail(breaks))
  var ranges = _.map(pairs, createRange(o))
  return {
    data: {},
    kind: "block",
    isVoid: false,
    type: "paragraph",
    nodes: [
      {
        kind: "text",
        ranges
      }
    ]
  }
}

export const parcyToSlate = paragraphs => ({ nodes: _.map(paragraphs, createBlock) })
