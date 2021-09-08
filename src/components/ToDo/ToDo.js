import React from 'react'
import './ToDo.css'

export default function ToDo(){
    function handleToDoInput(e){
        e.preventDefault();
        console.log(e.target.elements[0].value)
    }
    return(
        <div className="toDoContainer">
            <form className="toDoFormInput" onSubmit={handleToDoInput}>
                <input type="text"/>
                <input type="submit" value='🖊'/>
            </form>
        
        </div>
    )
}