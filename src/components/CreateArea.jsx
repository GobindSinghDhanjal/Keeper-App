import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Collapse from '@mui/material/Collapse';

function CreateArea(props) {

    const [note, setNote] = useState({
        title:"",
        content:"",
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevValue)=>{
            return {...prevValue,[name]:value};
        });
    }

    function addNote(event){
        props.addNote(note);
        event.preventDefault();
    }

    const [checked, setChecked] = useState(false);
    const [noOfRows, setRows] = useState(1);
    const [titleDisplay, setTitleDisplay] = useState("none");

    function formClick(){
        setChecked(true);
        setRows(3);
        setTitleDisplay("");
    }

    return (
        <div>
     
          <form className="create-note">
            <Collapse in={checked}>
             <input className="note-header"
                    onChange={handleChange} 
                    name="title" 
                    placeholder="Title" 
                    value={note.title}
                    style={{display: titleDisplay}} 
                />
            </Collapse>
             
             <hr style={{display: titleDisplay}}/>
             
             <Collapse in={true}>
             <textarea onClick={formClick} 
                    onChange={handleChange} 
                    name="content" 
                    placeholder="Take a note..." 
                    rows={noOfRows} 
                    value={note.content}
                />

               </Collapse>

             <Zoom in={checked}>
             <Fab onClick={addNote}><AddIcon /></Fab>
            </Zoom>

            </form>
        
        </div>
      );
}

export default CreateArea;