import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notesArr, setNotes] = useState([]);

    function addNote(note){
        
        setNotes([...notesArr, note]);
        console.log(notesArr);
    }

    function deleteNote(id){

        setNotes(prevNotes=>{
            return prevNotes.filter((item,index)=>{
                return index!==id;
            });
        });
    }

    return(
        <div>
            <Header />
            <CreateArea addNote={addNote}/>
            
            {notesArr.map((note,index)=>{
                return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
            })}
            
            {/* {notes.map(props=>{return <Note key={props.key} title={props.title} content={props.content} />})} */}
            
            <Footer />
        </div>
    );
}

export default App;