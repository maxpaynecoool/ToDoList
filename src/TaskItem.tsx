import React, {useEffect, useState} from 'react';

interface ITasks {
    id: number
    title: string
    body: string
}

interface ITaskItem {
    number: number
    task: ITasks
    key: number
    remove: (task: ITasks) => void
}

const TaskItem = (props: ITaskItem) => {
    const [taskStyle, setTaskStyle] = useState({
        display: 'flex',
        padding: '15px',
        border: '3px solid black',
        marginTop: '15px',
        color: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
    })

    const changeTaskStyle = () => {
        setTaskStyle({
            ...taskStyle,
            border: '3px solid rgba(75, 245, 7, 0.98)',
            color: 'rgba(75,245,7,0.98)'
        })
    }

    return (
        <div>
            <div style={taskStyle}>
                <div className="task__content">
                    <strong>{props.number}. {props.task.title}</strong>
                    <p>
                        {props.task.body}
                    </p>
                </div>
                <div>
                    <button
                        onClick={changeTaskStyle}
                        className="myButton"
                        style={{marginRight: "20px"}}
                    >
                        ✔️
                    </button>
                    <button onClick={() => props.remove(props.task)}
                            className="myButton"
                    >
                        ❌
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;