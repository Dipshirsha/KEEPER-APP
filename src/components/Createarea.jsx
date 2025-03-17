import React, { useState } from "react";
import "./CreateArea.css"; // Import the CSS file

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({ title: "", content: "" }); // Clear the form after submission
  }

  return (
    <div className="create-area">
      <form className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          name="title"
          id="title"
          className="note-input"
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          id="content"
          onChange={handleChange}
          className="note-textarea"
        />
        <button onClick={submitNote} className="add-button">
          ADD
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
