import React, {useState} from 'react';

// @ts-ignore
const TaskForm = ({create}) => {
    const [task, setTask] = useState({title: '', body: ''})

    const addNewTask = (e: React.MouseEvent) => {
        e.preventDefault()
        const newTask = {
            ...task, id: Date.now()
        }
        create(newTask)
        console.log(newTask)
        setTask({title: '', body: ''})
    }

    return (
        <form>
            <input
                value={ task.title }
                onChange={ (e) => setTask({...task, title: e.target.value}) }
                type="text"
                placeholder="Название задачи"
                className="myInput"
            />
            <input
                value={ task.body }
                onChange={ (e) => setTask({...task, body: e.target.value}) }
                type="text"
                placeholder="Описание задачи"
                className="myInput"
            />
            <button
                onClick={ addNewTask }
                className="myButton"
            >
                Добавить
            </button>
        </form>
    );
};

export default TaskForm;