import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote() {
    const context = useContext(noteContext);
    const {addNewNote} = context;
    const [note, setNote] = useState({name: "", description: "", tag:""});
    const addNote = (e) =>{
        setNote({...note, [e.target.name] : e.target.value});
    }
    const handleClick = (e) => {
        e.preventDefault();
        addNewNote(note.name, note.description, note.tag);
    }
    return (
        <>
        <form method="post">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" name="name" onChange={addNote}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={addNote}/>
            </div>
            <div className="form-group">
                <label htmlFor="tag">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" placeholder="Tag" onChange={addNote}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
        </form>
        </>
    )
}

export default AddNote