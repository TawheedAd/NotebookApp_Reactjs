import { useEffect, useState } from 'react';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [newNote , setNewNote] = useState([]);

  function addNote(note) {
    const updatedNotes = [...newNote, note];
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNewNote(updatedNotes);
  }

  function deleteNote(id) {
    const updatedNotes = newNote.filter((_, index) => index !== id);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNewNote(updatedNotes);
  }

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNewNote(JSON.parse(storedNotes));
    }
  }, []);

  return (
    <>
   <Header/>
      <CreateNote onAdd={addNote} />
      <div className="flex flex-wrap w-full">
      {newNote.map((noteitem, index) => (
        <Note
          key={index}
          id={index}
          title={noteitem.title}
          content={noteitem.content}
          onDelete={deleteNote}
        />
      ))}
      </div>
      <Footer/>
    </>
  );
}

export default App;
