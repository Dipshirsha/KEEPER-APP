import React, { useState } from "react";


function Createarea(props){
  
    const [note,setNote]=useState({
        title:"",
        content:"",

    })


    function handlechange(event){
const {name,value}=event.target;
    setNote(prevNote =>{
        return {
            ...prevNote,
            [name]:value
        };
    }) ;
    }
    function submitNote(event){
event.preventDefault();
props.onAdd(note);
    }

    return(
        <div>
            <form className="input">
                   <input type="text"placeholder="Title" value={note.title} onChange={handlechange} name="title" id="title" />
                   <br /><br />
                   <textarea name="content" placeholder="content" value={note.content}id="content" onChange={handlechange} cols="40" rows="10"></textarea>
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    )
}

export default Createarea;