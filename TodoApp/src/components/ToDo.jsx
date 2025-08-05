import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import '../App.css'


function ToDo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content)

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false)
    }


    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '2px solid black', padding: '10px 0px', marginTop: '5px' }}>

            <div style={{ paddingLeft: '5px' }}>

                {
                    editable ? <input value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        style={{ width: '300px' }}
                        className='todo-input'
                        type="text" /> : content
                }

            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                {
                    editable
                        ? <FaCheck className='todo-icons' onClick={updateTodo} />
                        : <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
                }
            </div>

        </div>
    )
}

export default ToDo
