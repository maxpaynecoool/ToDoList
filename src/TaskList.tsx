import React from 'react';
import TaskItem from "./TaskItem";

interface ITasks {
    id: number
    title: string
    body: string
}


const TaskList = ({tasks, title, remove}: { tasks: ITasks[], title: string, remove: (task: ITasks) => void}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {tasks.map((task, index) => {
                return (
                    <TaskItem remove={remove} number={index + 1} task={task} key={task.id}/>
                )
            })}
        </div>
    );
};

export default TaskList;