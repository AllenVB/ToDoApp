import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'


function ToDo({ todo }) {


    const { id, content } = todo
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '2px solid black', padding: '10px 0px', marginTop: '5px' }}>

            <div style={{ paddingLeft: '5px' }}>
                {todo.content}
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' />
                <FaEdit className='todo-icons' />


            </div>
        </div>
    )
}

export default ToDo
