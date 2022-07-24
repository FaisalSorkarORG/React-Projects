import React from 'react'
// import { useState } from 'react'

function FromNew(props) {
    
    const noteCreateHandler = (event) => {
        event.preventDefault()
        if (props.title) {
            const newNote = {
                id : Date.now(),
                title : props.title,
                isComplete : false,
            }

            props.setNotes([newNote, ...props.notes])
            props.setTitle('')
        }else {
            alert('You are Dumb')
        }
    }

    

    const updateHandler = (event) => {
        event.preventDefault();


        if (props.title) {
            const newNotesArray = props.notes.map((note) => {
                if (note.id === props.editebleNotes.id) {
                    note.title = props.title
                }
                return note
            })
            props.setNotes(newNotesArray)
            props.setEditMode(false)
            props.setEditebleNotes(null)
            props.setTitle('')
        } else {
            alert('You are not focused')
        }
    }

  return (
    <div>
        <form onSubmit={(event) => props.editMode ? updateHandler(event) : noteCreateHandler(event)}>
            <input onChange={(event) => props.setTitle(event.target.value)} value={props.title} type="text" placeholder='Enter a valid note title'/>
            <button type="submit">{props.editMode ? 'Update Note' : 'Add Note'}</button>
        </form>
    </div>
  )
}

export default FromNew