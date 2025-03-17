import React from "react";
import "./Note.css"; // Import the CSS file

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div className="note-content">
        <h1 className="note-title">{props.title}</h1>
        <p className="note-text">{props.content}</p>
      </div>
      <button className="delete-button" onClick={handleClick}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
