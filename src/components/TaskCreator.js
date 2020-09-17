import React, {useState} from 'react';


export const TaskCreator = props => {
    
    const [newTaskName, setNewTaskName] = useState('');

    const upDatenewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        props.callback(newTaskName)
        setNewTaskName('');
    };

    return(
        <div className="my-1" >
            <input 
                type="text"
                className="form-control"
                value={newTaskName}  
                onChange={upDatenewTaskValue}
            />
            <button className="btn btn-primary mt-1" onClick={createNewTask} >Create Task</button>
        </div>
    )
}