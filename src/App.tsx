import React, {useEffect, useState} from 'react';
import TaskList from "./TaskList";
import './styles/App.css'
import TaskForm from "./TaskForm";

interface ITasks {
    id: number
    title: string
    body: string
}

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Выучить HTML', body: 'Основные тэги и их атрибуты'},
        {id: 2, title: 'Выучить CSS', body: 'Основные стилевые свойства'},
        {id: 3, title: 'Выучить JS', body: 'Взаимодействие с DOM-деревом'}
    ])

    const createTask = (newTask: ITasks) => {
        setTasks([...tasks, newTask])
    }

    const removeTask = (task: ITasks) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks') as string))
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    return (
        <div className="App">
            <TaskForm create={createTask}/>
            {tasks.length !== 0
                ? <TaskList remove={removeTask} tasks={tasks} title="Мои задачи"/>
                : <h1 style={{textAlign: 'center'}}> Список пуст </h1>
            }
        </div>
    );
}

export default App;
