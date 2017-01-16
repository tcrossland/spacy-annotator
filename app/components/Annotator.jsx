import React from 'react'
import { connect } from 'react-redux'
import { Editor, Raw } from 'slate'

const renderMark = (mark) => (props) => (<mark data-entity={mark}>{props.children}</mark>)

const reduceNode = (node) => {
  return node.ranges.reduce((acc, range) => acc + range.text, "")
}

const toParcy = (doc) => {
  return doc.nodes.reduce((acc, node) => acc.concat(node), [])
}

const mapStateToProps = ({editor}) => (
  {
    editorState: editor,
    raw: Raw.serialize(editor),
    // raw: toParcy(Raw.serialize(editor)),
    schema: {
      marks: {
        org: renderMark('org'),
        person: renderMark('person'),
        norp: renderMark('norp'),
        gpe: renderMark('gpe'),
        loc: renderMark('loc'),
        date: renderMark('date')
      }
    }
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    onChange: (state) => dispatch(
      { type: 'EDITOR_STATE', state: state }
    ),
    onMark: (type) => (e) => {
      // e.preventDefault()
      dispatch({type: 'MARK', mark: type})
    }
  }
)


const AnnotatorPane = ({editorState, schema, onChange, onMark, raw}) => (
  <div>
    <h1>Annotator</h1>
    <div className="btn-group btn-group-sm">
      <button type="button" className="btn btn-default" onClick={onMark('person')}>PERSON</button>
      <button type="button" className="btn btn-default" onClick={onMark('norp')}>NORP</button>
      <button type="button" className="btn btn-default" onClick={onMark('org')}>ORG</button>
      <button type="button" className="btn btn-default" onClick={onMark('gpe')}>GPE</button>
      <button type="button" className="btn btn-default" onClick={onMark('loc')}>LOC</button>
      <button type="button" className="btn btn-default" onClick={onMark('date')}>DATE</button>
    </div>
    <div className="panel panel-default">
      <div className="panel-body">
        <Editor state={editorState} schema={schema} onChange={onChange}/>
      </div>
    </div>
    <pre className="small">
      <code>
        {JSON.stringify(raw, ' ', 2)}
      </code>
    </pre>
  </div>
)

export const Annotator = connect(mapStateToProps, mapDispatchToProps)(AnnotatorPane)
