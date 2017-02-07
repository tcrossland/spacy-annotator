import React from 'react'
import { connect } from 'react-redux'
import { Editor, Raw } from 'slate'
import { slateToParcy } from '../util/slateToParcy'
import { REQUEST_TRAIN, REQUEST_ENTITIES } from '../constants'

const renderMark = (mark) => (props) => (<mark data-entity={mark}>{props.children}</mark>)

const toParcy = (editor) => {
  return slateToParcy(Raw.serialize(editor).document)
}

const mapStateToProps = ({editor}) => (
  {
    editorState: editor,
    raw: toParcy(editor),
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
    },
    onTrain: (raw) => (e) => {
      dispatch({ type: REQUEST_TRAIN, model: 'es', sentences: raw })
    },
    onDetect: (raw) => (e) => {
      dispatch({ type: REQUEST_ENTITIES, model: 'es', sentences: raw })
    }
  }
)

const TagButton = (k, v) => (
  <button key={k} type="button" className="btn btn-default" onClick={v}>{k.toUpperCase()}</button>
)

const AnnotatorPane = ({editorState, schema, onChange, onMark, onTrain, onDetect, raw}) => (
  <div>
    <h1>Annotator</h1>
    <div className="btn-group btn-group-sm">
      {Object.keys(schema.marks).map(k => TagButton(k, onMark(k)))}
    </div>
    <div className="panel panel-default">
      <div className="panel-body">
        <Editor state={editorState} schema={schema} onChange={onChange}/>
      </div>
    </div>
    <a className="btn btn-primary" onClick={onDetect(raw)}>Detect</a>
    <a className="btn btn-default" onClick={onTrain(raw)}>Train</a>
    <pre className="small">
      <code>
        {JSON.stringify(raw, ' ', 2)}
      </code>
    </pre>
  </div>
)

export const Annotator = connect(mapStateToProps, mapDispatchToProps)(AnnotatorPane)
