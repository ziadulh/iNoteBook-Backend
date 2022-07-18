import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <>
      <AddNote/>
      <div className=' my-3'>
          <h3>Your Notes</h3>
          {notes.map((note) => {
            return <NoteItem key={note._id}  note={note}></NoteItem>
        })}
      </div>
    </>
  )
}

export default Notes