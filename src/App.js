import './App.css';
import { useState } from 'react'
import FromNew from './components/FromNew';
import Edit from './components/Edit';

function App() {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [editebleNotes, setEditebleNotes] = useState(null)
    const [editMode, setEditMode] = useState(false)


  return (
    <div className="App"> 
     <FromNew 
     notes = {notes}
     setNotes = {setNotes}
     title = {title}
     setTitle = {setTitle}
     editMode = {editMode}
     setEditMode = {setEditMode}
     editebleNotes = {editebleNotes}
     setEditebleNotes = {setEditebleNotes}
     />
     <Edit
     notes = {notes}
     setNotes = {setNotes}
     title = {title}
     setTitle = {setTitle}
     editMode = {editMode}
     setEditMode = {setEditMode}
     editebleNotes = {editebleNotes}
     setEditebleNotes = {setEditebleNotes}
     />
    </div>
  );
}

export default App;
