import _ from 'lodash'

const mapTags = (prefix, text) => (mark) => {
  return { start: prefix.length, len: text.length, mark: mark.type.toUpperCase() }
}

const reduceRange = (accumulator, range) => (
  {
    text: accumulator.text + range.text,
    tags: _.concat(accumulator.tags, range.marks.map(mapTags(accumulator.text, range.text)))
  }
)

const mapSubNode = (node) => {
  return node.ranges.reduce(reduceRange, {text: "", tags: []})
}

const mapTopNode = (node) => {
  return _.map(node.nodes, mapSubNode)
}

export const slateToParcy = (rawDoc) => _.flatten(rawDoc.nodes.map(mapTopNode))
