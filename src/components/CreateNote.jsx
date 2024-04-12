import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';

function CreateNote(prop) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote() {
    prop.onAdd(note);
    // Reset form after submitting
    setNote({
      title: "",
      content: ""
    });
  }

  const [expand, setExpand] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md my-3 relative">
      <div className="p-5">
        <input 
          className="mt-2  rounded-md px-4 py-2 w-full focus:outline-none"
          name="title" 
          type="text" 
          placeholder='Title' 
          value={note.title} 
          onChange={handleChange} 
          onClick={() => setExpand(!expand)} // Toggle expand when clicking on title
        />
        <div className={`${expand ? 'opacity-100 max-h-96 transition-all duration-500' : 'opacity-0 max-h-0 overflow-hidden transition-all duration-500'}`}>

          {expand && (
            <>
              <textarea 
                className="mt-2  rounded-md px-4 py-1 w-full focus:outline-none"
                name="content" 
                placeholder='Take a note...' 
                value={note.content} 
                onChange={handleChange} 
              />
              <Fab 
                style={{ backgroundColor: '#EAB308', width: '40px', height: '40px', position: 'absolute', bottom: '2px', right: '10px' }}
                type="button"
                onClick={submitNote}
              >
                <AddCircleIcon className='text-white' /> {/* Set the size and color of the icon */}
              </Fab>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
