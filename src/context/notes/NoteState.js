import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    
    // eslint-disable-next-line
    const notesInitial = [
        {
            "_id": "62b683cccc9f6acf2cf07db7",
            "user": "62ac3427e20ca24bbec92ea9",
            "name": "Updated Name 1",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, officiis? Mollitia aliquid aut delectus expedita laboriosam minus consequatur? Rem neque cum ipsum eligendi quam incidunt, consectetur, esse veniam numquam ab et facere dolor suscipit eaque nesciunt obcaecati? Laboriosam quae totam repudiandae ducimus iste dolorem aliquid veniam vitae quis. Blanditiis ratione impedit porro id vitae? Molestias accusamus minus laboriosam hic suscipit deserunt incidunt ullam rerum voluptatibus necessitatibus beatae nihil eveniet placeat natus magni, vel tenetur dolores praesentium quod! Odit, nihil fugiat!",
            "tag": "INOTEBOOK",
            "date": "2022-06-25T03:41:00.241Z",
            "__v": 0
          },
          {
            "_id": "62b68477cc9f6acf2cf07dbb",
            "user": "62ac3427e20ca24bbec92ea9",
            "name": "Lorem, ipsum 10",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iure sunt rerum explicabo, doloremque beatae aut nobis pariatur voluptatum at distinctio hic commodi maxime quos ab odio soluta eligendi obcaecati deserunt ipsam ullam? Quam ea corporis modi quia maiores at voluptates rerum eligendi amet! Fugit eligendi vel dignissimos dolorum numquam aut voluptate blanditiis enim voluptatum mollitia neque ipsam asperiores deserunt, cum modi amet non soluta libero ipsa pariatur nihil optio? Id repudiandae veritatis esse alias! Inventore sint quaerat accusamus optio.",
            "tag": "test tag",
            "date": "2022-06-25T03:43:51.438Z",
            "__v": 0
          }
    ]
    const [notes, setNotes] = useState(notesInitial);

    // Add Note
    const addNewNote = (name, description, tag) => {
        const note = {
            "_id": "62b683cccc9f6acf2cf07db3",
            "user": "62ac3427e20ca24bbec92ea9",
            "name": name,
            "description": description,
            "tag": tag,
            "date": "2022-06-25T03:41:00.241Z",
            "__v": 0
        }

        setNotes(notes.concat(note));
    }
    return (
        <NoteContext.Provider value={{notes, setNotes, addNewNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState