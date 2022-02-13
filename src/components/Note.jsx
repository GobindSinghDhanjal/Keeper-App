import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {

    function handleDelete(){
        props.deleteNote(props.id);
        // console.log(props);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <hr />
            <p>{props.content}</p>
            <button onClick={handleDelete} type="button"><DeleteIcon /></button>
        </div>
    );
}

export default Note;