import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

function NoteItem(props) {
    const {note} = props
    const context = useContext(noteContext);
    const {deleteNote} = context
  return (
    <div className='col-md-3 my-3'>
        <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{note.name}</h5>
            <i className="btn btn-danger fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id)}}></i>
            <i className="btn btn-primary fa fa-edit mx-2"></i>
            <i className="btn btn-info fa fa-info mx-2"></i>
            <p className="card-text">{note.description}</p>
        </div>
        </div>
    </div>
  )
}

export default NoteItem